import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ActivatedRoute, Router } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgIf
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
