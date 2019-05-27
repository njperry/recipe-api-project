import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service'; //added

@Component({
  selector: 'search-criteria', //deleted app
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  results: any[];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  searchRecipe(form) {
    this.recipeService.getRecipeData(form.value.userSearch, form.value.dietSearch, form.value.calorieSearch).subscribe(response => {
      // console.log(response);
      this.results = response["hits"];
      console.log(this.results);
    });
  }

  addFavorite(result: string): void {
    this.recipeService.addToFavorites(result);
  }

  // searchLabel(form) {
  //   this.recipeService.getHealthLabel(form.value.dietSearch).subscribe(response => {
  //     // console.log(response);
  //     this.results = response["hits"];
  //     console.log(this.results);
  //   });
  // }

  // searchCalories(form) {
  //   this.recipeService.getCalories(form.value.calorieSearch).subscribe(response => {
  //     // console.log(response);
  //     this.results = response["hits"];
  //     console.log(this.results);
  //   });
  // }

}
