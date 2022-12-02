// $(document).ready(function(){
//     $('body').html('<h1>Hello jQuery!!</h1>')
// });


///// 【5章 jQueryでcssを操作】
// $(function(){
//     $('.box1').css({
//         'background-color': '#0000FF',
//         'height': '100px'
//     })
// })

// ●上から下
// $(function(){
//     $('.box1').slideDown(2000);
// });
// ※display: none;とセット

// ●下から上
// $(function(){
//     $('.box1').slideUp(1000);
// });

// ●表示
// $(function(){
//     $('.box1').show(1000);
//     $('.box1').css({'background': '#0000FF'});
// });
// ※display:none → display : show

// ●非表示
// $(function(){
//     $('.box1').hide(1000);
// });

// 『確認問題』
// $(function(){
//     $('.box1').slideDown(2000, function(){
//         $('.box1').css({
//             'background-color': '#0000FF',
//             'wigth': '200px',
//             'height': '100px'
//         }).slideUp(2000);
//     });
// });


///// 【6章 イベント検出】
// $(function() {
//     // ●マウスオーバー
//     $('.box1').mouseover(function(){
//         $('.box1').css({'background-color': '#0000FF'});
//     });
//     // ●マウスアウト
//     $('.box1').mouseout(function(){
//         $('.box1').css({'background-color': '#FF0000'});
//     });
// });

// ●class属性追加・解除
// $(function() {
//     $('.box1').mouseover(function(){
//         $('.box1').addClass('box1-ext');
//     });
//     $('.box1').mouseout(function(){
//         $('.box1').removeClass('box1-ext');
//     });
// });

// ●マウスクリックイベント
$(function(){
    $('.box1').on('click', function(){
        $('.box1').addClass('box1-ext');
    });
    $('.box1').mouseout(function(){
        $('.box1').removeClass('box1-ext');
    });
});