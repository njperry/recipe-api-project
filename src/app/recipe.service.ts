import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  apikey: string = "974420c03fe6a73eec394c98500ec20b";

  apiid: string = "01d5bd21";

  constructor(private http: HttpClient) {}

  getRecipeData(userSearch: string, dietSearch: string, calorieSearch: string) {
    return this.http.get(`https://api.edamam.com/search?q=${userSearch}&app_id=${this.apiid}&app_key=${this.apikey}&calories=${calorieSearch}&health=${dietSearch}`);
  }

  // getHealthLabel(dietSearch: string) {
  //   return this.http.get(`https://api.edamam.com/search?q=&app_id=${this.apiid}&app_key=${this.apikey}&health=${dietSearch}`);
  // }

  // getCalories(calorieSearch: string) {
  //   return this.http.get(`https://api.edamam.com/search?q=&app_id=${this.apiid}&app_key=${this.apikey}&calories=${calorieSearch}`);
  // }

}
