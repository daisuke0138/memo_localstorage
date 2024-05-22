// 保存ボタンでformat-area内のテキストを保存
let memo = 0;
document.getElementById('save').addEventListener('click', function () {
    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const requester = document.getElementById('requester').value;
    const d_line = document.getElementById('d-line').value;
    const progress = document.getElementById('progress').value;
    const detail_memo = document.getElementById('detail-memo').value;
    let memo_nom = localStorage.length + 1;
    console.log(memo_nom);
    //ローカルに保存されたデータの数の値をstringで文字列に変換
    let key_name = 'memo' + String(memo_nom);
    console.log(key_name);
    memo_data = {
        title: title,
        date: date,
        requester: requester,
        d_line: d_line,
        progress: progress,
        detail_memo: detail_memo,
    };
    console.log(memo_data);
    // jsonをJSON形式に変換したテキスト(メモ内容)として定義する
    const json = JSON.stringify(memo_data);
    // ローカルストレージにキー名(memo1,2,3,4,,,)としてjson(メモ内容)を保存
    localStorage.setItem(key_name, json);
    alert('保存しました');

    // メモタイトル欄へテキストの挿入
    if (localStorage.getItem(key_name)) {
        const json = localStorage.getItem(key_name);
        const key_name = JSON.parse(json);
        const m_title = "件名:" + key_name.title;
        const m_d_line = "納期:" + key_name.d_line;
        const m_progress = "進捗:" + key_name.progress;

        //新しいdiv,pタグを挿入  
        let newdiv_nom = localStorage.length;
        console.log(newdiv_nom);
        let newdiv_id = 'newdiv' + String(newdiv_nom);
        const newdiv = document.createElement("div");
        // divのidとクラス名を定義
        newdiv.id = newdiv_id;
        newdiv.className = 'title-t';
        console.log(newdiv_nom);
        newdiv.innerHTML =
        `<input type="checkbox"></input>
        <p id="title${newdiv_nom}">${m_title}</p>
        <p id="d_line${newdiv_nom}">${m_d_line}</p>
        <p id="progress${newdiv_nom}">${m_progress}</p>
        `;
        const insert_div = document.getElementById("title_area");
        insert_div.appendChild(newdiv);
    };
});

// 新規ボタンで入力内容を消去し、入力可能にする。
document.getElementById("new").addEventListener("click", function(){
    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("requester").value = "";
    document.getElementById("d-line").value = "";
    document.getElementById("progress").value = "";
    document.getElementById("detail-memo").value = "";
    alert("新規の仕事をまとめてください")
});

// 削除ボタンでローカルストレージと画面に挿入されたデータを削除
document.getElementById("dele").addEventListener("click", function () {
    // ローカルストレージデータすべてと画面表示されたメモを削除
    localStorage.clear();
    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("requester").value = "";
    document.getElementById("d-line").value = "";
    document.getElementById("progress").value = "";
    document.getElementById("detail-memo").value = "";
    let title_area = document.getElementById("title_area");
    // タイトルエリア内のfirastChild"子要素(div)"をremoveChildで削除。
    // whileで子要素がなくなるまでループ
    while (title_area.firstChild) {
        title_area.removeChild(title_area.firstChild);
    };
    alert("メモを削除しました");
});
// 呼出しボタンで画面上のテキストを空欄にして、ローカルストレージのメモを表示
document.getElementById("reload").addEventListener("click", function () {
    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("requester").value = "";
    document.getElementById("d-line").value = "";
    document.getElementById("progress").value = "";
    document.getElementById("detail-memo").value = "";
    const json = localStorage.getItem("key_name");
    console.log(json);
    // JSON形式のテキスト(メモ内容)をjavascript形式に変換
    const key_name = JSON.parse(json);
    console.log(key_name);
    // メモ内容を各inputタグに表示
    document.getElementById("title").value = key_name.title;
    document.getElementById("date").value = key_name.date;
    document.getElementById("requester").value = key_name.requester;
    document.getElementById("d-line").value = key_name.d_line;
    document.getElementById("progress").value = key_name.progress;
    document.getElementById("detail-memo").value = key_name.detail_memo;
});

// 上部メモ欄に表示し続ける
if (localStorage.getItem("memo1")){
    const json = localStorage.getItem("memo1");
    const key_name = JSON.parse(json);
    const m_title = "件名:" + key_name.title;
    const m_d_line = "納期:" + key_name.d_line;
    const m_progress = "進捗:" + key_name.progress;

    //新しいdiv,pタグを挿入  
    let newdiv_nom = localStorage.length;
    console.log(newdiv_nom);
    let newdiv_id = 'newdiv' + String(newdiv_nom);
    const newdiv = document.createElement("div");

    // divのidとクラス名を定義
    newdiv.id = newdiv_id;
    newdiv.className = 'title-t';
    newdiv.innerHTML =
        `<input type="checkbox"></input>
        <p id="title${newdiv_nom}">${m_title}</p>
        <p id="d_line${newdiv_nom}">${m_d_line}</p>
        <p id="progress${newdiv_nom}">${m_progress}</p>
        `;
    const insert_div = document.getElementById("title_area");
    insert_div.appendChild(newdiv);

};

