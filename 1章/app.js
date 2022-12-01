///// 1章 /////
// alert('Hello World');



///// 2章 /////
// let hello = 'Hello world';
// alert(hello);

// let int1 = 1;
// let int2 = -10;
// let float1 = 3.14;
// let str1 = 'JavaScriptを覚えよう';

// alert(float1);


// alert(4 + 3);
// alert(8 - 3);
// alert(2 * 6);
// alert(10 / 2);

// alert('Hello' + 'World');

// let str2 = 'Hello';
// let str3 = 'World!!';
// alert(str2 + str3);


// 【分岐条件】
//if(条件1){
//     処理1
// } else if(条件2){
//   処理2
// } else{
//   処理3
// }
let orange = 100;
let apple = 120;

if(orange < apple){
    alert('みかんの値段がりんごより安い');
} else if(orange == apple){
    alert('みかんとりんごが同じ値段');
} else {
    alert('みかんの値段がりんごより高い');
}


// 【繰り返し文】
// 〈while文〉
// 条件式が真（true）である間
let max = 100;
let num = 1;
let count = 0;

while(num < max){
    num = num * 2;
    count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');


// 〈do ... while文〉
// 条件式のtrue／falseに関わらず、最初の1回だけは必ず
// do{
//     最低1回は行われる処理
// }while(条件式);


// 〈for文〉
// 決められた回数の処理を繰り返す
// for ( 初期値; 条件式; 増減値 ){
//     繰り返し処理
//   }

let i;
let num2 = 0;

for(i = 1; i < 11; i++){
    num2 = num2 + 1;
}

alert('1から10まで足し算した結果は' + num2 + 'です');

// 処理の内容
// 1	「変数i」を宣言
// 2	「変数num」を宣言し、初期値を「0」に設定
// 3	変数iの初期値を「1」に設定し、変数iが「11」未満のときは変数iに1を足す（「i++」は「i = i+1」と同じ）
// 4	変数numに「num+i」を代入
// 5	アラートウィンドウに計算結果を表示