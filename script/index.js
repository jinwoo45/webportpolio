var slideNo = 0;

function slide(x) {

    slideNo += x;
    if (slideNo > 3) slideNo = 0;
    if (slideNo < 0) slideNo = 3;

    var y = slideNo * -100 + '%';

    $('#potOutBox').css('margin-left', y);

}

function playSlide() {
    setInterval('slide(1)', 3000);
}

$(document).ready(function () {

    $('.left').click(function () {
        slide(-1);
    });

    $('.right').click(function () {
        slide(1);
    });


    $('.list').click(function () { //각 메뉴를 클릭했을 때
        var x = $(this).attr('href'); //클릭한 메뉴(li)의 href값(연결할 곳)
        var newY = $(x).offset().top; //각 메뉴의 연결할 위치의 세로 값

        //계산된 위치값으로 페이지 스크롤 Animation
        $('html,body').animate({
            scrollTop: newY
        }, 500, 'swing');
    });

    $('.list2').click(function () { //각 메뉴를 클릭했을 때
        //            $('.list2').css('background-color','#555'); 
        //            $(this).css('background-color','gold'); 
        var x = $(this).attr('href'); //클릭한 메뉴(li)의 href값(연결할 곳)
        var newY = $(x).offset().top; //각 메뉴의 연결할 위치의 세로 값

        //계산된 위치값으로 페이지 스크롤 Animation
        $('html,body').animate({
            scrollTop: newY
        }, 500, 'swing');
    });
}); //$(document).ready()


//scrollTop 작업용---------------

window.onscroll = function () {
    var nav = document.getElementById("navi"); //메뉴 네비게이션 nav

    //페이지 스크롤 후 상단의 위치가 100px을 넘으면 메뉴의 스타일을 바꿈
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        nav.className = "nav2"; //메뉴 nav의 스타일을 변경
    } else { //그렇지 않으면(100px 이하이면) 원래 모양으로 변경
        nav.className = "nav1";
    }
} // end of window.onscroll


$(window).scroll(function () {

    var current = $(this).scrollTop(); //현재 스크롤 위치

    var total = $('.list2').length; //전체 버튼(메뉴) 갯수

    var i;
    for (i = 0; i < total; i++) {
        var menu_pos = $($('.list2').eq(i).attr('href')).offset().top; //각 메뉴의 링크 위치값

        /*현재 스크롤 위치가 해당 메뉴의 링크 위치를 넘어서면 버튼의 모양(스타일) 변경*/
        if (current >= $(".contact").offset().top - 500) {
            $('.list2').css('background', '#555'); //전체 버튼 모양초기화 후
            $('.list2').eq(i).css('background', 'gold'); //해당 버튼 모양 변경
        } else if (current >= (menu_pos - 70)) {
            $('.list2').css('background', '#555'); //전체 버튼 모양초기화 후
            $('.list2').eq(i).css('background', 'gold'); //해당 버튼 모양 변경
        } else
            $('.list2').eq(i).css('background', '#555'); //버튼 모양 복원
    }

    //화면(상단)의 스크롤  위치가 100px 이상이면 'top' 버튼 보이게 함, 미만이면 숨김
    if ($(this).scrollTop() >= 100)
        //스크롤 버튼 클릭하면 화면 상단으로 이동(애니메이션 효과 적용)
        $('.scrollBox').click(function () {
            $('html,body').stop().animate({
                scrollTop: 0
            }, 500, 'swing');
        });

}); //$(window).scroll()
