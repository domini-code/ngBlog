import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerAppComponent } from './container-app.component';

describe('ContainerAppComponent', () => {
  let component: ContainerAppComponent;
  let fixture: ComponentFixture<ContainerAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
