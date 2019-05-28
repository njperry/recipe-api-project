import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service'; //added

@Component({
  selector: 'search-criteria', //deleted app
  templateUrl: './search-criteria.component.html',
  styleUrls: ['./search-criteria.component.css']
})
export class SearchCriteriaComponent implements OnInit {

  results: any[] = [];

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  searchRecipe(form) {
    this.recipeService.getRecipeData(form.value.userSearch, this.selectedDiet, this.selectedCalories).subscribe(response => {
      // console.log(response);
      this.results = response["hits"];
      console.log(this.results);
    });
  }

  selectedDiet: string = '';

  selectDiet (event: any) {
    this.selectedDiet = event.target.value;
    console.log(this.selectedDiet);
  }
  
  selectedCalories: string = '';

  selectCalories (event: any) {
    this.selectedCalories = event.target.value;
    console.log(this.selectedCalories);
  }

  

  // addFavorite(newFavorite: string) {
  //   this.results = this.recipeService.addFavorite(newFavorite);
  //   console.log("I am adding to your favorites");
  // }

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
