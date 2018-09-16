import { Component, OnInit } from '@angular/core';


import { Dish } from '../shared/dish';

import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  dishes:Dish[];

  selectedDish: Dish;
  constructor( private dishService: DishService) { }

  ngOnInit() {
    this.dishes = this.dishService.getDishes();
  }
  onSelect(dish: Dish) {
    console.log("Hello1"); //1. This works perfectly

    this.selectedDish = dish;
  }

}
