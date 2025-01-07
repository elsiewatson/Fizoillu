import { TestBed } from '@angular/core/testing'
import { Router } from '@angular/router'
import { SlashGuard } from './slash.guard'
import { RouterTestingModule } from '@angular/router/testing'

describe('SlashGuard', () => {
  let guard: SlashGuard
  let router: Router

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [SlashGuard],
    })

    guard = TestBed.inject(SlashGuard)
    router = TestBed.inject(Router)

    spyOn(router, 'navigateByUrl') // Spy on the router's navigateByUrl method
  })

  it('should be created', () => {
    expect(guard).toBeTruthy()
  })

  it('should allow navigation if the URL is normalized', () => {
    const routeMock: any = {
      url: [{ path: 'home' }],
    }

    const result = guard.canActivate(routeMock)
    expect(result).toBeTrue() // Should return true for normalized URLs
    expect(router.navigateByUrl).not.toHaveBeenCalled() // Should not navigate
  })

  it('should normalize URLs with multiple slashes', () => {
    const routeMock: any = {
      url: [{ path: '///home///' }],
    }

    const result = guard.canActivate(routeMock)
    expect(result).toBeFalse() // Should block the navigation
    expect(router.navigateByUrl).toHaveBeenCalledWith('/home') // Should navigate to normalized URL
  })
})
