import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  baseUrl:string="http://3.86.58.26:9090/medicine";
  //baseUrl:string="http://localhost:9090/medicine";
  constructor(public http:HttpClient) { }

  storeMedicine(medicine:any):Observable<string>{
    return this.http.post(this.baseUrl+"/store",medicine,{responseType:'text'});
  }

  findAll():Observable<Medicine[]> {
    return this.http.get<Medicine[]>(this.baseUrl+"/findAll");
  }

}
