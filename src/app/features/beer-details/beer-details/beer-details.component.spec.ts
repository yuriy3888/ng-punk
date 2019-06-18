import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BeerDetailsComponent} from './beer-details.component';
import {LoadableModule} from '../../../shared/loadable/loadable.module';
import {NgxsModule} from '@ngxs/store';
import {BeersState} from '../../../shared/state/beers/beers.state';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {routes} from '../../../app.routes';

describe('BeerDetailsComponent', () => {
  let component: BeerDetailsComponent;
  let fixture: ComponentFixture<BeerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BeerDetailsComponent,
      ],
      imports: [
        RouterTestingModule.withRoutes([{path: '', component: BeerDetailsComponent}]),
        NgxsModule.forRoot([BeersState]),
        LoadableModule,
        HttpClientModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
