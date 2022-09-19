import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RigsComponent } from './rigs/rigs.component';
import { LinesComponent } from './lines/lines.component';
import { KnotsComponent } from './knots/knots.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'rigs', component: RigsComponent },
  { path: 'lines', component: LinesComponent },
  { path: 'knots', component: KnotsComponent },
  { path: 'equipment', component: EquipmentComponent },
  { path: '', component: HomeComponent }

];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
