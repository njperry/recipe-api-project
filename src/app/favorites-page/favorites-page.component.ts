import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'favorites-page', //deleted app
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {

  //this holds the favorites array 
  favorites: any[];

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  //on page initialization calls the favorites array to pull objects from returnFavorite method
  ngOnInit() {
    this.favorites = this.recipeService.returnFavorites();
  }
//this method deletes favorites based on the click event, then sends the data back to the services to call the removeFromFavorites method
  deleteFavorite(favorite) {
    this.recipeService.removeFromFavorites(favorite);
  }
}
