import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {Cours} from '../cours';
import {S1Service} from '../s1.service';

@Component({
  selector: 'app-deletepage',
  templateUrl: './deletepage.component.html',
  styleUrls: ['./deletepage.component.css']
})
export class DeletepageComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router, private s:S1Service) { }

  ngOnInit(): void {
  }


}
