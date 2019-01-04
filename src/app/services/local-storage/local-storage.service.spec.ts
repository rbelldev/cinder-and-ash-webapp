import {LocalStorageService} from './local-storage.service';

describe('LocalStorageService', () => {

  let localStorageService: LocalStorageService;

  beforeEach(() => {
    localStorageService = new LocalStorageService();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('should set key and value on local storage when setItem is called', () => {
    const key = 'This is a Key';
    const value = 'This is a Value';

    localStorageService.setItem(key, value);

    expect(localStorage.getItem(key)).toBe(value);
  });

  it('should remove all items', () => {
    let keyToRemove1 = 'key 1';
    let keyToRemove2 = 'key 2';
    let keyNotToRemove = 'dont remove this key';

    localStorage.setItem(keyToRemove1, 'something');
    localStorage.setItem(keyToRemove2, 'something else');
    localStorage.setItem(keyNotToRemove, `this shouldn't be removed`);

    let keysToRemove = [keyToRemove1, keyToRemove2];

    localStorageService.removeItems(keysToRemove);

    expect(localStorage.getItem(keyToRemove1)).toBeNull();
    expect(localStorage.getItem(keyToRemove2)).toBeNull();
    expect(localStorage.getItem(keyNotToRemove)).not.toBeNull('key that was not to be removed, was removed.');
  });

  it('should get an item by key', () => {
    const key = 'key to get';
    const value = 'expected value';

    localStorage.setItem(key, value);
    localStorage.setItem('key not to get', 'bad value');

    expect(localStorageService.getItem(key)).toBe(value);
  });
});
