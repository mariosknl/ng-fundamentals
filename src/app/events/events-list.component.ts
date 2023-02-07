import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../common/toastr.service';
import { EventService } from './shared/event.service';

declare let toastr: any;

@Component({
  template: `
    <div>
      <h1>Upcoming Angular Event</h1>
      <hr />
      <div class="row">
        <div *ngFor="let event of events" class="col-md-5">
          <event-thumbnail
            (click)="handleThumbnailEvent(event.name)"
            [event]="event"
          ></event-thumbnail>
        </div>
      </div>
    </div>
  `,
})
export class EventsListComponent implements OnInit {
  events: any[] = [];

  constructor(
    private eventService: EventService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.events = this.eventService.getEvents();
  }

  handleThumbnailEvent(eventName: string) {
    this.toastr.success(eventName);
  }
}
