import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderComponent} from './header.component';
import {MatSelectModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {NgxsModule} from '@ngxs/store';
import {BeersState} from '../../shared/state/beers/beers.state';
import {HttpClientModule} from '@angular/common/http';
import {HeaderNavComponent} from '../header-nav/header-nav.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent,
        HeaderNavComponent
      ],
      imports: [
        RouterTestingModule.withRoutes([{path: '', component: HeaderComponent}]),
        NgxsModule.forRoot([BeersState]),
        HttpClientModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
