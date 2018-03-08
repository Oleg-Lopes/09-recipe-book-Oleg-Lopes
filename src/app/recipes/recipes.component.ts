import { Component, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";
import { RecipesService } from "../recipes.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"]
})
export class RecipesComponent implements OnInit {
  recipes = this.recipesService.recipes;

  constructor(
    private route: ActivatedRoute,
    public recipesService: RecipesService,
    private router: Router
  ) {}

  ngOnInit() {}

  goToFavorites() {
    this.recipesService.goToFavorites();
  }

  openRecipe(recipe) {
    this.recipesService.getCurrentRecipe(recipe);
    this.router.navigate(["/recipes", recipe.label]);
  }
}
