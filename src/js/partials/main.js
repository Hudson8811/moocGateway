$('.header-burger').click(function(e){
    e.preventDefault();
    $('.mobile-menu-wrapper').addClass('mobile-menu-wrapper--active');
    $('.mobile-overlay').addClass('mobile-overlay--active');
});

$('.mobile-overlay').click(function(e){
    e.preventDefault();
    $('.mobile-menu-wrapper').removeClass('mobile-menu-wrapper--active');
    $('.mobile-overlay').removeClass('mobile-overlay--active');
});

