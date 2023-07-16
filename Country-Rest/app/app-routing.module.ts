import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
/*
import { BiodetailComponent } from './biodetail/biodetail.component';
import { InicioComponent } from './inicio/inicio.component';
//
const routes: Routes = [{ path: 'biodetail', component: BiodetailComponent},
{ path: 'inicio', component: InicioComponent },
{path: '', redirectTo: '/inicio', pathMatch: 'full'}];
*/
@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
