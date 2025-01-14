import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ProductBoxComponent } from './product-box.component'

describe('ProductBoxComponent', () => {
  let component: ProductBoxComponent
  let fixture: ComponentFixture<ProductBoxComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductBoxComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ProductBoxComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
