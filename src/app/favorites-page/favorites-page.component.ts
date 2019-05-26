import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'favorites-page', //deleted app
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {

  recipe: any;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    // this.recipe = this.recipeService.getRecipe(
    //   this.route.snapshot.paramMap.get("id")
    // );
    // console.log(this.recipe);
  }

}
