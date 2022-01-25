import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlantService } from './plant.service';
import { SharedModule } from '../shared.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecurityInterceptor } from 'src/app/security/authentication/security.interceptor';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  providers: [
    PlantService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SecurityInterceptor,
      multi: true
    },
  ]
})
export class ServicesModule { }
