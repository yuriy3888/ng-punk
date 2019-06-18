import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BeerItemComponent} from './common/beer-item/beer-item.component';
import {HttpClientModule} from '@angular/common/http';
import {NgxsModule} from '@ngxs/store';
import {BeersState} from './shared/state/beers/beers.state';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {MainComponent} from './common/main/main.component';
import {LoadableModule} from './shared/loadable/loadable.module';
import {HeaderComponent} from './common/header/header.component';
import {HeaderNavComponent} from './common/header-nav/header-nav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule, MatInputModule, MatPaginatorModule, MatRippleModule} from '@angular/material';
import {PaginatorComponent} from './common/paginator/paginator.component';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    BeerItemComponent,
    HeaderComponent,
    HeaderNavComponent,
    PaginatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxsModule.forRoot([BeersState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    LoadableModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
