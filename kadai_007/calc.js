//変数numに値を設定する
let num = 30;

//変数numが３と５の倍数の場合’３と５の倍数です’と表示する

if (num % 3===0 && num % 5===0){
    console.log('3と5の倍数です');
}

//変数numが3の倍数の場合： “3の倍数です”と表示する
else if (num % 3 === 0){
    console.log('3の倍数です');
}

//変数numが５の倍数の場合’５の倍数です’と表示する
else if(num % 5 === 0){
    console.log('5の倍数です');
}
//変数が例外と時はnumを表示する
else {
    console.log( num );
}
