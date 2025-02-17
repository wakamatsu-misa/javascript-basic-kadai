
//output-btnというidを持つHTML要素を所得し、定数に代入する
const btn =document.getElementById('output-btn');

//HTML要素がクリックされた時にイベント処理を実行する
btn.addEventListener('click',() =>{
  console.log('クリックされた');
});

//クリック時にリスト要素を追加する処理

//add-btnというidを持つHTML要素を所得し、定数に代入する
const addBtn = document.getElementById('add-btn');

//parent-listというidを持つHTML要素を取得し、定数に代入する
const parentList = document.getElementById('parent-list');

//HTML要素がクリックされた時にイベント処理を実行する
addBtn.addEventListener('click', ()=>{
  //li要素を新しく作成する
  const childList = document.createElement('li');
 //作成したli要素に「これはリスト要素」といるテキストを追加する
childList.textContent = 'これはリスト要素';
//作成したli要素をul要素の子要素として末尾に追加する
parentList.appendChild(childList);
})

//テキストボックスに入力された文字数をカウントする方法


//count-Btnというidを持つHTML要素を取得し、定数に代入する
const countBtn = document.getElementById('count-btn');
//HTMLがクリックされた時に入力された文字列を所得する
countBtn.addEventListener('click', () => {
//テキストボックスに入力された文字列を所得する処理
const text = document.forms.textForm.textBox.value;
//取得した文字数を出力する
console.log(text.length + '文字');
});

//ラジオボックスに値を所得する

// area-btnというidを持つHTML要素を取得し、定数に代入する
const areaBtn = document.getElementById('area-btn');

// HTML要素がクリックされたときにイベント処理を実行する
areaBtn.addEventListener('click', () => {
  // 選択されたラジオボタンの値を取得する
  const area = document.forms.areaForm.area.value;

  // 取得した値を出力する
  console.log(area);
});

//チェックボックスから値を所得する

// os-btnというidを持つHTMLを取得し、定数に代入する


// os-btnというidを持つHTML要素を取得し、定数に代入する
const osBtn = document.getElementById('os-btn');

// HTML要素がクリックされたときにイベント処理を実行する
osBtn.addEventListener('click', () => {
  // すべてのチェックボックスを配列風のデータで取得する
  const items = document.forms.osForm.os;

  // 繰り返し処理でチェックボックスを1つずつ取り出し、もし選択されていれば値を出力する
  for (let i = 0; i < items.length; i++) {
    if (items[i].checked) {
      console.log(items[i].value);
    }
  }
});


