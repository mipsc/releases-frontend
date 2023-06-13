import { Component } from '@angular/core';
import {ReleasesService} from "./services/releases.service";
import {ReleaseType} from "./types/ReleaseType";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public selectedDate: Date;
  public releaseType: ReleaseType = "All";
  public loading: boolean = false;
  constructor(private releasesService: ReleasesService) {
    this.selectedDate = new Date();
    releasesService.getFetcherSubject().subscribe(result => this.loading = false);
  }
  public getReleases(): void {
    this.releasesService.fetchReleases(this.selectedDate,
      this.releaseType);
    this.loading = true;
  }
}
