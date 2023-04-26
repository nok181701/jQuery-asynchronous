$(() => {
  let content = null;
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "./member.json",
  })
    .done((data) => {
      content = data;
    })
    .fail((error) => {
      console.log("fail", error);
      const errorMessage = `status:${error.status}msg:${error.statusText}`;
      $("#error").text(errorMessage);
    })
    .always(() => {});

  $(".members").change(() => {
    const memberValue = $(".members").val();
    const list = content[memberValue];
    list.map((member) => {
      $("#memberList")
        .append($("<li/>"))
        .text(`名前：${member.name} メール: ${member.mail}`);
    });
    // $("#memberList").append($("<li/>").text(JSON.stringify(list)));
  });
});
