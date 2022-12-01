///// 【関数(引数・戻り値)】 /////
// let alertString;
// alertString = addString("WebCamp");

// alert(alertString);

// function addString(strA){
//     let addStr = "Hello " + strA;
//     return addStr;
// }


///// 【入力ダイアログ】 /////
// let promptStr = prompt('何か好きな文字を入力してください');

// alert(promptStr);


///// 【複数の関数】 /////
// じゃんけんの手の入力プロンプト欄
let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
while((user_hand != 'グー') && (user_hand != 'チョキ') && (user_hand != 'パー') && (user_hand != null)) {
    alert('グー・チョキ・パーのいずれかを入力してください');
    user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
}
// じゃんけんの手をランダムに作成
let js_hand = getJShand();
// ジャンケンの手を比べ関数呼び出し、結果をjudgeに入れる
let judge = winLose(user_hand, js_hand);

if(user_hand != null){
    alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptが選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
} else {
    alert('またチャレンジしてね')
}

function getJShand() {
    let js_hand_num = Math.floor(Math.random() * 3);
    let hand_name;
    
    if(js_hand_num == 0){
        hand_name = "グー";
    } else if(js_hand_num == 1) {
        hand_name = "チョキ";
    } else if(js_hand_num == 2) {
        hand_name = "パー";
    }
    
    return hand_name;
}

// じゃんけんの手を比べる
function winLose(user, js) {
    let winLoseStr;

    if(user == 'グー') {
        if(js == 'グー') {
            winLoseStr = "あいこ";
        } else if(js == 'チョキ') {
            winLoseStr = "勝ち";
        } else if(js == 'パー') {
            winLoseStr = "負け";
        }
    } else if(user == 'チョキ') {
        if(js == 'グー') {
            winLoseStr = "負け";
        } else if(js == 'チョキ') {
            winLoseStr = "あいこ";
        } else if(js == 'パー') {
            winLoseStr = "勝ち";
        }
    } else if(user == 'パー') {
        if(js == 'グー') {
            winLoseStr = "勝ち";
        } else if(js == 'チョキ') {
            winLoseStr = "負け";
        } else if(js == 'パー') {
            winLoseStr = "あいこ";
        }
    }

    return winLoseStr;
}