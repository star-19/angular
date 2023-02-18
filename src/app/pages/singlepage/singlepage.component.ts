import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from 'src/app/hero.service';
import { data } from 'src/assets/data';
@Component({
  selector: 'app-singlepage',
  templateUrl: './singlepage.component.html',
  styleUrls: ['./singlepage.component.css']
})
export class SinglepageComponent {
  constructor(private router:Router, private hero: HeroService){}
  data=this.hero.giveData();
  
  single :any
  ngOnInit(){
  let id=Number(localStorage.getItem('id'))
  this.single=data.filter (e => e.id === id)
  console.log("name",this.single)
  }
  }
  

