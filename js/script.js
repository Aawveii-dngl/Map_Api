function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
  function showPosition(position) {
    const loc = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: loc,
    });
    const marker = new google.maps.Marker({
      position: loc,
      map: map,
    });
  }
}

function initMap() {
  const loc = { lat: 27.59346362401388, lng: 85.29809058466019 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: loc,
  });
  const marker = new google.maps.Marker({
    position: loc,
    map: map,
  });
}
