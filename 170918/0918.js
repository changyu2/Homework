$(document).ready(function() {
  var tab = $('.tab');

  tab.on('click focusin', function() {
    $(this).parent().addClass('active')
      .siblings().removeClass('active');
  });
});