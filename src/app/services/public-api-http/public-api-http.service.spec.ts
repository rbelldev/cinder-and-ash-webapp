import {PublicApiHttpService} from './public-api-http.service';
import * as td from 'testdouble';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {of} from 'rxjs';

describe('PublicApiHttpService', () => {
  let mockHttpClient: HttpClient;
  let publicApiHttpService: PublicApiHttpService;

  beforeEach(() => {
    mockHttpClient = td.object(HttpClient.prototype);
    publicApiHttpService = new PublicApiHttpService(mockHttpClient);
  });

  describe('get(:apiResource)', () => {
    it('should call get() on the HttpClient with the api resource and the base url', () => {
      const expectedResource = '/resource/param';
      publicApiHttpService.get(expectedResource);
      td.verify(mockHttpClient.get(`${environment.API.baseUrl}${expectedResource}`));
    });

    it('should return the observable from the HttpClient', () => {
      const expectedResultFromObservable = {'expected': 'result'};
      td.when(mockHttpClient.get(td.matchers.anything())).thenReturn(of(expectedResultFromObservable));

      publicApiHttpService.get('').subscribe(result => {
        expect(result).toBe(expectedResultFromObservable);
      })
    });
  });
});
