import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {BeersService} from './beers.service';
import {Beer} from '../../state/beers/beer.model';
import {beers} from '../../../../assets/mockup/beers';

@Injectable({
  providedIn: 'root'
})
export class BeersMockService extends BeersService {
  protected _getBeers(): Observable<Beer[]> {
    return of<Beer[]>(beers);
  }
}
