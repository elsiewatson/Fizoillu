import { toggleDocumentAttribute } from '@/utills/layout'
import { Injectable } from '@angular/core'

export const themeAttributeKey = 'data-bs-theme'
export const storageThemeKey = 'booking-theme'

@Injectable({
  providedIn: 'root',
})
export class ThemeModeService {
  theme: string = 'light'

  constructor() {
    this.theme = this.getSavedTheme()
  }

  private getSavedTheme(): 'light' {
    const foundTheme = localStorage.getItem(storageThemeKey)
    if (foundTheme === 'light') {
      toggleDocumentAttribute(themeAttributeKey, 'light')
      return 'light'
    } else {
      localStorage.setItem(storageThemeKey, 'light')
      toggleDocumentAttribute(themeAttributeKey, 'light')
      return 'light'
    }
  }

  updateTheme(newTheme: 'light') {
    const foundTheme = localStorage.getItem(storageThemeKey)
    if (foundTheme !== newTheme) {
      toggleDocumentAttribute(themeAttributeKey, newTheme)
      localStorage.setItem(storageThemeKey, newTheme)
      this.theme = newTheme
    }
  }
}
