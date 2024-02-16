import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralComponent } from '@modules/general/general.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralComponent,
    loadChildren: () => import('./modules/general/general.module').then(m => m.GeneralModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
