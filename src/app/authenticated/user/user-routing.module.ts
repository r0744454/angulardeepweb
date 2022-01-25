import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UploadComponent } from "./upload/upload.component";
import { AnalysisComponent } from "./analysis/analysis.component";

const routes: Routes = [
    { path: "upload", component: UploadComponent },
    { path: "analysis", component: AnalysisComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UserRoutingmodule {}