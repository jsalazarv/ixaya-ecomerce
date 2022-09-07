import { BaseService } from './BaseService.js';

export class OrderService extends BaseService {
  async fetchOrders() {
    return this.client.get('/orders');
  }
}
