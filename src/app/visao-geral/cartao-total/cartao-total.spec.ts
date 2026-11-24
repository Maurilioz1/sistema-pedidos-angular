import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartaoTotal } from './cartao-total';

describe('CartaoTotal', () => {
  let component: CartaoTotal;
  let fixture: ComponentFixture<CartaoTotal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CartaoTotal],
    }).compileComponents();

    fixture = TestBed.createComponent(CartaoTotal);
    fixture.componentRef.setInput('area', 'Clientes');
    fixture.componentRef.setInput('quantidade', 3);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
