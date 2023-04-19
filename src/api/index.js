class ApiService {
  /**
   * @param services {Services} Менеджер сервисов
   * @param config {Object}
   */
  constructor(services, config = {}) {
    this.services = services;
    this.config = {
      baseUrl: '',
      ...config
    }
    this.defaultHeaders = {
      'Content-Type': 'application/json',
    }
  }

  /**
   * HTTP запрос
   * @param url
   * @param method
   * @param headers
   * @param options
   * @returns {Promise<any>}
   */
  async request({url, method = 'GET', headers = {}, ...options}) {
    if (!url.match(/^(http|\/\/)/)) url = this.config.baseUrl + url;

    try {
      const res = await fetch(url, {
        method,
        headers: {...this.defaultHeaders, ...headers},
        ...options,
      });

      if(!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
      }

      const data = await res.json();

      return data;
    } catch (err) {
      return err;
    }
  }

  async getUserWithRepos(username) {
    const user = await this.request({
      url: `/users/${username}`,
      method: "GET"
    });

    const repos = await this.request({
      url: `/users/${username}/repos?type=all`,
      method: "GET"
    });

    return {user, repos};
  }

  /**
   * Установка или сброс заголовка
   * @param name {String} Название заголвока
   * @param value {String|null} Значение загововка
   */
  setHeader(name, value = '') {
    if (value) {
      this.defaultHeaders[name] = value;
    } else if (this.defaultHeaders[name]) {
      delete this.defaultHeaders[name];
    }
  }
}


export default ApiService;