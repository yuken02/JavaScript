// $(document).ready(function(){
//     $('body').html('<h1>Hello jQuery!!</h1>')
// });


///// 【jQueryでcssを操作】
// $(function(){
//     $('.box1').css({
//         'background-color': '#0000FF',
//         'height': '100px'
//     })
// })

// 上から下
// $(function(){
//     $('.box1').slideDown(2000);
// });
// ※display: none;とセット

// 下から上
// $(function(){
//     $('.box1').slideUp(1000);
// });

// 【表示】
// $(function(){
//     $('.box1').show(1000);
//     $('.box1').css({'background': '#0000FF'});
// });
// ※display:none → display : show

// 【非表示】
// $(function(){
//     $('.box1').hide(1000);
// });

// 【確認問題】
$(function(){
    $('.box1').slideDown(2000, function(){
        $('.box1').css({
            'background-color': '#0000FF',
            'wigth': '200px',
            'height': '100px'
        }).slideUp(2000);
    });
});