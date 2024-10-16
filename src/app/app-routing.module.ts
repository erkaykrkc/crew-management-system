import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CertificateTypeCreateComponent } from './certificate-type-create/certificate-type-create.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'certificate-type-create', component: CertificateTypeCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
