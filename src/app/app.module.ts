import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; //added
import { RecipeService } from './recipe.service'; //added
import { AppComponent } from './app.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { FormsModule } from '@angular/forms'//added

@NgModule({
  declarations: [
    AppComponent,
    SearchCriteriaComponent,
    RecipeListComponent,
    FavoritesPageComponent  
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, //added
    FormsModule //added
  ],
  providers: [RecipeService], //added
  bootstrap: [AppComponent]
})
export class AppModule { }
