import { Component } from '@angular/core';
import {ReleasesService} from "../../services/releases.service";

@Component({
  selector: 'app-releases-list',
  templateUrl: './releases-list.component.html',
  styleUrls: ['./releases-list.component.css']
})
export class ReleasesListComponent {
  public releasesList: any = [];
  constructor(private releasesService: ReleasesService) {
    releasesService.getFetcherSubject().subscribe(result => {
      this.releasesList = result.map((release: any) => {
        return {
          'version': release.version,
          'createdAt': new Date(release.createdAt).toDateString(),
          'releaseType': release.preRelease ? 'Prerelease' : 'Release'
        };
      });
    });
  }
}
