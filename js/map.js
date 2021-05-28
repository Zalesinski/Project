function initMap() {
    let map;
   map = new google.maps.Map(document.getElementById("map"), {
     center: { lat: 53.908939, lng: 27.522861 },
     zoom: 15,
   });
   let marker = new google.maps.Marker({
     position: { lat: 53.908939, lng: 27.522861 },
     map: map
   })
 };