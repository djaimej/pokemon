import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './pages/list/list.component';
import { InfoComponent } from './pages/info/info.component';
import { RouterModule, Routes } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ImagePipe } from '@shared/pipes/image.pipe';
import { SharedModule } from '@shared/shared.module';

export const routes: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: ':id',
    component: InfoComponent
  },
];

@NgModule({
  declarations: [
    ListComponent,
    InfoComponent,
  ],
  imports: [
    CommonModule,
    NgbPaginationModule,
		RouterModule.forChild(routes),
    SharedModule,
  ],
  exports: [
    RouterModule
  ]
})
export class GeneralModule { }
