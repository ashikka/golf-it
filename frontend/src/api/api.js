import axios from 'axios';

class Client {
  api;

  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL || "http://localhost:4000",
      responseType: 'json',
    });
  }

  /**
   * @param {string} clientId String recieved from socket on connect
   * @param {Object} payload Object with any keys you want to add to firestore
   * @returns {Promise<string>} Room ID
   */
  async createRoom(clientId, payload = {}) {
    return (
      await this.api.post('/room/create', { clientId, payload })
    ).data
  }

  /**
   * @param {string} category Category string
   * @returns Array
   */
  async getQuestions(category = undefined) {
    // firebase

    return []
  }

  /**
   * @todo Execute call
   */
  async executeCode() {
    
  }
}

const api = new Client();
export default api;
