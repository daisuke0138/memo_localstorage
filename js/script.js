// 保存ボタンでformat-area内のテキストを保存
document.getElementById('save').addEventListener('click', function () {
    const title1 = document.getElementById('title').value;
    const date1 = document.getElementById('date').value;
    const requester1 = document.getElementById('requester').value;
    const d_line1 = document.getElementById('d-line').value;
    const progress1 = document.getElementById('progress').value;
    const detail_memo1 = document.getElementById('detail-memo').value;

    const memo1 = {
        title1: title1,
        date1: date1,
        requester1: requester1,
        d_line1: d_line1,
        progress1: progress1,
        detail_memo1: detail_memo1,
    };
    console.log(memo1);

    // jsonをJSON形式に変換したテキスト(メモ内容)として定義する
    const json = JSON.stringify(memo1);
    // ローカルストレージのmemo1というキーとしてjson(メモ内容)を保存
    localStorage.setItem('memo1', json);
    alert('保存しました');
    if (localStorage.getItem("memo1")) {
        const json = localStorage.getItem("memo1");
        const memo1 = JSON.parse(json);
        const m_title1 = "件名:" + memo1.title1;
        const m_d_line1 = "納期:" + memo1.d_line1;
        const m_progress1 = "進捗:" + memo1.progress1;
        // pタグに対してはinnerTextを使用
        // inputタグに対してはvalueを使用
        document.getElementById("title0").innerText = m_title1;
        document.getElementById("d-line0").innerText = m_d_line1;
        document.getElementById("progress0").innerText = m_progress1;
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

// 削除ボタンでローカルストレージのデータを削除
document.getElementById("dele").addEventListener("click", function () {
    localStorage.removeItem("memo1");
    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("requester").value = "";
    document.getElementById("d-line").value = "";
    document.getElementById("progress").value = "";
    document.getElementById("detail-memo").value = "";
    document.getElementById("title0").innerText = "";
    document.getElementById("d-line0").innerText = "";
    document.getElementById("progress0").innerText = "";
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
    const json = localStorage.getItem("memo1");
    console.log(json);
    // JSON形式のテキスト(メモ内容)をjavascript形式に変換
    const memo1 = JSON.parse(json);
    console.log(memo1);
    // メモ内容を各inputタグに表示
    document.getElementById("title").value = memo1.title1;
    document.getElementById("date").value = memo1.date1;
    document.getElementById("requester").value = memo1.requester1;
    document.getElementById("d-line").value = memo1.d_line1;
    document.getElementById("progress").value = memo1.progress1;
    document.getElementById("detail-memo").value = memo1.detail_memo1;
});

// 上部メモ欄に表示し続ける
if (localStorage.getItem("memo1")){
    const json = localStorage.getItem("memo1");
    const memo1 = JSON.parse(json);
    const m_title1 = "件名:" + memo1.title1;
    const m_d_line1 = "納期:" + memo1.d_line1;
    const m_progress1 = "進捗:" + memo1.progress1;
// pタグに対してはinnerTextを使用
// inputタグに対してはvalueを使用
document.getElementById("title0").innerText = m_title1;
document.getElementById("d-line0").innerText = m_d_line1;
document.getElementById("progress0").innerText = m_progress1;
};

