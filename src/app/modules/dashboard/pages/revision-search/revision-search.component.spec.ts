import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionSearchComponent } from './revision-search.component';

describe('RevisionSearchComponent', () => {
  let component: RevisionSearchComponent;
  let fixture: ComponentFixture<RevisionSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RevisionSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevisionSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
