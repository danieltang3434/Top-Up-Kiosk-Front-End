import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageStartingComponent } from './page-starting.component';

describe('PageStartingComponent', () => {
  let component: PageStartingComponent;
  let fixture: ComponentFixture<PageStartingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageStartingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageStartingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
