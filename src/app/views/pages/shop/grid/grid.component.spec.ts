import { ComponentFixture, TestBed } from '@angular/core/testing'

import { ShopGridComponent } from './grid.component'

describe('GridComponent', () => {
  let component: ShopGridComponent
  let fixture: ComponentFixture<ShopGridComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShopGridComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(ShopGridComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
