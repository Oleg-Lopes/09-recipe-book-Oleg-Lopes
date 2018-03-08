import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipesService } from "./recipes.service";
import { HttpClientModule } from "@angular/common/http";
import { RecipeRoutingModule } from "./recipe-routing.module";
import { RouterModule, Routes } from "@angular/router";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { FavoritesComponent } from "./favorites/favorites.component";
import { FavoriteDetailComponent } from "./favorite-detail/favorite-detail.component";

@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipeDetailComponent,
    FavoritesComponent,
    FavoriteDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RecipeRoutingModule
  ],
  providers: [RecipesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
