import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { RigsComponent } from './rigs/rigs.component';
import { LinesComponent } from './lines/lines.component';
import { KnotsComponent } from './knots/knots.component';
import { EquipmentComponent } from './equipment/equipment.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RigsComponent,
    LinesComponent,
    KnotsComponent,
    EquipmentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
