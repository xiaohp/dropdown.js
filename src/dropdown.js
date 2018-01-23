$('.dropdown').on('click', function(e) {
    $('.dropdown.open').removeClass('open')
    $(e.currentTarget).addClass('open')
})

$(document).on('click', function(e) {
    var menu = $(e.target).closest('.dropdown')
    if (menu.length < 1) {
        $('.dropdown').removeClass('open')
    }
})
