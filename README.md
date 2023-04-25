# jQuery-asynchronous

jQuery を利用した ajax 通信

1.ローカルサーバーを立ち上げる(node.js)
npm で npm install http-server と入力。 http-server をインストール

2.html で jQuery を呼び出す

3.json ファイルで取得したいファイルを記述

4.js ファイルで非同期処理を記述

<!-- $(() => {
  console.log("ajax start");
  $.ajax({　・・・①
    type: "GET",・・・②
    dataType: "json",・・・③
    url: "./member.json",・・・④
  })
    .done((data) => {・・・⑤
      console.log("success", data);
    })
    .fail((error) => {・・・⑥
      console.log("fail", error);
    })
    .always(() => {・・・⑦
      console.log("complete");
    });
}); -->

①：ajax()で ajax 通信をすることができる。ajax 通信の引数にオブジェクトを渡すことで色々設定できる。
②：リクエストを指定。今回は取得をするので"GET"を指定。
③：サーバーから返されるデータの型を指定。今回は./member.json なので json を指定。
④：アクセス先を指定。
⑤：done()で通信が成功したときに起きる処理を記述。
⑥：fail()で通信が失敗しあっ時に起きる処理を記述。
⑦：always()で取得したどうかかかわらず起きる処理を記述。
