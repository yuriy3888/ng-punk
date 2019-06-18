import {Component} from '@angular/core';
import {Select} from '@ngxs/store';
import {BeersState} from '../../shared/state/beers/beers.state';
import {Observable} from 'rxjs';
import {Beer} from '../../shared/state/beers/beer.model';
import {Loadable} from '../../shared/state/models/loadable.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  @Select(BeersState.loaded)
  loaded$: Observable<Loadable<Beer[]>>;

  constructor() {
  }
}
