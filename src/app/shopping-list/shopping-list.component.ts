import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  ingredients: Ingredient[] = [
    new Ingredient('Chicken breast', 5),
    new Ingredient('Potatos', 2),
    new Ingredient('Onions', 10)
  ];

  onItemArrived(item: Ingredient) {
    if(Object.values(item).every(value => !!value)) {
      this.ingredients.push(item)
    }
  }
}
