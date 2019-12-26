import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPostComponent } from './details-post.component';

describe('DetailsPostComponent', () => {
  let component: DetailsPostComponent;
  let fixture: ComponentFixture<DetailsPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
