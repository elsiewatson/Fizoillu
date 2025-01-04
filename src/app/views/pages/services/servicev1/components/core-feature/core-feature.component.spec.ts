import { ComponentFixture, TestBed } from '@angular/core/testing'

import { CoreFeatureComponent } from './core-feature.component'

describe('CoreFeatureComponent', () => {
  let component: CoreFeatureComponent
  let fixture: ComponentFixture<CoreFeatureComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoreFeatureComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(CoreFeatureComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
