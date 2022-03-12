const ipInput = document.querySelector('#ip-address'),
      submitBtn = document.querySelector('.submit-btn'),
      ipNum = document.querySelector('.ip-num'),
      ipLocation = document.querySelector('.ip-location'),
      ipTimezone = document.querySelector('.ip-timezone'),
      ipIsp = document.querySelector('.ip-isp');

const ipApi = new IpApi()

const map = L.map('map', {
    center: [51.505, -0.09],
    zoom: 17
});


updateMarker = (update_marker = [-43, 42]) => {
  map.setView(update_marker, 16)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {
      foo: 'bar',
      attribution: '&cppy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map)
  L.marker(update_marker).addTo(map)
}

getIpDetails = (ipValue) => {
  ipApi.getIpInfo(ipValue).then(data => {
    // console.log(data);
    ipNum.innerHTML = data.ip;
    ipLocation.innerHTML = `${data.location.city} ${data.location.country} ${data.location.postalCode}`
    ipTimezone.innerHTML = data.location.timezone
    ipIsp.innerHTML = data.isp

    updateMarker([data.location.lat, data.location.lng])
  })
  .catch(error => alert('Oops! Something went wrong..'))
}


submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  console.log(ipInput.value);
  if (ipInput.value != '' && ipInput.value != null) {
    getIpDetails(ipInput.value);
  } else {
  alert('Enter a valid IP address')
  }
})

document.addEventListener('load', getIpDetails());
