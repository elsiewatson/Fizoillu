import { Component } from '@angular/core'
import { RouterModule } from '@angular/router'
import { BreadcrumbComponent } from "../../../../../../components/breadcrumb/breadcrumb.component";

@Component({
  selector: 'servicev2-hero',
  standalone: true,
  imports: [RouterModule, BreadcrumbComponent],
  templateUrl: './hero.component.html',
  styles: ``,
})
export class HeroComponent {}
