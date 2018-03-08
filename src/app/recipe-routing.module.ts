import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RecipesComponent } from "./recipes/recipes.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { FavoritesComponent } from "./favorites/favorites.component";
import { FavoriteDetailComponent } from "./favorite-detail/favorite-detail.component";

const routes: Routes = [
  { path: "favorites", component: FavoritesComponent },
  { path: "favorites/:label", component: FavoriteDetailComponent },
  { path: "recipes", component: RecipesComponent },
  { path: "recipes/:label", component: RecipeDetailComponent },
  { path: "", redirectTo: "/recipe", pathMatch: "full" },
  { path: "**", redirectTo: "/recipe", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RecipeRoutingModule {}
