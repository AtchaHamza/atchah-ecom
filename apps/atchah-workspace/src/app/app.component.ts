import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { getCategoriesAction, selectCategories } from '@org/category';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MainNavComponent, CommonModule],
  selector: 'ecom-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'atchah-workspace';

  categories$ = this.store.select(selectCategories)

  constructor(private readonly store: Store){}

  ngOnInit(): void {
      this.store.dispatch(getCategoriesAction())
  }
}
