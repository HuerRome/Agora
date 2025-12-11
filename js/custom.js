// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

/** google_map js **/
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}

// slider 

$(document).ready(function () {

  // Activo el carrusel con autoplay
  $('#carouselExampleIndicators').carousel({
    interval: 5000, 
    ride: 'carousel',
    pause: false
  });

  // Botón siguiente
  $('.carousel-control-next').click(function () {
    $('#carouselExampleIndicators').carousel('next');
  });

  // Botón anterior
  $('.carousel-control-prev').click(function () {
    $('#carouselExampleIndicators').carousel('prev');
  });

});
