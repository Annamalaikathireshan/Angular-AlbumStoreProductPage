import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import 'rxjs/add/operator/map'

@Injectable()
export class ProductService {

  private _album = "../assets/album.json";

  constructor(private _http: HttpClient) {

  }

   getAlbum(id:number){
     return this._http.get(this._album).map((response)=>response.json())
   }
}
