import { ICategory } from 'src/app/models/icategory';
import { ICategory2 } from './../models/icategory';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonServService {

  constructor(private jsonServ:HttpClient) {

   }
   getAllCat():Observable<ICategory2>{
    return this.jsonServ.get<ICategory2>(`${environment.apiUrl2}Categories`);
   }
}
