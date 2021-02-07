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

$('.profile-menu-link').click(function(e){
    e.preventDefault()
    const $this = $(this);
    const id = $this.data('id');

    if(!$this.hasClass('profile-menu-link--active')){
        $('.profile-menu-link').removeClass('profile-menu-link--active');
        $this.addClass('profile-menu-link--active');
        $('.profile-mobile-wrapper').removeClass('profile-mobile-wrapper--active');
        $(`.profile-mobile-wrapper[data-id="${id}"]`).addClass('profile-mobile-wrapper--active');
    }
});

$('.bac-admin-btn').click(function(e){
    e.preventDefault();
    $('.profile-mobile-wrapper').removeClass('profile-mobile-wrapper--active');
    $('.profile-menu-link').removeClass('profile-menu-link--active');
})