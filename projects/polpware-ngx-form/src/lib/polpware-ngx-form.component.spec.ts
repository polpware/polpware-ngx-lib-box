import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolpwareNgxFormComponent } from './polpware-ngx-form.component';

describe('PolpwareNgxFormComponent', () => {
  let component: PolpwareNgxFormComponent;
  let fixture: ComponentFixture<PolpwareNgxFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolpwareNgxFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolpwareNgxFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
