import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineEditOneComponent } from './inline-edit-one.component';

describe('InlineEditOneComponent', () => {
  let component: InlineEditOneComponent;
  let fixture: ComponentFixture<InlineEditOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlineEditOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InlineEditOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
