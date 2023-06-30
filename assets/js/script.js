$(document).ready(function () {

    // Dropdown for flex-direction
    $("#flex-direction").change(function () {
        var value = $(this).val();
        $(".boxes").css("flex-direction", value);
    });

    // Dropdown for align-items
    $("#align-items").change(function () {
        var value = $(this).val();
        $(".boxes").css("align-items", value);
    });

    // Dropdown for justify-content
    $("#justify-content").change(function () {
        var value = $(this).val();
        $(".boxes").css("justify-content", value);
    });

    // Dropdown for flex-wrap
    $("#flex-wrap").change(function () {
        var value = $(this).val();
        $(".boxes").css("flex-wrap", value);
    });

});