import { Component, Inject } from '@angular/core';
import {
  GlOnResize,
  GoldenLayoutComponentState,
  GoldenLayoutContainer,
  GlOnHide,
  GlOnShow,
  GlOnTab
} from '../../golden_layout';
import { selector } from 'rxjs/operator/publish';
import * as GoldenLayout from 'golden-layout';

@Component({
  selector: 'app-systems-list',
  template: `
    <div>
      <h1>{{state?.label}}</h1>
      <input type="text" [value]="state?.value || ''" (input)="onInput($event)">
    </div>
  `,
})
export class SystemsListComponent
  implements GlOnResize, GlOnHide, GlOnShow, GlOnTab {
  constructor(
    @Inject(GoldenLayoutComponentState) private state: any,
    @Inject(GoldenLayoutContainer) private container: GoldenLayout.Container
  ) {}

  public onInput(e: Event): void {
    this.container.extendState({
      value: (<HTMLInputElement>e.target).value
    });
    console.log('state saved.');
  }
  public glOnResize(): void {
    console.log('Resizing!');
  }

  public glOnShow(): void {
    console.log('Showing!');
  }

  public glOnHide(): void {
    console.log('Hiding!');
  }

  public glOnTab(): void {
    console.log('Tab shown!');
  }
}
