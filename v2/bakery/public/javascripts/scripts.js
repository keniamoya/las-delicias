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

jQuery(document).ready(function($) {
    var bArray = [];
    var sArray = [4, 6, 8, 10];
    for (var i = 0; i < $('.bubbles').width(); i++) {
        bArray.push(i);
    }

    function randomValue(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }
    setInterval(function() {
        var size = randomValue(sArray);
        $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
        $('.individual-bubble').animate({
            'bottom': '100%',
            'opacity': '-=0.7'
        }, 3000, function() {
            $(this).remove()
        });
    }, 350);

});