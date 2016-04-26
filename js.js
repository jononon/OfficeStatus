$(document).ready(function() {
  var key = 'AIzaSyAcmscSUENKMTKPgTTX9982lWLuFn2DqC0';
  var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://maps.googleapis.com/maps/api/directions/json?origin=place_id%3AChIJSydXgVm8woARrlqYCBU_ZRQ&destination=place_id%3AChIJeVT19fK9woAR2y9xeIx-CTo&key=AIzaSyAcmscSUENKMTKPgTTX9982lWLuFn2DqC0",
  "method": "GET",
  "headers": {
    "cache-control": "no-cache",
    "postman-token": "75f6f76d-3f49-6b70-db89-e86ca2cd4207"
    }
  }

  $.ajax(settings).done(function (response) {
      $('#directions_MS').append('Time to Middle School via ' + routes[0].summary + ': ' + routes[0].legs[0].duration.text);
  });
});
