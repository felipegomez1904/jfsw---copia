import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  @Input()obtenApi;
  @Input()icon;
  id: string
  path: string

  constructor(private mirouter:Router) { }

  ngOnInit() {}

  showItem(item){

    let urlElements = item.url.split("/")
    console.log(urlElements)
    this.id = urlElements[urlElements.length-2]
    this.path = urlElements[urlElements.length-3]
    console.log(this.path)
    this.mirouter.navigateByUrl(`/${this.path}/${this.id}`);

  }


}
