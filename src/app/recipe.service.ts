import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  apikey: string = "974420c03fe6a73eec394c98500ec20b";
  apiid: string = "01d5bd21";
  
  favorites: any[] = [];

  constructor(private http: HttpClient) {}

  getRecipeData(userSearch: string, dietSearch: string, calorieSearch: string) {
    return this.http.get(`https://api.edamam.com/search?q=${userSearch}&app_id=${this.apiid}&app_key=${this.apikey}&from=0&to=9&calories=${calorieSearch}&health=${dietSearch}`);
  }

  addToFavorites(result) {
    console.log(result);
    this.favorites.push(result);
  }

  // getRecipe(id: number | string): any {
  //   let index = this.recipes.findIndex(recipe => recipe.id ==id)
  //   return this.recipes[index];
  //   for (let recipe of this.recipes) {
  //     if (recipe.id == id) {
  //       return recipe;
  //     }
  //   }
  // }

  // getHealthLabel(dietSearch: string) {
  //   return this.http.get(`https://api.edamam.com/search?q=&app_id=${this.apiid}&app_key=${this.apikey}&health=${dietSearch}`);
  // }

  // getCalories(calorieSearch: string) {
  //   return this.http.get(`https://api.edamam.com/search?q=&app_id=${this.apiid}&app_key=${this.apikey}&calories=${calorieSearch}`);
  // }

}
