import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RecipesService } from "../recipes.service";
import { Router } from "@angular/router";
import { DecimalPipe } from "@angular/common";

@Component({
  selector: "app-favorite-detail",
  templateUrl: "./favorite-detail.component.html",
  styleUrls: ["./favorite-detail.component.css"]
})
export class FavoriteDetailComponent implements OnInit {
  currentFavorite = this.recipesService.currentFavorite;

  constructor(
    private route: ActivatedRoute,
    public recipesService: RecipesService,
    private router: Router
  ) {}

  ngOnInit() {}

  deleteFavorite(recipe) {
    this.recipesService.deleteFavorite(recipe);
  }

  goToRecipes() {
    this.recipesService.goToRecipes();
  }

  backToFavorites() {
    this.recipesService.goToFavorites();
  }
}
