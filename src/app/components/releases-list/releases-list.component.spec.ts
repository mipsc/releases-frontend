import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleasesListComponent } from './releases-list.component';

describe('ReleasesListComponent', () => {
  let component: ReleasesListComponent;
  let fixture: ComponentFixture<ReleasesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReleasesListComponent]
    });
    fixture = TestBed.createComponent(ReleasesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
