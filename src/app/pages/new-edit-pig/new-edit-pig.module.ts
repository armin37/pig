import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NewEditPigRoutingModule} from './new-edit-pig-routing.module';
import {NewEditPigComponent} from './new-edit-pig.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {InputNumberModule} from 'primeng/inputnumber';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';
import {NgxMapboxGLModule} from 'ngx-mapbox-gl';
import {CalendarModule} from 'primeng/calendar';
import {DialogModule} from 'primeng/dialog';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ToastModule} from 'primeng/toast';
import {MAP_TOKEN} from '../../env';

@NgModule({
  declarations: [
    NewEditPigComponent
  ],
  imports: [
    CommonModule,
    NewEditPigRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputNumberModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    CalendarModule,
    DialogModule,
    InputTextareaModule,
    ToastModule,
    NgxMapboxGLModule.withConfig({
      accessToken: MAP_TOKEN,
    })
  ]
})
export class NewEditPigModule {
}
