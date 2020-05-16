import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from './admin/shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

//material-design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';


import { AppComponent } from './app.component';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PostPageComponent } from './post-page/post-page.component';
import { HeaderPageComponent } from './header-page/header-page.component';
import { FooterPageComponent } from './footer-page/footer-page.component';
import { LandMarketPageComponent } from './land-market-page/land-market-page.component';
import { AgrarianReformPageComponent } from './agrarian-reform-page/agrarian-reform-page.component';
import { AbroadPageComponent } from './abroad-page/abroad-page.component';
import { ViewPageComponent } from './view-page/view-page.component';
import { EuropeonExperiencePageComponent } from './europeon-experience-page/europeon-experience-page.component';
import { PostComponent } from './shared/components/post/post.component';




@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    PostPageComponent,
    HeaderPageComponent,
    FooterPageComponent,
    LandMarketPageComponent,
    AgrarianReformPageComponent,
    AbroadPageComponent,
    ViewPageComponent,
    EuropeonExperiencePageComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,

    //material design
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
