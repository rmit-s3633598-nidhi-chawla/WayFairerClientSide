import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from "./landingPage/landingPage.component";
import { SearchParentComponent } from "./searchPage/searchParent.component";
import { SearchChildComponent } from "./searchPage/searchChildComponent.component";
// Route config let's you map routes to components
const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'landing',
    component: LandingPageComponent,
  },
   {
    path: 'search',
    component: SearchParentComponent,
  },
  // map '/' to '/persons' as our default route
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  },
];

export const appRouterModule = {
  routes : RouterModule.forRoot(routes),
  components: [ LandingPageComponent, SearchParentComponent,SearchChildComponent]
};