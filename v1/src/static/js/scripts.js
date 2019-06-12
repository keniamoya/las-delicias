$('#recipeCategories').carousel({
    interval: 5000
})

$('.carousel .carousel-item').each(function() {
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    if (next.next().length > 0) {
        next.next().children(':first-child').clone().appendTo($(this));
    } else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    }
});

$('#recipeProducts1').carousel({
    interval: 4000
})
$('#recipeProducts2').carousel({
    interval: 4500
})