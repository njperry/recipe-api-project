import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'recipe-list', //deleted app
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  // this allows us to call on our recipe service and set it to a variable
  recipe: any;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  // this method calls on initialization, and sets the recipe variable to the result of calling on the getRecipe method in the service
  ngOnInit() {
    this.recipe = this.recipeService.getRecipe(
      this.route.snapshot.paramMap.get("index")
    );
    console.log(this.recipe);
  }

}
