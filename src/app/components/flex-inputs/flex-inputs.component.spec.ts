import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexInputsComponent } from './flex-inputs.component';

describe('FlexInputsComponent', () => {
  let component: FlexInputsComponent;
  let fixture: ComponentFixture<FlexInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlexInputsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
