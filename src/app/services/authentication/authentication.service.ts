import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Auth0LockFactory} from './auth0-lock/auth0-lock.factory';
import {LocalStorageService} from '../local-storage/local-storage.service';
import {DateTimeService} from '../date-time/date-time.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private readonly ACCESS_TOKEN: string = 'access_token';
  private readonly ID_TOKEN: string = 'id_token';
  private readonly EXPIRES_AT: string = 'expires_at';

  private lock: any;

  constructor(public router: Router, auth0LockFactory: Auth0LockFactory, private localStorageService: LocalStorageService, private dateTimeService: DateTimeService) {
    this.lock = auth0LockFactory.build();
  }

  public login(): void {
    this.lock.show();
  }

  public handleAuthentication(): void {
    this.lock.on('authenticated', (authResult) => {
        if (authResult && authResult.accessToken && authResult.idToken) {
          this.setSession(authResult);
          this.router.navigate(['/']);
        }
      }
    );

    this.lock.on('authorization_error', () => {
      this.router.navigate(['/']);
    });
  }

  private setSession(authResult): void {
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + this.dateTimeService.getTime());
    this.localStorageService.setItem(this.ACCESS_TOKEN, authResult.accessToken);
    this.localStorageService.setItem(this.ID_TOKEN, authResult.idToken);
    this.localStorageService.setItem(this.EXPIRES_AT, expiresAt);
  }

  public logout(): void {
    this.localStorageService.removeItems([this.ACCESS_TOKEN, this.ID_TOKEN, this.EXPIRES_AT]);
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    const expiresAt = JSON.parse(this.localStorageService.getItem('expires_at'));
    return this.dateTimeService.getTime() < expiresAt;
  }
}
