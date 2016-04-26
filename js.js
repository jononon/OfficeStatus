$(document).ready(function() {

  var myDate = new Date(); /* hour is before noon */
  if (myDate.getHours() < 12) {
      $('#title').append("Good Morning!");
  } else /* Hour is from noon to 5pm (actually to 5:59 pm) */ if (myDate.getHours() >= 12 && myDate.getHours() <= 17) {
      $('#title').append("Good Afternoon!");
  } else /* the hour is after 5pm, so it is between 6pm and midnight */ if (myDate.getHours() > 17 && myDate.getHours() <= 24) {
      $('#title').append("Good Evening!");
  } else /* the hour is not between 0 and 24, so something is wrong */ {
      $('#title').append("I'm not sure what time it is!");
  } /* remove the following in your live script. It is for testing */
  $('#title').append("<br /><br /> The hour is: ") document.write(myDate.getHours());

/*
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
  */
});
