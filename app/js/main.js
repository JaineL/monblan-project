$(function(){

    $(".button").on("click",function(e) {
        if ($(this).hasClass("grid")) {
            $(".event__card").removeClass("grid").addClass("list");
        }
        else if($(this).hasClass("list")) {
            $(".event__card").removeClass("list").addClass("grid");
        }
    });



    $("#datepicker").datepicker({
        showOn: "button",
        buttonImage: "img/calendar.png",
        buttonImageOnly: true,
        buttonText: "Выбрать дату"
    });
    $("#datepicker2").datepicker({
        showOn: "button",
        buttonImage: "img/calendar.png",
        buttonImageOnly: true,
        buttonText: "Выбрать дату"
    });

    $.datepicker.regional['en'] = {
        monthNames: ['January','February','March','April','May','June','July','August','September','October','November','December'],
        monthNamesShort: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        dayNames: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
        dayNamesShort: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
        dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa'],
        weekHeader: 'Не',
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false,
        showMonthAfterYear: false,
        yearSuffix: '',
        prevText: "«",
        nextText: "»"
    };
    $.datepicker.setDefaults($.datepicker.regional['en']);

    $(".btn_clear").on("click", function(e){
        e.preventDefault();

        var val = $("#datepicker2").val();

        if(val.length >= 1){
            $("#datepicker2").val('');
        }
    });
});