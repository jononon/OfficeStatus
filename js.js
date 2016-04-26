$(document).ready(function() {
  $.ajax({
    url: 'https://maps.googleapis.com/maps/api/directions/json?origin=place_id:ChIJSydXgVm8woARrlqYCBU_ZRQ&destination=place_id:ChIJeVT19fK9woAR2y9xeIx-CTo&key=AIzaSyAcmscSUENKMTKPgTTX9982lWLuFn2DqC0',
    dataType: 'json',
    success: function(data) {
      $('#directions_MS').append('Time to Middle School via ' + routes[0].summary + ': ' + routes[0].legs[0].duration.text);
    },
    async: false,
  });
}
