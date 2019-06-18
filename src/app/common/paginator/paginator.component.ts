import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Store} from '@ngxs/store';
import {BeersState} from '../../shared/state/beers/beers.state';
import {Beer} from '../../shared/state/beers/beer.model';
import {untilDestroyed} from 'ngx-take-until-destroy';
import {MatPaginator, PageEvent} from '@angular/material';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit, OnDestroy, AfterViewInit {
  // @ts-ignore
  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  // MatPaginator Inputs
  hidePageSize = true;
  showFirstLastButtons = true;
  length = 25;
  pageSize = 25;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  beers: Beer[];

  // MatPaginator Output
  pageEvent: PageEvent;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.select(BeersState.beersList).pipe(
      untilDestroyed(this)
    ).subscribe(beers => {
      if (beers) {
        this.length = beers.length;
      }
    });

    // Load the first page items
    this.currentPageItems();
  }

  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        tap(() => this.currentPageItems())
      )
      .subscribe();
  }

  ngOnDestroy(): void {
  }

  currentPageItems() {
    const pageIndex = this.pageEvent && this.pageEvent.pageIndex || 0;
    this.store.select(BeersState.currentPageBeers(this.pageSize, pageIndex)).pipe(
      untilDestroyed(this)
    ).subscribe(beers => {
      this.beers = beers;
    });
  }
}
