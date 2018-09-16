import { Component, OnInit } from '@angular/core';

import {Dish} from '../shared/dish';
import {DISHES} from '../shared/dish';

import {DishComment} from '../shared/comment';
import {COMMENTS} from '../shared/comment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  dishes: Dish[] = DISHES;
  comments: DishComment[] = COMMENTS;

  selectedDish: Dish = DISHES[0];


  constructor() { }

  ngOnInit() {
  }

}
