import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {Cours} from './cours';
import {map} from 'rxjs/operators';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';


@Injectable({
  providedIn: 'root'
})
export class S1Service {

  constructor( private http:HttpClient) { }

  getCours(){
  	return this.http.get<Cours[]>('http://localhost:3500/cours')
  		.pipe(
  			map(response=>response)
  			);
  }

  getCoursById(id:String){
  	return this.http.get<Cours>('http://localhost:3500/cours/'+id)
  		.pipe(
  			map(response=>response)
  			);
  }

  addCours(cour){
    let headers=new HttpHeaders({
  'Content-Type':'application/json'
  });
  let options={
  headers:headers
  }
    return this.http.post('http://localhost:3500/addCours',cour)
      .pipe(
        map(response=>response)
        );
  }

  updateCours(cour:Cours){
  	let headers=new HttpHeaders({
  'Content-Type':'application/json'
  });
  let options={
  headers:headers
  }
  return this.http.put('http://localhost:3500/updateCours/'+cour._id,cour)
  		.pipe(
  			map(response=>response)
  			);
  }

 deleteCours(cour:Cours){
  let headers=new HttpHeaders({
  'Content-Type':'application/json'
  });
  let options={
  headers:headers
  }
  return this.http.delete('http://localhost:3500/deleteCours/'+cour._id,options)
 }

  
}
