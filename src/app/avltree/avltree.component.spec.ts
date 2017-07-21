import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AVLTreeComponent } from './avltree.component';

describe('AVLTreeComponent', () => {
  let component: AVLTreeComponent;
  let fixture: ComponentFixture<AVLTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AVLTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AVLTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
