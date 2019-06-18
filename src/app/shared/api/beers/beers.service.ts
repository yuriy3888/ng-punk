import {Injectable} from '@angular/core';
import {catchError, concatMap, expand, toArray} from 'rxjs/operators';
import {EMPTY, Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Beer} from '../../state/beers/beer.model';

@Injectable({
  providedIn: 'root'
})
export class BeersService {
  baseUrl = 'https://api.punkapi.com/v2/beers';
  page = 1; // Start from the first page and increment until it returns empty array;

  constructor(private http: HttpClient) {
  }

  getBeers(): Observable<Beer[]> {
    return this._getBeers();
  }

  /*
     * ==========
     * Overwrite the methods below in mock services in order to isolate the server for tests
     * ==========
     */

  protected _getBeers(): Observable<Beer[]> {
    return this._getUrl(this.page).pipe(
      expand(value => {
        this.page++;
        return value && value.length > 0 ? this._getUrl(this.page) : EMPTY;
      }),
      concatMap(items => items),
      toArray()
    );
  }

  protected _getUrl(page): Observable<Beer[]> {
    return this.http
      .get<Beer[]>(`${this.baseUrl}?page=${page}`)
      .pipe(catchError((error: any) => throwError(error)));
  }
}
