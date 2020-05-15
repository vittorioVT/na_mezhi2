import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LandMarketPageComponent } from './land-market-page/land-market-page.component';
import { AgrarianReformPageComponent } from './agrarian-reform-page/agrarian-reform-page.component';
import { AbroadPageComponent } from './abroad-page/abroad-page.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { EuropeonExperiencePageComponent } from './europeon-experience-page/europeon-experience-page.component';
import { AdminModule } from './admin/admin.module';
import { PostPageComponent } from './post-page/post-page.component';


const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: HomePageComponent },
      { path: 'post/:id', component: PostPageComponent },
      { path: 'landmarket', component: LandMarketPageComponent },
      { path: 'agrarionreform', component: AgrarianReformPageComponent },
      { path: 'abroad', component: AbroadPageComponent },
      { path: 'view', component: ViewPageComponent },
      { path: 'europeonexperience', component: EuropeonExperiencePageComponent }
    ]
  },
  {
    path: 'admin', loadChildren:'./admin/admin.module#AdminModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
