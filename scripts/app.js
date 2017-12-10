//Starting map with no markers present
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    mapTypeId: 'satellite',
    center: {lat: 0, lng: 0},
    zoom: 2
  });
}

//Function that detects primary device's location and markers created for 3 recorder positions
function echoMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    mapTypeId: 'satellite',
    center: {lat: 0, lng: 0},
    zoom: 15
  });
  infoWindow = new google.maps.InfoWindow;

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

    infoWindow.setPosition(pos);
    infoWindow.setContent('Basecamp');
    infoWindow.open(map);
    map.setCenter(pos);

    //Mic One
    var micOneLatlng = new google.maps.LatLng(latOne.value,lngOne.value);
      var marker = new google.maps.Marker({
      position: micOneLatlng,
      map: map
    });

    //Mic Two
    var micTwoLatlng = new google.maps.LatLng(latTwo.value,lngTwo.value);
      var marker = new google.maps.Marker({
      position: micTwoLatlng,
      map: map
    });

    //Mic Three
    var micThreeLatlng = new google.maps.LatLng(latThree.value,lngThree.value);
      var marker = new google.maps.Marker({
      position: micThreeLatlng,
      map: map
    });
  },
  //If there is a location error
  function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}
