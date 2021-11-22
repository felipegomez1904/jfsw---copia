import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-descripcion-people',
  templateUrl: './descripcion-people.page.html',
  styleUrls: ['./descripcion-people.page.scss'],
})
export class DescripcionPeoplePage implements OnInit {
  people:any;

  constructor(private miacrou2:ActivatedRoute, private miswapiserv:SwapiService) { }

  ngOnInit() {
    this.miacrou2.paramMap.subscribe((params)=>{
      let id = params.get('id');
      console.log(id);
      this.people = this.miswapiserv.getswapi(`people/${id}`).subscribe(data=>{ 
        this.people = data;
        console.log(data);
        });
    });

    
  }

}