class IpApi {
  constructor() {
    this.apikey = 'at_qoAx8gLi3Pbp9uHmHgiiKJSYU6mTm';
    this.currentVersion = 'v2'
  }

  async getIpInfo(ipDetail) {

    let ipUrl;
  if (ipDetail == undefined) {
    ipUrl = `https://geo.ipify.org/api/${this.currentVersion}/country,city?apiKey=${this.apikey}`
  } else {
    ipUrl = `https://geo.ipify.org/api/${this.currentVersion}/country,city?apiKey=${this.apikey}&ipAddress=${ipDetail}`
  }

    const addressInfo = await fetch(ipUrl);

    const addressData = await addressInfo.json();

    return addressData;
  }



//   getIpDetails(ipDetail) {
//   let ipUrl;
//   if (ipDetail == undefined) {
//     ipUrl = `https://geo.ipify.org/api/${this.currentVersion}/country,city?apiKey=${this.apikey}`
//   } else {
//     ipUrl = `https://geo.ipify.org/api/${this.currentVersion}/country,city?apiKey=${this.apikey}&ipAddress=${ipDetail}`
//   }

//   ipApi.getIpInfo(ipUrl).then(data => {
//     console.log(data);
//     ipNum.innerHTML = data.ip
//     ipLocation.innerHTML = `${data.location.city} ${data.location.country} ${data.location.postalCode}`
//     ipTimezone.innerHTML = data.location.timezone
//     ipIsp.innerHTML = data.isp

//     updateMarker([data.location.lat, data.location.lng])
//   })
//   .catch(error => alert('Oops! Something went wrong..'))
// }
}
