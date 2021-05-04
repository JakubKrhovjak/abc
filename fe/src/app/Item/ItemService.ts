import { Injectable } from '@angular/core';
import {Item} from "./Item";

import {environment} from "../../environments/environment";

@Injectable()
export class ItemService {
  itemUrl = 'items';  // URL to web api
  // private handleError: HandleError;

  constructor(
    private http: HttpClient
  ) {

  }


  getItems(): Observable<Item[]> {
    const url = `${environment.mainUrl}/${this.itemUrl}`
    return this.http.get<Item[]>(url)
      // .pipe(
      //   catchError(this.handleError('getHeroes', []))
      // );
  }
}
