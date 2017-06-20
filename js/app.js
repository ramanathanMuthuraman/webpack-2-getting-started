import '../css/app.scss';

$(function () {
  $('.string-input').on('keyup', function () {
    $('.base64-input').val(btoa($(this).val()));
  });
});

