import {Routes} from '@angular/router';
import {MainComponent} from './common/main/main.component';

export const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'beer/:id', loadChildren: './features/beer-details/beer-details.module#BeerDetailsModule'},
  {path: '**', loadChildren: './features/alert-page/alert-page.module#AlertPageModule'}
];

