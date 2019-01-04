import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  public setItem(key: string, value: any) {
    localStorage.setItem(key, value);
  }

  public removeItems(keys: string[]) {
    keys.forEach(key => localStorage.removeItem(key));
  }

  public getItem(key: string): any {
    return localStorage.getItem(key);
  }
}
