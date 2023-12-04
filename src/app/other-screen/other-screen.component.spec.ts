import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherScreenComponent } from './other-screen.component';

describe('OtherScreenComponent', () => {
  let component: OtherScreenComponent;
  let fixture: ComponentFixture<OtherScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtherScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
