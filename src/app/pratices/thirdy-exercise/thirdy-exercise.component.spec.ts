import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdyExerciseComponent } from './thirdy-exercise.component';

describe('ThirdyExerciseComponent', () => {
  let component: ThirdyExerciseComponent;
  let fixture: ComponentFixture<ThirdyExerciseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThirdyExerciseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ThirdyExerciseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
