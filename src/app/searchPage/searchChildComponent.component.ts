import { Component, Input } from '@angular/core';
 

@Component({
  selector: 'search-result',
  template: `
    <h3>Search Result  says:{{searchResults}}</h3>
    `,
  inputs:['searchResults']
})
export class SearchChildComponent {
  searchResults: any;
  
}

/*import { Hero } from './hero';
 
@Component({
  selector: 'hero-child',
  template: `
    <h3>{{hero.name}} says:</h3>
    <p>I, {{hero.name}}, am at your service, {{masterName}}.</p>
  `
})
export class HeroChildComponent {
 // @Input() hero: Hero;
 @Input() hero: any;
  @Input('master') masterName: string;
}*/