import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserModule } from './user/user.module';



@NgModule({
  declarations: [],
  imports: [
    UserModule,
    CommonModule,
  ],
  exports: [],
  providers: [
  ]
})
export class AuthenticatedModule { }
