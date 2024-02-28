$(".box").mouseover(function() {
    var currentBoxClass = $(this).attr("class").split(' ')[1]; 
    $("." + currentBoxClass).addClass("mouseOn");

    var otherBoxesClasses = $(".box").not(this).map(function() {
        return $(this).attr("class").split(' ')[1];
    }).get();

    $.each(otherBoxesClasses, function(index, className) {
        $("." + className).addClass("other");
    });

    // Find the corresponding name element and add a class to make it visible
    $(this).find(".n" + currentBoxClass.charAt(1)).addClass("nameVisible");
}).mouseout(function() {
    var theimage = $(this).attr("class").split(' ')[1]; 
    $("." + theimage).removeClass("mouseOn");

    var otherBoxesClasses = $(".box").not(this).map(function() {
        return $(this).attr("class").split(' ')[1];
    }).get();

    $.each(otherBoxesClasses, function(index, className) {
        $("." + className).removeClass("other");
    });

    // Find the corresponding name element and remove the class to hide it again
    $(this).find(".n" + theimage.charAt(1)).removeClass("nameVisible");
});
