//btnとtextというidをHTMLから所得して定数に代入する
const btn = document.getElementById('btn');
const text = document.getElementById('text');
btn.addEventListener('click', () => {
      text.textContent='ボタンがクリックされました';
});
