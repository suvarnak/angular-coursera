import { Component, OnInit } from '@angular/core';

import {Dish} from '../shared/dish';
import {DISHES} from '../shared/dish';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.css']
})
export class DishdetailComponent implements OnInit {
  dishes: Dish[] = DISHES;
  selectedDish: Dish = DISHES[2];

  constructor() { }

  ngOnInit() {
  }

}
