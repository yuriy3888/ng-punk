import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HeaderNavComponent} from './header-nav.component';
import {NgxsModule} from '@ngxs/store';
import {BeersState} from '../../shared/state/beers/beers.state';
import {HttpClientModule} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';

describe('HeaderNavComponent', () => {
  let component: HeaderNavComponent;
  let fixture: ComponentFixture<HeaderNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderNavComponent
      ],
      imports: [
        RouterTestingModule,
        NgxsModule.forRoot([BeersState]),
        HttpClientModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
