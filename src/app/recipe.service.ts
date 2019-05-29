import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { share, map } from "rxjs/operators";
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  apikey: string = "974420c03fe6a73eec394c98500ec20b";
  apiid: string = "01d5bd21";
  
  favorites: any[] = [];
  results: any[] = [];
  

  constructor(private http: HttpClient) {}

  getRecipeData(userSearch: string, dietSearch: string, calorieSearch: string) {
    return this.http.get(`https://api.edamam.com/search?q=${userSearch}&app_id=${this.apiid}&app_key=${this.apikey}&from=0&to=9&calories=${calorieSearch}&health=${dietSearch}`).toPromise().then(response => {
      this.results = response["hits"];
      console.log(this.results);
      return this.results;
    })
  }

  addToFavorites(result, index) {
    console.log(result, index);
    this.favorites.push(result);
    console.log(this.favorites);
    this.results[index].favorited = true;
  }

  returnFavorites() {
    return this.favorites;
  }

  getRecipe(index: number | string): any {
    return this.favorites[index];
  }

  removeFromFavorites(i) {
    console.log(i);
    this.favorites.splice(i, 1); 
  }

  // getHealthLabel(dietSearch: string) {
  //   return this.http.get(`https://api.edamam.com/search?q=&app_id=${this.apiid}&app_key=${this.apikey}&health=${dietSearch}`);
  // }

  // getCalories(calorieSearch: string) {
  //   return this.http.get(`https://api.edamam.com/search?q=&app_id=${this.apiid}&app_key=${this.apikey}&calories=${calorieSearch}`);
  // }

}
