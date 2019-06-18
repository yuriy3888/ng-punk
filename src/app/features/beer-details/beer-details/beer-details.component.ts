import {Component, OnDestroy, OnInit} from '@angular/core';
import {Beer} from '../../../shared/state/beers/beer.model';
import {ActivatedRoute} from '@angular/router';
import {Select, Store} from '@ngxs/store';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {flatMap} from 'rxjs/operators';
import {BeersState} from '../../../shared/state/beers/beers.state';
import {Observable} from 'rxjs';
import {BeerFetch} from '../../../shared/state/beers/beers.actions';
import {Loadable} from '../../../shared/state/models/loadable.model';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.scss']
})
export class BeerDetailsComponent implements OnInit, OnDestroy {
  @Select(BeersState.loaded) loaded$: Observable<Loadable<Beer[]>>;

  beer: Beer;

  constructor(private activatedRoute: ActivatedRoute, private store: Store) {
  }

  ngOnInit() {

    this.activatedRoute.params.pipe(
      flatMap(result => this.store.select(BeersState.beer(result['id']))),
      untilDestroyed(this)
    ).subscribe(value => {
      if (value) {
        this.store.dispatch(new BeerFetch());
        this.beer = value;
      }
    });
  }

  ngOnDestroy(): void {
  }

}
