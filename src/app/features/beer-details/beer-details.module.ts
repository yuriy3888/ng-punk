import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BeerDetailsComponent} from './beer-details/beer-details.component';
import {routes} from './beer-details.routes';
import {RouterModule} from '@angular/router';
import {LoadableModule} from '../../shared/loadable/loadable.module';
import {NgxsModule} from '@ngxs/store';
import {BeersState} from '../../shared/state/beers/beers.state';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [BeerDetailsComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxsModule.forFeature([BeersState]),
    RouterModule.forChild(routes),
    LoadableModule
  ]
})
export class BeerDetailsModule {
}
