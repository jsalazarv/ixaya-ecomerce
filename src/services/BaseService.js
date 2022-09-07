import { HttpService } from '@feedma/http-service';
import { endpoints } from '../config/services';
import AuthorizationRequestInterceptor from './interceptors/request/AuthorizationRequestInterceptor.js';

export class BaseService extends HttpService {
  constructor(requestInterceptors = [], responseInterceptors = []) {
    super(requestInterceptors, responseInterceptors);

    this.globalRequestInterceptors = [AuthorizationRequestInterceptor];
    this.globalResponseInterceptors = [];
    this.config = endpoints.ixaya.config;
  }
}
