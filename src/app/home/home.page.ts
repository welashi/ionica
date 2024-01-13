import { Component } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

import { DataService, Product } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private data: DataService) { }
  product?: Product
  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

/*   getProiductsGroups() {
    return this.data.getProducts().reduce(
      (entryMap, e) => entryMap.set(e.group, [...entryMap.get(e.group) || [], e]),
      new Map()
    )
  } */

  getProiducts(): Product[] {
    return this.data.getProducts()
  }

}
