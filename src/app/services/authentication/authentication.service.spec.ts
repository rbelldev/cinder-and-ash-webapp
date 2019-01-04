import {AuthenticationService} from './authentication.service';
import * as td from 'testdouble';
import {Auth0LockFactory} from './auth0-lock/auth0-lock.factory';
import {LocalStorageService} from '../local-storage/local-storage.service';
import {DateTimeService} from '../date-time/date-time.service';

describe('AuthenticationService', () => {
  let authenticationService: AuthenticationService;

  let mockRouter: any;
  let mockAuth0Lock: any;
  let mockAuth0LockFactory: Auth0LockFactory;
  let mockLocalStorageService: LocalStorageService;
  let mockDateTimeService: DateTimeService;

  beforeEach(() => {
    mockRouter = td.object({
      navigate: td.function()
    });

    mockAuth0Lock = td.object({
      on: td.function(),
      show: td.function(),
    });

    mockAuth0LockFactory = td.object(Auth0LockFactory.prototype);
    td.when(mockAuth0LockFactory.build()).thenReturn(mockAuth0Lock);

    mockLocalStorageService = td.object(LocalStorageService.prototype);
    mockDateTimeService = td.object(DateTimeService.prototype);

    authenticationService = new AuthenticationService(mockRouter, mockAuth0LockFactory, mockLocalStorageService, mockDateTimeService);
  });

  describe('Initialization', () => {
    it('should get the auth0Lock from the Auth0LockFactory', () => {
      const mockAuth0LockFactory = td.object(Auth0LockFactory.prototype);
      new AuthenticationService(null, mockAuth0LockFactory, null, null);
      td.verify(mockAuth0LockFactory.build(), {times: 1});
    });
  });

  describe('login()', () => {
    it('should call show() on the auth0Lock', () => {
      authenticationService.login();
      td.verify(mockAuth0Lock.show(), {times: 1});
    });
  });

  describe(`handleAuthentication() -- 'authenticated' event`, () => {
    let authResult = {
      accessToken: 'expected access token',
      idToken: 'expected id token',
      expiresIn: 5
    };

    beforeEach(() => {
      td.when(mockAuth0Lock.on('authenticated')).thenCallback(authResult);
    });

    it(`should set access_token on the session if the accessToken and the idToken are present`, () => {
      authenticationService.handleAuthentication();
      td.verify(mockLocalStorageService.setItem(ACCESS_TOKEN, authResult.accessToken));
    });

    it(`should set id_token on the session if the accessToken and the idToken are present`, () => {
      authenticationService.handleAuthentication();
      td.verify(mockLocalStorageService.setItem(ID_TOKEN, authResult.idToken));
    });

    it(`should set expires_at on the session if the accessToken and the idToken are present`, () => {
      const now = new Date(2004, 10, 23).getTime();
      td.when(mockDateTimeService.getTime()).thenReturn(now);

      let expectedExpiryDateInMillisecondsAsString = JSON.stringify((authResult.expiresIn * 1000) + now);

      authenticationService.handleAuthentication();
      td.verify(mockLocalStorageService.setItem(EXPIRES_AT, expectedExpiryDateInMillisecondsAsString));
    });

    it(`should navigate to root on the session if the accessToken and the idToken are present`, () => {
      authenticationService.handleAuthentication();
      td.verify(mockRouter.navigate(['/']), {times: 1});
    });

    it('should not set anything on the session if accessToken is undefined', () => {
      let authResult = {
        accessToken: undefined,
        idToken: 'expected id token',
        expiresIn: 5
      };
      td.when(mockAuth0Lock.on('authenticated')).thenCallback(authResult);

      authenticationService.handleAuthentication();

      td.verify(mockLocalStorageService.setItem(td.matchers.anything(), td.matchers.anything()), {times: 0});
    });

    it('should not set anything on the session if idToken is undefined', () => {
      let authResult = {
        accessToken: 'expected access token',
        idToken: undefined,
        expiresIn: 5
      };
      td.when(mockAuth0Lock.on('authenticated')).thenCallback(authResult);

      authenticationService.handleAuthentication();

      td.verify(mockLocalStorageService.setItem(td.matchers.anything(), td.matchers.anything()), {times: 0});
    });

    it('should not set anything on the session if the authResult is undefined', () => {
      td.when(mockAuth0Lock.on('authenticated')).thenCallback(undefined);

      authenticationService.handleAuthentication();

      td.verify(mockLocalStorageService.setItem(td.matchers.anything(), td.matchers.anything()), {times: 0});
    });

    it('should not navigate if accessToken is undefined', () => {
      let authResult = {
        accessToken: undefined,
        idToken: 'expected id token',
        expiresIn: 5
      };
      td.when(mockAuth0Lock.on('authenticated')).thenCallback(authResult);

      authenticationService.handleAuthentication();

      td.verify(mockRouter.navigate(td.matchers.anything()), {times: 0});
    });

    it('should not navigate if idToken is undefined', () => {
      let authResult = {
        accessToken: 'expected access token',
        idToken: undefined,
        expiresIn: 5
      };
      td.when(mockAuth0Lock.on('authenticated')).thenCallback(authResult);

      authenticationService.handleAuthentication();

      td.verify(mockRouter.navigate(td.matchers.anything()), {times: 0});
    });

    it('should not navigate if the authResult is undefined', () => {
      td.when(mockAuth0Lock.on('authenticated')).thenCallback(undefined);

      authenticationService.handleAuthentication();

      td.verify(mockRouter.navigate(td.matchers.anything()), {times: 0});
    });
  });

  describe(`handleAuthentication() -- 'authorization_error' event`, () => {
    it('should navigate to root', () => {
      td.when(mockAuth0Lock.on('authorization_error')).thenCallback(null);
      authenticationService.handleAuthentication();
      td.verify(mockRouter.navigate(['/']));
    });
  });

  describe('logout()', () => {
    it('should remove the access_token, id_token, and expires at from the session', () => {
      authenticationService.logout();
      td.verify(mockLocalStorageService.removeItems([ACCESS_TOKEN, ID_TOKEN, EXPIRES_AT]));
    });

    it('should navigate to root', () => {
      authenticationService.logout();
      td.verify(mockRouter.navigate(['/']), {times: 1});
    });
  });

  describe('isAuthenticated()', () => {
    it('should return false if past expiry date', () => {
      td.when(mockDateTimeService.getTime()).thenReturn(1000);
      td.when(mockLocalStorageService.getItem(EXPIRES_AT)).thenReturn('0');
      expect(authenticationService.isAuthenticated()).toBeFalsy();
    });

    it('should return true if not past expiry date', () => {
      td.when(mockDateTimeService.getTime()).thenReturn(0);
      td.when(mockLocalStorageService.getItem(EXPIRES_AT)).thenReturn('100000');
      expect(authenticationService.isAuthenticated()).toBeTruthy();
    });
  });

  const ACCESS_TOKEN: string = 'access_token';
  const ID_TOKEN: string = 'id_token';
  const EXPIRES_AT: string = 'expires_at';

});
