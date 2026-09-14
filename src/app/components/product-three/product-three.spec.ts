import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductThree } from './product-three';

describe('ProductThree', () => {
  let component: ProductThree;
  let fixture: ComponentFixture<ProductThree>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductThree],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductThree);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
