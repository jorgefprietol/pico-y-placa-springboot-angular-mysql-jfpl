import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AutoService {

  baseUrl: string = 'http://localhost:8080';
  constructor(private http: HttpClient) { }

  listAutos(){
    return this.http.get(this.baseUrl + '/auto');
  }

  viewAutos(id: string){
    return this.http.get(this.baseUrl + '/auto/' + id);
  }

  addAuto(autoObj: any){
    return this.http.post(this.baseUrl + '/auto', autoObj)
  }

  editAuto(autoObj: any){
    console.log(autoObj);
    return this.http.post(this.baseUrl + '/auto', autoObj)
  }

  deleteAuto(id: string){
    console.log(id);
    return this.http.delete(this.baseUrl + '/auto/' + id);
  }

  validarAuto(autoObj: any){
    console.log(autoObj);
    return this.http.get(this.baseUrl + autoObj)
  }

}
