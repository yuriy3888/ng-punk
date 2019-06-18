import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PaginatorComponent} from './paginator.component';
import {MatPaginatorModule} from '@angular/material';
import {BeerItemComponent} from '../beer-item/beer-item.component';
import {RouterTestingModule} from '@angular/router/testing';
import {NgxsModule} from '@ngxs/store';
import {BeersState} from '../../shared/state/beers/beers.state';
import {HttpClientModule} from '@angular/common/http';

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PaginatorComponent,
        BeerItemComponent
      ],
      imports: [
        NgxsModule.forRoot([BeersState]),
        RouterTestingModule,
        MatPaginatorModule,
        HttpClientModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
