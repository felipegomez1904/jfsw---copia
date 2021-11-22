import { Component, OnInit } from '@angular/core';
import { SwapiService } from '../../services/swapi.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',
  styleUrls: ['./planets.page.scss'],
})
export class PlanetsPage implements OnInit {

  planets:any;
  iconname='planet';

  constructor(private obtswaserv:SwapiService) { }


  ngOnInit() {

    this.planets=this.obtswaserv.getswapi('planets')

    /*this.obtswaserv.getswapi('planets').subscribe(data=>{
      this.planets=data;
      console.log(data);
    })*/
      
 }

}
