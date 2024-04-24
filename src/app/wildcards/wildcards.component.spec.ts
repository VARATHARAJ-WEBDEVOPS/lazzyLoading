import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildcardsComponent } from './wildcards.component';

describe('WildcardsComponent', () => {
  let component: WildcardsComponent;
  let fixture: ComponentFixture<WildcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WildcardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WildcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
