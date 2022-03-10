const ipInput = document.querySelector('#ip-address'),
      submitBtn = document.querySelector('.submit-btn'),
      ipNum = document.querySelector('.ip-num'),
      ipLocation = document.querySelector('.ip-num'),
      ipTimezone = document.querySelector('.ip-num'),
      ipIsp = document.querySelector('.ip-num');



const ipApi = new IpApi()

// ipapi.getIpInfo('197.211.59.104').then(data => console.log(data))


var map = L.map('map', {
  'center': [0,0],
  'zoom': 0,
  'layers': [
    L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&cppy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    })
  ]
})


updateMarker = (update_marker = [-43, 42]) => {
  map.setView(update_marker, 13)
  L.marker(update_marker).addTo(map)
}


getIpDetails = (ipValue) => {

  ipApi.getIpInfo(ipValue).then(data => {
    console.log(data);
    ipNum.innerHTML = data.ip
    ipLocation.innerHTML = `${data.location.city} ${data.location.country} ${data.location.postalCode}`
    ipTimezone.innerHTML = data.location.timezone
    ipIsp.innerHTML = data.isp

    updateMarker([data.location.lat, data.location.lng])
  })
  .catch(error => alert('Oops! Something went wrong..'))
}


submitBtn.addEventListener('click', (e) => {
  if (ipInput.value != '' && ipInput.value != null) {
    // getIpDetails(ipInput.value)
    getIpDetails(ipInput.value);
  }
  alert('Enter a valid IP address')
})

