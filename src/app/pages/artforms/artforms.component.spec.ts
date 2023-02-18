import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtformsComponent } from './artforms.component';

describe('ArtformsComponent', () => {
  let component: ArtformsComponent;
  let fixture: ComponentFixture<ArtformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtformsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
