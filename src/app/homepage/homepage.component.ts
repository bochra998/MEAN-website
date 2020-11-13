import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import{S1Service} from '../s1.service';
import {Cours} from '../cours';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
faEdit=faEdit;
faTrashAlt=faTrashAlt;
cours: Array<Cours>;
public n=0;
  constructor(private router:Router, private s:S1Service) { }

  ngOnInit(): void {
  	this.s.getCours()
  		.subscribe(resCours=>this.cours=resCours);
  }

  OnUpdateFunction(c){
  	console.log(c._id);
  	this.router.navigate(['/cours',c._id]);

  }


  OnDeleteFunction(c){
    console.log(c._id);
     this.s.deleteCours(c)
    .subscribe(res=>{console.log("deleted "+res);
        this.router.navigate(['/deletecours'])
      
        });

  }

  

}
