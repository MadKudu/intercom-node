import Scroll from './scroll';

export default class Subscriptions {
  constructor(client) {
    this.client = client;
    this.scroll = new Scroll(this.client, 'subscriptions');
  }

  create(subscription, f) {
    return this.client.post('/subscriptions', subscription, f);
  }

  update(id, subscription, f) {
    return this.client.post(`/subscriptions/${id}`, subscription, f);
  }

  list(subscription, f) {
    return this.client.get('/subscriptions', f);
  }

  find(id, f) {
    return this.client.get(`/subscriptions/${id}`, f);
  }

  delete(id, f) {
    return this.client.delete(`/subscriptions/${id}`, f);
  }

}
