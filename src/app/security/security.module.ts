import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './auth.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    AuthenticationModule,
  ],
  exports: [],
  providers: [
    AuthService
  ]
})
export class SecurityModule { }
