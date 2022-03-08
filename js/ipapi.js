class Ipapi {
  constructor() {
    this.apikey = 'at_qoAx8gLi3Pbp9uHmHgiiKJSYU6mTm';
    this.currentVersion = 'v2'
  }

  async getIpInfo(ipadd) {
    const addressInfo = await fetch(`https://geo.ipify.org/api/${this.currentVersion}/country?apiKey=${this.apikey}&ipAddress=${ipadd}`);

    const addressData = await addressInfo.json();

    return addressData;
  }
}
