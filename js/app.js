// Variables
const ipInput = document.querySelector('#ip-address'),
  submitBtn = document.querySelector('.submit-btn'),
  ipNum = document.querySelector('.ip-num'),
  ipLocation = document.querySelector('.ip-location'),
  ipTimezone = document.querySelector('.ip-timezone'),
  ipIsp = document.querySelector('.ip-isp');

// instantiate the IP-address tracker API object
const ipApi = new IpApi();

const map = L.map('map');

updateMarker = (update_marker = [-43, 42]) => {
  map.setView(update_marker, 13);
  L.tileLayer(
    'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidHJhY2VteWNvZGVzIiwiYSI6ImNsMWhlY3NnNzA0MGQzaXFsbWZ6a2NoYjcifQ.R9PgNjBE9KYgujl4Moku4Q',
    {
      maxZoom: 18,
      attribution: `Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>`,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
    }
  ).addTo(map);

  let locationIcon = L.icon({
    iconUrl: '../images/icon-location.svg',
  });

  L.marker(update_marker, { icon: locationIcon }).addTo(map);
};

getIpDetails = (ipValue) => {
  ipApi
    .getIpInfo(ipValue)
    .then((data) => {
      const { ip, isp } = data;
      const { city, country, postalCode, lng, lat, timezone } = data.location;

      ipNum.innerHTML = ip;
      ipLocation.innerHTML = `${city} ${country} ${postalCode}`;
      ipTimezone.innerHTML = timezone;
      ipIsp.innerHTML = isp;

      updateMarker([lat, lng]);
    })
    .catch((error) => alert('Oops! Something went wrong..'));
};

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(ipInput.value);
  if (ipInput.value != '' && ipInput.value != null) {
    getIpDetails(ipInput.value);
  } else {
    alert('Enter a valid IP address');
  }
});

document.addEventListener('load', getIpDetails());
