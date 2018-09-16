import { Component, OnInit } from '@angular/core';


import { Dish } from '../shared/dish';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  selectedDish: Dish;
  constructor() { }

  ngOnInit() {
  }
  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }

}
