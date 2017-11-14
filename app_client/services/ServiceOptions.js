class ServiceOptions {
  constructor() {
    // Use this for production environment
    this.requestLocation = 'http://159.203.105.123:3000';

    // Use this for development environment
    //this.requestLocation = 'http://localhost:3000';
  }

  getRequestLocation() {
    return this.requestLocation;
  }
}

export default ServiceOptions;
