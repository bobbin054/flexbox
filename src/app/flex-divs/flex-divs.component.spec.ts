import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexDivsComponent } from './flex-divs.component';

describe('FlexDivsComponent', () => {
  let component: FlexDivsComponent;
  let fixture: ComponentFixture<FlexDivsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlexDivsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexDivsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
