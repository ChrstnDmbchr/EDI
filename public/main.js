function playFile(file) {
  $.ajax({
    url: '/api/soundboard',
    method: 'POST',
    data: JSON.stringify(file),
    contentType: 'application/json'
  })
}

$(document).ready(function () {
  $.ajax({
    url: '/api/soundboard',
    method: 'GET'
  })
  .then(function (data) {
    var str = ''
    data.forEach(function (file) {
      str += `<form action="/api/soundboard" method="POST">
              <input type="hidden" name="play" value="${file}">
              <button>${file.split('.')[0]}</button>
              </form>`
    });
    $('#container').html(str);
  });
})

$("btn").click(function () {
  playFile(this.value);
})