import { Component, OnInit } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import {EventService} from '../../event.service';
import {Store} from '@ngrx/store';
import {IState} from './store/event.reducer';
import {add} from './store/event.actions';

@Component({
  selector: 'ngx-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
})
export class EventsComponent implements OnInit {

  constructor(private sidebarService: NbSidebarService,
              private eventService: EventService,
              private store: Store<IState>) { }

  ngOnInit(): void {
    this.eventService.connect().asObservable().subscribe(e =>  {
      this.store.dispatch(add({event: e}));
    });
  }

  toggle() {
    this.sidebarService.toggle(true, 'left');
  }

  send(year: number) {
    const request = {
      time: new Date().getTime(),
      query: {
        year: year,
      },
    };
    this.eventService.connect().next(request);
  }

}
