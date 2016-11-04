import { Component, Inject, OnInit } from '@angular/core';

import { NgZoneGlobalCache } from 'angular2-cache';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  cacheKey: string = 'test';

  title = 'app works!';

  constructor(@Inject(NgZoneGlobalCache) private _cache: NgZoneGlobalCache) {

  }

  ngOnInit() {
    this._cache.setCachedValue(this.cacheKey, { text: 'Hello world!' });
  }

  onButtonClick(e: MouseEvent) {
    let val: { text: string } = this._cache.getCachedValue(this.cacheKey);

    alert(val.text);
  }
}
