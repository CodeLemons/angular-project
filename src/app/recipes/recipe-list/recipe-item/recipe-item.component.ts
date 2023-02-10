import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent {
  @Input() recipe: Recipe;
  @Output() sendRecipeDetails = new EventEmitter<Recipe>();

  onSelectedRecipe() {
    this.sendRecipeDetails.emit({
      name: this.recipe.name,
      description: this.recipe.description,
      imagePath: this.recipe.imagePath
    })
  }
}
