import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule, ButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.activatedRoute.snapshot.paramMap;
    console.log(routeParams);
  }
}
