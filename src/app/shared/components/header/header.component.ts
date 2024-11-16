import { Component, inject, OnInit } from '@angular/core';
import { ThemeService } from '../../../core/services/theme.service';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  private themeService = inject(ThemeService);

  private currentTheme: 'theme_dark' | 'theme_light' = 'theme_light';
  protected isNavbarCollapsed = false;

  ngOnInit(): void {
    // this.switchThemes();
    console.log('hi');
  }

  protected switchThemes() {
    this.currentTheme =
      this.currentTheme === 'theme_light' ? 'theme_dark' : 'theme_light';
    this.themeService.switchThemes(this.currentTheme);
  }
  protected toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
}
