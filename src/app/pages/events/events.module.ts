import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import {
  NbButtonModule,
  NbCardModule,
  NbDatepickerModule,
  NbIconModule, NbInputModule,
  NbLayoutModule,
  NbSidebarModule,
} from '@nebular/theme';
import {YearComponent} from './year.component';
import {StoreModule} from '@ngrx/store';
import {eventReducer} from './store/event.reducer';
import {NgxEchartsModule} from 'ngx-echarts';

const components = [EventsComponent, YearComponent];


@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    NbLayoutModule,
    NbInputModule,
    NbIconModule,
    NbButtonModule,
    NbSidebarModule,
    NbDatepickerModule,
    NbCardModule,
    NgxEchartsModule,
    StoreModule.forRoot({ct: eventReducer}),
  ],
})
export class EventsModule { }
