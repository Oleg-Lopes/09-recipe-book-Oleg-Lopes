import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { forEach } from "@angular/router/src/utils/collection";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Injectable()
export class RecipesService {
  constructor(
    private http: Http,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  input = "";
  recipes = [];
  currentRecipe = [];
  favorites = [];
  currentFavorite = [];
  findRecipes() {
    this.recipes.length = 0;
    this.http
      .get(
        "https://api.edamam.com/search?q=" +
          this.input +
          "&app_id=3ad1c80b&app_key=80efc3328ee9b1b06b148f8fecfb8138&from=0&to=16"
      )
      .subscribe((res: Response) => {
        const api = res.json();
        api.hits.forEach((hits, index) => {
          this.recipes.push(hits.recipe);
        });
      });
  }

  getCurrentRecipe(recipe) {
    this.currentRecipe.length = 0;
    this.recipes.forEach((recipes, index) => {
      if (this.recipes[index].label == recipe.label) {
        this.currentRecipe.push(this.recipes[index]);
      }
    });
  }

  getCurrentFavorite(recipe) {
    this.currentFavorite.length = 0;
    this.favorites.forEach((favorites, index) => {
      if (this.favorites[index].label == recipe.label) {
        this.currentFavorite.push(this.favorites[index]);
      }
    });
    console.log(this.currentFavorite);
  }

  addFavorite(recipe) {
    let duplicate = false;
    this.favorites.forEach((favorites, index) => {
      if (this.favorites[index].label == recipe.label) {
        duplicate = true;
      }
    });

    if (!duplicate) {
      this.favorites.push(recipe);
    }
  }

  deleteFavorite(recipe) {
    this.favorites.forEach((favorites, index) => {
      if (this.favorites[index].label == recipe.label) {
        this.favorites.splice(index, 1);
      }
    });
    this.goToFavorites();
  }

  goToFavorites() {
    this.router.navigate(["/favorites"]);
  }

  goToRecipes() {
    this.router.navigate(["/recipes"]);
  }
}
