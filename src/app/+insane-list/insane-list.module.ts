/**
 * Created by gobi on 03.04.2017.
 */
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes } from './insane-list.routes';
import { InsaneListComponent } from './insane-list.component';
import { SaneListComponent } from "../components/sane-list/sane-list.component";

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    InsaneListComponent,
    SaneListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
})

export class InsaneListModule {
  public static routes = routes;
}
