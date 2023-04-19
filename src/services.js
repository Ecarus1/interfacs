import ApiService from "./api";

class Services {
  constructor(config) {
    this.config = config;
  }

  /**
   * Сервис АПИ
   * @returns {ApiService}
   */
  get api(){
    if (!this._api) {
      this._api = new ApiService(this, this.config.api);
    }
    return this._api;
  }
}

export default Services;