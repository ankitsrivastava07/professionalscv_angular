import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqInterceptorComponent } from './req-interceptor.component';

describe('ReqInterceptorComponent', () => {
  let component: ReqInterceptorComponent;
  let fixture: ComponentFixture<ReqInterceptorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReqInterceptorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReqInterceptorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
