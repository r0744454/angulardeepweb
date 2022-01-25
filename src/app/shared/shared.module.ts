import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { Router, RouterModule } from '@angular/router';
import { ServicesModule } from './services/services.module';

@NgModule({
  declarations: [
    NavigationComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    ServicesModule,
    RouterModule,
  ],
  exports: [
    FormsModule,
    HttpClientModule,
    RouterModule,
    NavigationComponent,
    ServicesModule,
    HomeComponent,
  ]
})
export class SharedModule { }
