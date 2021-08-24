import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavetemplateComponent } from './savetemplate.component';

describe('SavetemplateComponent', () => {
  let component: SavetemplateComponent;
  let fixture: ComponentFixture<SavetemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavetemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavetemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});