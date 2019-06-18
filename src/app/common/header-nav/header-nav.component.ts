import {Component, Input, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {
  @Input()
  headerSticky: boolean;

  showBackButton: boolean;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.pipe(
      filter((event: any) => event instanceof NavigationEnd)
    )
      .subscribe(event => {
        if (event && event.url && event.url.includes('beer/')) {
          this.showBackButton = true;
          return;
        }
        this.showBackButton = false;
      });
  }

}
