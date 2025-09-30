import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ANIMALS, FRUITS, Emoji } from './models/emoji.model';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css']
})
export class GenericComponent implements OnInit {

  genVect : Emoji[]= [{name:"", emoji:""}]; 

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(this.getRouterParam);
  }
  
  ngOnInit(): void {
  }

  getRouterParam = (params: ParamMap) =>
  {
    let uri_param = params.get('id');
    console.log (uri_param);

    if (uri_param == 'fruits') this.genVect = FRUITS;
    if (uri_param == 'animals') this.genVect = ANIMALS;

  }
}