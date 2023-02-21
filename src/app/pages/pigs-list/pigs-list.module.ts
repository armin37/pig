import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PigsListRoutingModule} from './pigs-list-routing.module';
import {PigsListComponent} from './pigs-list.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from "@angular/forms";
import {InputTextModule} from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';

@NgModule({
  declarations: [
    PigsListComponent
  ],
  imports: [
    CommonModule,
    PigsListRoutingModule,
    TableModule,
    ButtonModule,
    DialogModule,
    FormsModule,
    InputTextModule,
    ToastModule
  ]
})
export class PigsListModule {
}
