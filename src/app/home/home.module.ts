import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}





//  真没抄袭
//  真没抄袭
//  真没抄袭
//  真没抄袭
//  真没抄袭
//  真没抄袭
//  真没抄袭
//  真没抄袭
//  真没抄袭
//  真没抄袭
//  真没抄袭