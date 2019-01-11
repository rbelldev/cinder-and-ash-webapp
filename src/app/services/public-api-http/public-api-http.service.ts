import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PublicApiHttpService {

  constructor(private httpClient: HttpClient) {
  }

  get(apiResource: string): Observable<any> {
    return this.httpClient.get(`${environment.API.baseUrl}${apiResource}`);
  }
}
