$(document).ready(function () {
  AOS.init();
  $(".navbar-nav .nav-link").on("click", function () {
    $(".navbar-nav").find(".activate").removeClass("activate");
    $(this).addClass("activate");
  });
  $("#myForm").submit(function (e) {
    e.preventDefault();
    $("#spinModal").show();
    let form = $(this);
    let data = {
      email: $("#email").val(),
      name: $("#name").val(),
      message: $("#message").val(),
      _template: "table",
    };
    console.log(data);
    $.ajax({
      url: "https://formsubmit.co/ajax/af644f79dc5f30e0e08021eadb9d7db7",
      method: "POST",
      data: data,
      dataType: "json",
      success: function () {
        $("#spinModal").hide();
        $("#myModal").show();
        form.trigger("reset");
      },
    });
  });
});
