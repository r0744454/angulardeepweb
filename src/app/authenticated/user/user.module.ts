import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnalysisComponent } from './analysis/analysis.component';
import { UploadComponent } from './upload/upload.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserRoutingmodule } from './user-routing.module';



@NgModule({
  declarations: [
    AnalysisComponent,
    UploadComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    UserRoutingmodule,
  ],
  exports: [
    AnalysisComponent,
    UploadComponent,
  ]
})
export class UserModule { }
