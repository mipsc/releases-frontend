import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ReleaseType} from "../../types/ReleaseType";

@Component({
  selector: 'app-release-type',
  templateUrl: './release-type.component.html',
  styleUrls: ['./release-type.component.css']
})
export class ReleaseTypeComponent {
  @Input() selectedOption: ReleaseType = "All";
  @Output() selectedOptionChange: EventEmitter<ReleaseType>;

  constructor() {
    this.selectedOptionChange = new EventEmitter<ReleaseType>();
  }

  public handleSelectionChange() {
    this.selectedOptionChange.emit(this.selectedOption);
  }

}
