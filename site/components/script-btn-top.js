function backToTop() {
    let button = $('.back-to-top');

    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 50){
            button.fadeIn();

        }else {
            button.fadeOut();
        }
    });

}

backToTop();