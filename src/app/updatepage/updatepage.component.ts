import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {Cours} from '../cours';
import {S1Service} from '../s1.service';

@Component({
  selector: 'app-updatepage',
  templateUrl: './updatepage.component.html',
  styleUrls: ['./updatepage.component.css']
})
export class UpdatepageComponent implements OnInit {
public cid;
public t;
public d;
public desc;
public c;


  constructor(private route:ActivatedRoute, private router:Router, private s:S1Service) { }

  ngOnInit(): void {
  	var id=this.route.snapshot.paramMap.get('id');
  	this.cid=id;
  	this.s.getCoursById(id)
  		.subscribe(res=>{this.t=res.titre;this.d=res.date;this.desc=res.description;this.c=res.coeff});
  }

  OnUpdate(cours:any){
  var id=this.route.snapshot.paramMap.get('id');
   this.route.params.subscribe(params=>{
    cours._id=this.cid;
  	console.log("id : "+cours._id)
  	console.log("titre : "+cours.titre)
  	console.log("date : "+cours.date)
  	console.log("description: "+cours.description)
  	console.log("coeff : "+cours.coeff)
  	this.s.updateCours(cours).subscribe(res=>{console.log("updated "+res);
  		  cours=res;
  		  this.router.navigate(['/cours'])
  		 });
  		  });
  }

}
