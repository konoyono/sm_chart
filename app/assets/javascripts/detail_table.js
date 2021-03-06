// 表の動的作成
function makeDetailTable(data, tableId) {
  // 表の作成開始
  var rows = [];
  var table = document.createElement("table");
  table.setAttribute("id", "detailTable");

  // 表に2次元配列の要素を格納
  for (i = 0; i < data.length; i++) {
    rows.push(table.insertRow(-1)); // 行の追加
    for (j = 0; j < data[0].length; j++) {
      cell = rows[i].insertCell(-1);
      if (j == 1) {
        continue;
      } else if (j < 8 || i == 0) {
        cell.appendChild(document.createTextNode(data[i][j]));
      } else {
        var link = document.createElement("a");
        //リンク先設定
        link.href = `https://www.youtube.com/results?search_query=${
          data[i][2]
        }+${data[i][3]}+SINGLE 譜面確認`;
        link.target = "_blank";
        link.appendChild(document.createTextNode("Youtube"));
        cell.appendChild(link);
      }
      // 位置の設定
      if (i == 0) {
        cell.style.textAlign = "center";
      } else if (j == 5) {
        cell.style.textAlign = "right";
      } else if (j == 3) {
        cell.style.textAlign = "left";
      } else {
        cell.style.textAlign = "center";
      }

      // 背景色の設定
      if (i == 0) {
        cell.style.backgroundColor = "#aaa";
      } else if (i % 2 == 0) {
        cell.style.backgroundColor = "#ddd";
      } else {
        cell.style.backgroundColor = "#eee";
      }
      // 幅の設定
      if (j == 3) {
        cell.style.width = "370px";
      } else if (j == 4) {
        cell.style.width = "110px";
      } else if (j == 5) {
        cell.style.width = "70px";
      }
    }
  }

  // 指定したdiv要素に表を加える
  document.getElementById(tableId).appendChild(table);
}

function onload_detail() {
  var data = [];
  data.push([
    "プレイ日",
    "",
    "Lv.",
    "タイトル",
    "難易度",
    "スコア",
    "生存秒",
    "リザルト",
    "譜面確認"
  ]);

  for (result of gon.allResults) {
    data.push(result);
  }

  makeDetailTable(data, "detailTable");
}

function search_song() {
  var data = [];
  data.push([
    "プレイ日",
    "",
    "Lv.",
    "タイトル",
    "難易度",
    "スコア",
    "生存秒",
    "リザルト",
    "譜面確認"
  ]);
  var table = document.getElementById("detailTable");
  var search_title = $("#result_title").val();
  var search_level = $("#result_level").val();
  var search_cleared = $("#result_cleared").val();

  for (result of gon.allResults) {
    if (search_title != "" && search_title != result[3]) {
      continue;
    }
    if (search_level != "" && search_level != result[2]) {
      continue;
    }
    if (search_cleared != "" && search_cleared != String(result[1])) {
      continue;
    }

    data.push(result);
  }

  if (table.hasChildNodes()) {
    table.removeChild(table.firstChild);
  }
  makeDetailTable(data, "detailTable");
}

function show_all() {
  var data = [];
  data.push([
    "プレイ日",
    "",
    "Lv.",
    "タイトル",
    "難易度",
    "スコア",
    "生存秒",
    "リザルト",
    "譜面確認"
  ]);
  var table = document.getElementById("detailTable");
  $("#result_title").val("");
  $("#result_level").val("");
  $("#result_cleared").val("");

  for (result of gon.allResults) {
    data.push(result);
  }

  if (table.hasChildNodes()) {
    table.removeChild(table.firstChild);
  }
  makeDetailTable(data, "detailTable");
}
