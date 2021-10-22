$(document).ready(function() {

  function scrollBar() {
    $(window).scroll(function() {
      var x = $(this).scrollTop();
      if (x <= 100) {
        $('aside').css('height', '60px');
        $('#share').css('left', '0px');
      } else {
        $('aside').css('height', '40px');
        $('#share').css('left', '-100px');
      }
    })
  }
  scrollBar();

  $('#menu-btn').click(function() {
    $('#menu-div,main').toggle(300);
  });


  var baslik = $('h1').text();
  $('#menu-div h3').text(baslik);

  $('#share').append('<center><h2 style="position:fixed;margin:0px;bottom:0px;right:0px;left:0px;color:white;background:black;font-family:Sofia;">Kodlama</h2></center>');

});
