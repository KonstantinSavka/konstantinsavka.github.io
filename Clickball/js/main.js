let element = document.querySelector('.logo');
element.innerHTML = element.innerHTML.replace('ball', '<span style="color: #ffe900;">ball</span>');

$(document).ready(function () {


    let palm = $('.palm');
    palm.addClass('palm-move')



    let player = $('.player');

    function parallax() {
        if (jQuery(window).width() > 1199) {
            $(window).on('mousemove resize', (function (e) {
                let w = $(window).width();
                let h = $(window).height();
                let offsetX = 0.5 - e.pageX / w;
                $(".parallax").each((function (i, el) {
                    let offset = parseInt($(el).data('offset'));
                    let translate = "translateX(" + Math.round(offsetX * offset) + "px";
                    $(el).css({
                        'transform': translate
                    });
                }));
            }));
        }
    }

    function playerMove() {
        player.addClass('player-move');
        player.addEventListener('animationend', parallax());
    };



    playerMove();











});