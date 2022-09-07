import { BaseService } from './BaseService.js';

export class ProductService extends BaseService {
  async fetchProducts() {
    return this.client.get('/products');
  }
}
