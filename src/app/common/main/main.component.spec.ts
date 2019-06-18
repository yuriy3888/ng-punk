import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MainComponent} from './main.component';
import {NgxsModule} from '@ngxs/store';
import {LoadableModule} from '../../shared/loadable/loadable.module';
import {BeersState} from '../../shared/state/beers/beers.state';
import {BeerItemComponent} from '../beer-item/beer-item.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import {PaginatorComponent} from '../paginator/paginator.component';
import {MatPaginatorModule} from '@angular/material';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        MainComponent,
        PaginatorComponent,
        BeerItemComponent
      ],
      imports: [
        RouterTestingModule,
        NgxsModule.forRoot([BeersState]),
        LoadableModule,
        HttpClientModule,
        MatPaginatorModule
      ],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
