// settting animation

(function () {
    'use strict';
    var home = $('.home-page');
    var $height = $(window).innerHeight(); //chiều cao của cửa sổ
    var controller = new ScrollMagic.Controller(); //http://scrollmagic.io/docs/ScrollMagic.Controller.html

    function animateRoll() {
        if (home.length > 0) {



            // setting #ani2
            var ani2 = new TimelineMax({
                onComplete: function () {
                    // onComplete no reload "khong cho chay lai tru khi load lai page"
                    ani2.kill();
                    //  ani2 chay xong thi chay #rotate1


                    // setting #ani13
                    var ani13 = new TimelineMax({
                        onComplete: function () {
                            // onComplete no reload "khong cho chay lai tru khi load lai page"
                            ani13.kill();
                        }
                    });
                    ani13.staggerFromTo('#ani13', 2, {alpha: 0, scaleX: 0, rotation: -13}, {
                        alpha: 1,
                        scaleX: 1,
                        rotation: 0,
                        delay: 0.5
                    }, 0.5);
                    new ScrollMagic.Scene({triggerElement: "#ani13", offset: -($height / 2.5)})
                        .setTween(ani13)
                        .addTo(controller);
                }
            });


            var ani12 = new TimelineMax({ //ani12: variable được tạo trong file js
                onComplete: function () {
                    // onComplete no reload "khong cho chay lai tru khi load lai page"rotate
                    //hide rotate box sau khi hiện ra
                    ani12.kill();
                    $('.rotate-box').hide();
                    $('#photo360').addClass('in'); 

                }
            });

            //rotate1: id của chân bóng đèn
            //1.5 là giá trị delay
            ani12.staggerFromTo('#rotate1', 1.0, {alpha: 0,}, {alpha: 1, delay: 0.5}, 1.5);
            new ScrollMagic.Scene({triggerElement: ".tween", offset: ($height / 1.25)})
                .setTween(ani12)

                .addTo(controller);

            // rotate2
            var rotate2 = new TimelineMax({
                onComplete: function () {
                    // onComplete no reload "khong cho chay lai tru khi load lai page"
                    rotate2.kill();
                    // slogan
                    var slogan = new TimelineMax({
                        onComplete: function () {
                            // onComplete no reload "khong cho chay lai tru khi load lai page"
                            slogan.kill();
                            // setting #ani1
                            //ani2; text block của block text 2
                            var ani1 = new TimelineMax({
                                onComplete: function () {
                                    // onComplete no reload "khong cho chay lai tru khi load lai page"
                                    ani1.kill();
                                    ani2.staggerFromTo('#ani2', 0.5, {y: "+=100", alpha: 0}, {
                                        y: 0,
                                        opacity: 1,
                                        delay: 0.5
                                    }, 0.5);
                                    new ScrollMagic.Scene({triggerElement: "#ani2", offset: -($height / 6)})
                                        .setTween(ani2)

                                        .addTo(controller);
                                }
                            });

                            /*ani1 thoi gian chay animation la 0.8s bat dau tu vi tri hien tai "y"  + them 50px top
                             ve vi tri hien tai, opacity(alpha) tu 0 ve 1;*/
                            ani1.staggerFromTo('#ani1', 0.8, {y: "+=100", alpha: 0}, {y: 0, alpha: 1, delay: 0.2}, 0.5);
                            new ScrollMagic.Scene({triggerElement: "#ani1", offset: -($height / 6.5)})
                                .setTween(ani1)
                                .addTo(controller);
                        }
                    });

                    slogan.staggerFromTo('#slogan', 1.5, {alpha: 0}, {alpha: 1, delay: 0}, 0);
                    new ScrollMagic.Scene({triggerElement: "#slogan", offset: ($height / 2.5)})
                        .setTween(slogan)
                        .addTo(controller);
                }
            });

            rotate2.staggerFromTo('#rotate2', 2, {alpha: 0}, {alpha: 1, delay: 2}, 0.2);
            new ScrollMagic.Scene({triggerElement: "#header", triggerHook: "onLeave", offset: 0})
                .setTween(rotate2)
                .addTo(controller);


            // setting #ani14
            var ani14 = new TimelineMax({
                onComplete: function () {
                    // onComplete no reload "khong cho chay lai tru khi load lai page"
                    ani14.kill();
                }
            });
            ani14.staggerFromTo('#ani14', 1, {y: "+=250", alpha: 0}, {y: 0, alpha: 1}, 0.5);
            new ScrollMagic.Scene({triggerElement: ".section2", offset: -($height / 13) + 100})
                .setTween(ani14)
                //.addIndicators() // add indicators (requires plugin)
                .addTo(controller);


            // setting #ani16
            var ani16 = new TimelineMax({
                onComplete: function () {
                    // onComplete no reload "khong cho chay lai tru khi load lai page"
                    ani16.kill();
                    // setting #ani3
                    var ani3 = new TimelineMax({
                        onComplete: function () {
                            // onComplete no reload "khong cho chay lai tru khi load lai page"
                            ani3.kill();
                        }
                    });
                    ani3.staggerFromTo('#ani3', 1.2, {x: "+=370", alpha: 0}, {x: 0, alpha: 1}, 0.5);
                    new ScrollMagic.Scene({triggerElement: "#ani3", offset: -($height / 3)})
                        .setTween(ani3)
                        .addTo(controller);
                }
            });
            ani16.staggerFromTo('#ani16', 2, {y: "+=250", alpha: 0}, {y: 0, alpha: 1}, 1.2);
            new ScrollMagic.Scene({triggerElement: ".section2", offset: -($height / 13) + 100})
                .setTween(ani16)
                .addTo(controller);


            // setting #ani4
            var ani4 = new TimelineMax({
                onComplete: function () {
                    // onComplete no reload "khong cho chay lai tru khi load lai page"
                    ani4.kill();
                    // setting #ani5
                    var ani5 = new TimelineMax({
                        onComplete: function () {
                            // onComplete no reload "khong cho chay lai tru khi load lai page"
                            ani5.kill();
                        }
                    });
                    ani5.staggerFromTo('#ani5', 0.75, {alpha: 0, x: "+=120",}, {alpha: 1, x: 0, delay: 0.8}, 0.5);
                    new ScrollMagic.Scene({triggerElement: "#ani5", offset: -($height / 3)})
                        .setTween(ani5)
                        .addTo(controller);
                }
            });
            ani4.staggerFromTo('#ani4', 0.75, {alpha: 0, scale: 1, y: "+=150"}, {
                alpha: 1,
                scale: 1,
                y: 0,
                delay: 1
            }, 0.5);
            new ScrollMagic.Scene({triggerElement: "#ani4", offset: -($height / 3)})
                .setTween(ani4)
                .addTo(controller);


            // setting #ani6
            var ani6 = new TimelineMax({
                onComplete: function () {
                    // onComplete no reload "khong cho chay lai tru khi load lai page"
                    ani6.kill();
                }
            });
            ani6.staggerFromTo('#ani6', 0.75, {alpha: 0, x: "+=100",}, {alpha: 1, x: 0, delay: 1.8}, 0.5);
            new ScrollMagic.Scene({triggerElement: "#ani6", offset: -($height / 3)})
                .setTween(ani6)
                .addTo(controller);

            // setting #ani7
            var ani7 = new TimelineMax({
                onComplete: function () {
                    // onComplete no reload "khong cho chay lai tru khi load lai page"
                    ani7.kill();
                }
            });
            ani7.staggerFromTo('#ani7', 0.75, {alpha: 0, x: "-=300",}, {alpha: 1, x: 0, delay: 2}, 0.5);
            new ScrollMagic.Scene({triggerElement: "#ani7", offset: -($height / 3)})
                .setTween(ani7)
                .addTo(controller);

            // setting #ani8
            var ani8 = new TimelineMax({
                onComplete: function () {
                    // onComplete no reload "khong cho chay lai tru khi load lai page"
                    ani8.kill();
                }
            });
            ani8.staggerFromTo('#ani8', 0.75, {alpha: 0, x: "+=300",}, {alpha: 1, x: 0, delay: 1}, 0.5);
            new ScrollMagic.Scene({triggerElement: "#ani8", offset: -($height / 3)})
                .setTween(ani8)
                .addTo(controller);

            // setting #ani9
            var ani9 = new TimelineMax({
                onComplete: function () {
                    // onComplete no reload "khong cho chay lai tru khi load lai page"
                    ani9.kill();
                }
            });
            ani9.staggerFromTo('#ani9', 0.75, {alpha: 0, x: "-=100",}, {alpha: 1, x: 0}, 0.5);
            new ScrollMagic.Scene({triggerElement: "#ani9", offset: -($height / 3)})
                .setTween(ani9)
                .addTo(controller);


            // setting #ani10
            var ani10 = new TimelineMax({
                onComplete: function () {
                    // onComplete no reload "khong cho chay lai tru khi load lai page"
                    ani10.kill();
                }
            });
            ani10.staggerFromTo('#ani10', 0.75, {alpha: 0, x: "+=100",}, {alpha: 1, x: 0}, 0.5);
            new ScrollMagic.Scene({triggerElement: "#ani10", offset: -($height / 3)})
                .setTween(ani10)
                .addTo(controller);

            // setting #ani11
            var ani11 = new TimelineMax({
                onComplete: function () {
                    // onComplete no reload "khong cho chay lai tru khi load lai page"
                    ani11.kill();
                }
            });
            ani11.staggerFromTo('#ani11', 0.75, {alpha: 0, x: "-=300",}, {alpha: 1, x: 0, delay: 1}, 0.5);
            new ScrollMagic.Scene({triggerElement: "#ani11", offset: -($height / 3)})
                .setTween(ani11)
                .addTo(controller);

            // setting #ani-footer
            var footer = new TimelineMax({
                onComplete: function () {
                    // onComplete no reload "khong cho chay lai tru khi load lai page"
                    footer.kill();
                }
            });
            footer.staggerFromTo('#ani-footer', 0.5, {alpha: 0, y: "+=134",}, {alpha: 1, y: 0, delay: 1.5}, 0.5);
            new ScrollMagic.Scene({triggerElement: "#footer", triggerHook: "onLeave", offset: -($height)})
                .setTween(footer)
                //.addIndicators()
                .addTo(controller);


        }
        ;
    }

    $(window).load(function () {
        setTimeout(function () {
            animateRoll();
        }, 10);

    });

}());

var sec1 = $('#sec1').innerHeight();
var sec2 = $('#sec2').innerHeight();
var sec3 = $('#sec3').innerHeight();
var heightMenu = 180;

// scrol active menu story
var controller1 = new ScrollMagic.Controller({globalSceneOptions: {duration: sec1}});
new ScrollMagic.Scene({triggerElement: "#sec1"})
    .setClassToggle("#high1", "active")
    .addTo(controller1);

// scrol active menu balls’S birth
var controller2 = new ScrollMagic.Controller({globalSceneOptions: {duration: sec2}});
new ScrollMagic.Scene({triggerElement: "#sec2"})
    .setClassToggle("#high2", "active")
    .addTo(controller2);

// scrol active menu winners 2016
var controller3 = new ScrollMagic.Controller({globalSceneOptions: {duration: sec3}});
new ScrollMagic.Scene({triggerElement: "#sec3"})
    .setClassToggle("#high3", "active")
    .addTo(controller3);

//click menu story scroll toi section1
$(document).on('click', '#high1', function (event) {
    $('html, body').animate({scrollTop: $('#sec1').offset().top + 0}, '500');
    event.preventDefault();
});

//click menu story scroll toi section2
$(document).on('click', '#high2', function (event) {
    $('html, body').animate({scrollTop: $('#sec2').offset().top - (heightMenu - 190)}, '500');
    event.preventDefault();
});

//click menu story scroll toi section3
$(document).on('click', '#high3', function (event) {
    $('html, body').animate({scrollTop: $('#sec3').offset().top - (heightMenu + 80)}, '500');
    event.preventDefault();
});