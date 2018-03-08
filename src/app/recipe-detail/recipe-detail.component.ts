import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RecipesService } from "../recipes.service";
import { Router } from "@angular/router";
import { DecimalPipe } from "@angular/common";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.component.html",
  styleUrls: ["./recipe-detail.component.css"]
})
export class RecipeDetailComponent implements OnInit {
  currentRecipe = this.recipesService.currentRecipe;

  constructor(
    private route: ActivatedRoute,
    public recipesService: RecipesService,
    private router: Router
  ) {}

  ngOnInit() {}

  addFavorite(recipe) {
    this.recipesService.addFavorite(recipe);
    document.getElementById("btn-add-fav").classList.add("disabled");
  }

  goToFavorites() {
    this.recipesService.goToFavorites();
  }

  goToRecipes() {
    this.recipesService.goToRecipes();
  }
}
