import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../environment/environment";
import {Subject} from "rxjs";
import {ReleaseType} from "../types/ReleaseType";

@Injectable({
  providedIn: 'root'
})
export class ReleasesService {
  constructor(private httpClient: HttpClient) { }
  private fetcherSubject: Subject<any> = new Subject<any>();

  public getFetcherSubject(): Subject<any> {
    return this.fetcherSubject;
  }
  public fetchReleases(
    createdBefore: Date,
    releaseType: ReleaseType
  ): any {
    this.httpClient.get(environment.releasesApiUrl, {
      params: {
        createdBefore: new Date(createdBefore || '').toISOString(),
        prerelease: releaseType == "All" ? '' : releaseType == "Prerelease",
      }
    }).subscribe((result) => {
      this.fetcherSubject.next(result);
    })
  }
}
