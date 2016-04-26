$(document).ready(function() {
  var key = 'AIzaSyAcmscSUENKMTKPgTTX9982lWLuFn2DqC0';
  $.ajax({
    url: 'https://maps.googleapis.com/maps/api/directions/json?origin=place_id:ChIJSydXgVm8woARrlqYCBU_ZRQ&destination=place_id:ChIJeVT19fK9woAR2y9xeIx-CTo&key=' + key,
    dataType: 'jsonp',
    jsonpCallback: 'callback',
    type: 'GET',
    success: function(data) {
      $('#directions_MS').append('Time to Middle School via ' + data.routes[0].summary + ': ' + data.routes[0].legs[0].duration.text);
    }
  });
});
