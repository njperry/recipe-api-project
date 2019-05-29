import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; //added
import { RecipeService } from './recipe.service'; //added
import { AppComponent } from './app.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { FavoritesPageComponent } from './favorites-page/favorites-page.component';
import { FormsModule } from '@angular/forms'; //added
import { RouterModule, Routes } from '@angular/router' //added

// this variable stores all of our routes as objects in the appRoutes array
const appRoutes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: SearchCriteriaComponent },
  { path: "favorites", component: FavoritesPageComponent },
  { path: "recipe/:index", component: RecipeListComponent }
];

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
    FormsModule, //added
    RouterModule.forRoot(appRoutes) //added
  ],
  providers: [RecipeService], //added
  bootstrap: [AppComponent]
})
export class AppModule { }
