import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from "./landingPage/landingPage.component";

// Route config let's you map routes to components
const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'landing',
    component: LandingPageComponent,
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
  components: [ LandingPageComponent]
};