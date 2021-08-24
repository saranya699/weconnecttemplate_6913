import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsavedscreenComponent } from './newsavedscreen.component';

describe('NewsavedscreenComponent', () => {
  let component: NewsavedscreenComponent;
  let fixture: ComponentFixture<NewsavedscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsavedscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsavedscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});