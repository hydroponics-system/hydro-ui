/**
 * Configuration for running production. This will run with production endpoints and
 * will require a production signed jwt token.
 *
 * @author Sam Butler
 * @since February 25, 2022
 */
export const environment = {
  tag: 'PRODUCTION',
  production: true,
  isLocal: false,
  apiUrl: 'hydro-production-microservice.herokuapp.com',
};
