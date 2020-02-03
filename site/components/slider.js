$(document).ready(function(){
    $('.next').click(function(){
        let currentImage = $('.img.curry');
        let currentImageIndex = $('.img.curry').index();
        let nextImageIndex = currentImageIndex + 1;
        let nextImage = $('.img').eq(nextImageIndex);
        currentImage.removeClass('curry');

        if(nextImageIndex == ($('.img:last').index() + 1)){
            $('.img').eq(0).addClass('curry');
        } else {
            nextImage.addClass('curry');
        }
    });

    $('.prev').click(function(){
        let currentImage = $('.img.curry');
        let currentImageIndex = $('.img.curry').index();
        let prevImageIndex = currentImageIndex - 1;
        let prevImage = $('.img').eq(prevImageIndex);

        currentImage.removeClass('curry');
        prevImage.addClass('curry');
    })
})

$('.n').on('click', (el) => {
    $('.active')[0].classList.toggle('active')
    $(el.target).toggleClass("active");
});