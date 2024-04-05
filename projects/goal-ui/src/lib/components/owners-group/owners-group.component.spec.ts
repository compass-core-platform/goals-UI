import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnersGroupComponent } from './owners-group.component';

describe('OwnersGroupComponent', () => {
  let component: OwnersGroupComponent;
  let fixture: ComponentFixture<OwnersGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwnersGroupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OwnersGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
