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

document.getElementById('detail-memo').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        event.preventDefault();

        const textarea = event.target;
        const text = textarea.value;

        // 改行ごとに分割して配列に変換
        const lines = text.split('\n');

        // 最後の行（最新の入力行）を取得
        const latestLine = lines[lines.length - 1];

        // チェックボックス付きリストに追加
        addCheckboxListItem(latestLine);
        // 改行を追加
        textarea.value += '\n';
    };
});
