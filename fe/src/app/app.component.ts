import { Component } from '@angular/core';
import {Item} from "./Item/Item";
import {ItemService} from "./Item/ItemService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fe';
  items = []
  constructor(private item: Item, private itemService: ItemService) {

  }

  ngOnInit() {
    let items1 = this.itemService.getItems();
    this.items.push(items1)
  }


}
