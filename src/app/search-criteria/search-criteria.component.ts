import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service'; //added

@Component({
  selector: 'search-criteria', //deleted app
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  // this array stores all of our search results as queried on the search-criteria component
  results: any[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  // this method takes in the user input from the form and returns the appropriate recipe data, as returned from the recipe service
  searchRecipe(form) {
    this.recipeService.getRecipeData(form.value.userSearch, this.selectedDiet, this.selectedCalories).then(response => {
      this.results = response;
    });
  }

  // this variable sets the user's selectedDiet choice to an empty string
  selectedDiet: string = '';

  // this method takes in the the user's input for the selectedDiet and reassigns the variable to that value
  selectDiet (event: any) {
    this.selectedDiet = event.target.value;
    console.log(this.selectedDiet);
  }
  
  // this variable sets the user's selectedCalories choice to an empty string
  selectedCalories: string = '';

  // this method takes in the the user's input for the selectedCalories and reassigns the variable to that value
  selectCalories (event: any) {
    this.selectedCalories = event.target.value;
    console.log(this.selectedCalories);
  }

  // this method takes in the actual result and its index number, then sends it to the service to be run through the addToFavorites method, as well as sets the favorited property of the result to true
  addFavorite(result: string, index: number): void {
    this.recipeService.addToFavorites(result, index);
    this.results[index].favorited = true;

}
}