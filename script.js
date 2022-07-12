
overAge = function () {
  $('#age-verify').addClass('hidden');
  Cookies.set('overAge', 'yes', { expires: 7 });
}

underAge = function () {
  $('#age-verify').addClass('under');
}

goBack = function () {
    window.history.back();
}

window.onload = function () {
  if (Cookies.get('overAge') == 'yes') {
    $('#age-verify').addClass('hidden');
  }
}
