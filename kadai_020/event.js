//btnとtextというidをHTMLから所得して定数に代入する
const btn = document.getElementById('btn');
const text = document.getElementById('text');
//ボタンを押したら文字が「ボタンがクリックされました」へ変更する処理
btn.addEventListener('click', () => {
      btn.textContent='ボタンがクリックされました';
});
