import {Action, createSelector, NgxsOnInit, Selector, State, StateContext} from '@ngxs/store';
import {
  BeerFetch,
  LoadBeers,
  LoadBeersError,
  LoadBeersSuccess
} from './beers.actions';
import {
  generateLoadableError,
  Loadable,
  onLoadableError,
  onLoadableInit, onLoadableLoad, onLoadableSuccess
} from '../models/loadable.model';
import {catchError, map} from 'rxjs/operators';
import {Beer} from './beer.model';
import {asapScheduler, of} from 'rxjs';
import {BeersService} from '../../api/beers/beers.service';

export interface BeersStateModel {
  beers: Loadable<Beer[]>;
}

@State<BeersStateModel>({
  name: 'beersList',
  defaults: {
    beers: onLoadableInit()
  }
})

export class BeersState implements NgxsOnInit {

  constructor(protected service: BeersService) {
  }

  static beer(key: number) {
    return createSelector([BeersState], (state: BeersStateModel): Beer | null => {
      return state.beers.data.find(({id}) => id === +key || null);
    });
  }

  static currentPageBeers(pageLength, pageIndex) {
    return createSelector([BeersState], (state: BeersStateModel): Beer[] | [] => {
      const beersList = state && state.beers && [...state.beers.data] || [];
      const startPosition = pageIndex < 1 ? 0 : pageIndex * pageLength;
      const endPosition = pageIndex < 1 ? pageLength : pageLength * pageIndex + pageLength;
      beersList.slice(startPosition, endPosition);

      return beersList.slice(startPosition, endPosition);
    });
  }

  @Selector()
  static beersList(state: BeersStateModel): Beer[] {
    return state && state.beers && state.beers.data;
  }

  @Selector()
  static loaded(state: BeersStateModel): Loadable<Beer[]> {
    return state && state.beers;
  }

  @Action(LoadBeers, {cancelUncompleted: true})
  loadMovies(ctx: StateContext<BeersStateModel>) {
    ctx.patchState({
      beers: onLoadableLoad<Beer[]>()
    });
    return this.remoteBeers(ctx);
  }

  @Action(LoadBeersSuccess, {cancelUncompleted: true})
  loadMoviesSuccess(ctx: StateContext<BeersStateModel>, {payload}: LoadBeersSuccess) {
    ctx.patchState({
      beers: onLoadableSuccess<Beer[]>(payload)
    });
  }

  @Action(LoadBeersError, {cancelUncompleted: true})
  loadMoviesError(ctx: StateContext<BeersStateModel>, {payload}: LoadBeersError) {
    ctx.patchState({
      beers: onLoadableError<null>(payload)
    });
  }

  protected remoteBeers(ctx: StateContext<BeersStateModel>) {
    return this.service
      .getBeers()
      .pipe(
        map((beers: Beer[]) =>
          asapScheduler.schedule(() =>
            ctx.dispatch(new LoadBeersSuccess(beers))
          )
        ),
        catchError(error =>
          of(
            asapScheduler.schedule(() =>
              ctx.dispatch(new LoadBeersError(generateLoadableError(error.message, error.status)))
            )
          )
        )
      );
  }

  ngxsOnInit(ctx: StateContext<BeersStateModel>) {
    ctx.dispatch(new LoadBeers());
  }
}
