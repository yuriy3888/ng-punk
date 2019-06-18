import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Beer} from '../../shared/state/beers/beer.model';

@Component({
  selector: 'app-beer-item',
  templateUrl: './beer-item.component.html',
  styleUrls: ['./beer-item.component.scss']
})
export class BeerItemComponent implements OnInit, OnDestroy {
  @Input()
  beer: Pick<Beer, 'id' | 'name' | 'image_url'>;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

}
