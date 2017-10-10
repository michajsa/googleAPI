function loadMap() {
  var mapProp = {
    center: new google.maps.LatLng(37.759568, -122.388126),
    zoom: 20,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var googleMap = document.getElementById('googleMap');

  var map = new google.maps.Map(googleMap, mapProp);

  var marker = new google.maps.Marker({
    position: mapProp.center
  });
// set the marker on your map
  marker.setMap(map);
// able to zoom once you click on the marker
  google.maps.event.addListener(marker, 'click', function(){
    map.setZoom(20);
    map.setCenter(marker.getPostion());
  })

}

google.maps.event.addDomListener(window, 'load', loadMap);
