import {LoadableError} from '../models/loadable.model';
import {Beer} from './beer.model';

export class LoadBeers {
  static readonly type = '[Beers][Load] Loading';
}

export class LoadBeersError {
  static readonly type = '[Beers][Load] Error';

  constructor(public payload: LoadableError) {
  }
}

export class LoadBeersSuccess {
  static readonly type = '[Beers][Load] Success';

  constructor(public payload: Beer[]) {
  }
}

export class BeerFetch {
  static readonly type = '[Beer] Fetch';

  constructor() {
  }
}
