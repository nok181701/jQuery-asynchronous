$(() => {
  //即時関数：DOMが生成されたタイミングで読み込まれる処理
  console.log("ajax start");
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "./member.json",
  })
    .done((data) => {
      console.log("success", data);
    })
    .fail((error) => {
      console.log("fail", error);
    })
    .always(() => {
      console.log("complete");
    });
});

$("#btn").click(() => {
  alert("クリックされました");
});
