import { Component, OnInit } from '@angular/core';
import { SwapiService } from 'src/app/services/swapi.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.page.html',
  styleUrls: ['./starships.page.scss'],
})
export class StarshipsPage implements OnInit {

  starships:any;
  iconname = "rocket";

  constructor(private obtenserve3: SwapiService) { }
   
  ngOnInit() {
    this.starships = this.obtenserve3.getswapi('starships');
  }

}
