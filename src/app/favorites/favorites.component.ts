import { Component, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";
import { RecipesService } from "../recipes.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: "app-favorites",
  templateUrl: "./favorites.component.html",
  styleUrls: ["./favorites.component.css"]
})
export class FavoritesComponent implements OnInit {
  favorites = this.recipesService.favorites;

  constructor(
    private route: ActivatedRoute,
    public recipesService: RecipesService,
    private router: Router
  ) {}

  ngOnInit() {}

  openFavorite(recipe) {
    this.recipesService.getCurrentFavorite(recipe);
    this.router.navigate(["/favorites", recipe.label]);
  }

  deleteFavorite(recipe) {
    this.recipesService.deleteFavorite(recipe);
  }

  goToRecipes() {
    this.recipesService.goToRecipes();
  }
}
