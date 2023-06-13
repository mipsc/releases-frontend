import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent {
  @Input() dateValue: Date;
  @Output() dateValueChange: EventEmitter<Date>;

  constructor() {
    this.dateValue = new Date();
    this.dateValueChange = new EventEmitter<Date>();
  }

  public handleChange(event: any): void {
    this.dateValueChange.emit(event.target.value);
  }
}
