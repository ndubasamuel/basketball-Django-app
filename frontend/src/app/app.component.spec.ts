import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { my_appComponent } from './my_app.component';

describe('my_appComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        my_appComponent
      ],
    }).compileComponents();
  }));

  it('should create the my_app', () => {
    const fixture = TestBed.createComponent(my_appComponent);
    const my_app = fixture.componentInstance;
    expect(my_app).toBeTruthy();
  });

  it(`should have as title 'frontend'`, () => {
    const fixture = TestBed.createComponent(my_appComponent);
    const my_app = fixture.componentInstance;
    expect(my_app.title).toEqual('frontend');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(my_appComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('frontend my_app is running!');
  });
});
