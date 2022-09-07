import { endpoints } from '../../../config/services.js';

const AuthorizationRequestInterceptor = async (config) => {
  config.headers = {
    ...config.headers,
    'X-API-KEY': endpoints.ixaya.apiKey,
  };

  return config;
};

export default AuthorizationRequestInterceptor;
