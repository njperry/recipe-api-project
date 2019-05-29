import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { share, map } from "rxjs/operators";
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
// variables storing our api credentials
  apikey: string = "974420c03fe6a73eec394c98500ec20b";
  apiid: string = "01d5bd21";
  
  // arrays storing results from search and favorites once selected
  favorites: any[] = [];
  results: any[] = [];
  

  constructor(private http: HttpClient) {}

  // method takes search parameteres and adds it into the api url to filter results based on user input in fields
  // and then returns the api's response and stores all in the results array
  getRecipeData(userSearch: string, dietSearch: string, calorieSearch: string) {
    return this.http.get(`https://api.edamam.com/search?q=${userSearch}&app_id=${this.apiid}&app_key=${this.apikey}&from=0&to=9&calories=${calorieSearch}&health=${dietSearch}`).toPromise().then(response => {
      this.results = response["hits"];
      console.log(this.results);
      return this.results;
    })
  }

  // method to add individual favorites from the results array as displayed after search
  addToFavorites(result, index) {
    console.log(result, index);
    this.favorites.push(result);
    console.log(this.favorites);
    this.results[index].favorited = true;
  }

  // method returns the favorites array when called
  returnFavorites() {
    return this.favorites;
  }

  // method returns the correct recipe based on its index number when called
  getRecipe(index: number | string): any {
    return this.favorites[index];
  }

  // method removes a favorite from the favorite array based on its index number
  removeFromFavorites(i) {
    console.log(i);
    this.favorites.splice(i, 1); 
  }

}
