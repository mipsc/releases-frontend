import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseTypeComponent } from './release-type.component';

describe('ReleaseTypeComponent', () => {
  let component: ReleaseTypeComponent;
  let fixture: ComponentFixture<ReleaseTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReleaseTypeComponent]
    });
    fixture = TestBed.createComponent(ReleaseTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
