$(function () {
  var flame = $('#flame');
  var txt = $('h1');

  flame.on(
    {
      click: function () {
        flame.removeClass('burn').addClass('puff');
        $('.smoke').each(function () {
          $(this).addClass('puff-bubble');
        });
        $('#glow').remove();
        txt.html("Felices <b>18</b> Amor de mi vida, Guadalupe...").delay(10550).fadeOut(800);
        $('#candle').animate(
          {
            //'opacity': '.5'
          }, 100);
      }
    })
});