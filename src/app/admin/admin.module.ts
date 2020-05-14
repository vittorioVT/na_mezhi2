import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './shared/components/admin-layout/admin-layout.component';

@NgModule({
  imports: [CommonModule,
    RouterModule.forChild([
      { path: '', component: AdminLayoutComponent }
    ])
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    AdminLayoutComponent
  ]

})
export class AdminModule { }
