import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BeerItemComponent} from './beer-item.component';
import {beers} from '../../../assets/mockup/beers';
import {LoadableModule} from '../../shared/loadable/loadable.module';
import {RouterTestingModule} from '@angular/router/testing';

describe('BeerItemComponent', () => {
  let component: BeerItemComponent;
  let fixture: ComponentFixture<BeerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BeerItemComponent],
      imports: [
        RouterTestingModule.withRoutes([{path: 'beer', component: BeerItemComponent}])
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show BEER TEST INPUT', () => {
    component.beer = beers[0];
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('.beer-item__title').innerText).toEqual(beers[0].name);
  });
});
