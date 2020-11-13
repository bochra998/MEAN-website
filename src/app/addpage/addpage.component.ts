import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Cours} from '../cours';
import {S1Service} from '../s1.service';

@Component({
  selector: 'app-addpage',
  templateUrl: './addpage.component.html',
  styleUrls: ['./addpage.component.css']
})
export class AddpageComponent implements OnInit {

  constructor(private router:Router, private s:S1Service) { }
cours=[];
public cid;
public t;
public d;
public desc;
public c;

  ngOnInit(): void {

  }

  OnSubmitAddCours(){
  let newC={
  titre:this.t,
  date:this.d,
  description:this.desc,
  coeff:this.c
  }
  this.t='';
  this.d='';
  this.desc='';
  this.c=0;
  	this.s.addCours(newC)
  		.subscribe(resNextCours=>this.cours.push(resNextCours));
  		this.router.navigate(['/cours'])
  }

}
