import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  // faLightbulb: IconDefinition;
  // faDollarSign = faDollarSign;

  constructor(
    private themeService: ThemeService
  ) {}

  ngOnInit() {
    // this.setLightbulb();
  }

  // setLightbulb() {
  //   if (this.themeService.isDarkTheme()) {
  //     this.faLightbulb = faRegularLightbulb;
  //   } else {
  //     this.faLightbulb = faSolidLightbulb;
  //   }
  // }

  toggleTheme() {
    if (this.themeService.isDarkTheme()) {
      this.themeService.setLightTheme();
    } else {
      this.themeService.setDarkTheme();
    }

    // this.setLightbulb();
  }

}