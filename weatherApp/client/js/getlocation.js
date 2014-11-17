'use strict';

$(function () {

  var showPosition = function(position) {
    var lat = position.coords.latitude;
    var longi = position.coords.longitude;
    $.ajax({
      url: document.URL + 'current/' + lat + '/' + longi,
      type: 'GET'
    }).done(function(data) {
      $('#message').html(function() {
        var newMessage = '<h1>' + data.msg + '</h1>';
        return newMessage;
      });
      // alert(data.msg);
    });
  };

  var showError = function(error) {
    console.log(error);
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    alert('Geolocation is not supported in your browser');
  }
});
