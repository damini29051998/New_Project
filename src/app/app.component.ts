import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'admin-panel-layout';
  sideBarOpen = true;
  variables: string[] = [];
  filteredList2: any = [];

  // Separate filtered lists for each dropdown
  filteredRegions: string[] = [];
  filteredCountries: string[] = [];
  filteredStates: string[] = [];
  filteredCities: string[] = [];
  filteredCompanies: string[] = [];
  ngOnInit() {
    this.variables = [
      'North America',
      'South America',
      'Europe',
      'Asia',
      'India',
      'USA',
      'California',
      'Texas',
      'Mumbai',
      'Delhi',
      'New York',
      'Chicago',
      'TCS',
      'Infosys',
      'Google',
      'Amazon',
    ];

    // Initially show all variables (simulate full list)
    this.filteredRegions = [...this.variables];
    this.filteredCountries = [...this.variables];
    this.filteredStates = [...this.variables];
    this.filteredCities = [...this.variables];
    this.filteredCompanies = [...this.variables];
  }
  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
