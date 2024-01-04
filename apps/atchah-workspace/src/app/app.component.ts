import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MainNavComponent, CommonModule],
  selector: 'ecom-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'atchah-workspace';

  constructor(private readonly store: Store){}
}
