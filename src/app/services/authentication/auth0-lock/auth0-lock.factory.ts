import {Injectable} from '@angular/core';
import Auth0Lock from 'auth0-lock';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Auth0LockFactory {
  build(): Auth0Lock {
    return new Auth0Lock(environment.AuthenticationConfiguration.clientId, environment.AuthenticationConfiguration.domain, {
      autoclose: true,
      auth: {
        redirectUrl: environment.AuthenticationConfiguration.callbackUrl,
        responseType: 'token id_token',
        params: {
          scope: 'openid'
        }
      }
    });
  }
}
