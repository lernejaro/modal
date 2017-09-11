import {Component, TemplateRef, ViewChild} from '@angular/core'
import {ModalService} from '@lernejaro/modal'

@Component({
  template: `
    <h1>Red</h1>
    <ng-content></ng-content>
  `,
  styles: [`
    :host {
      z-index: 1000;
      position: fixed;
      background-color: red;
    }
  `],
})
export class RedModalComponent {
}

@Component({
  template: `Some sample content`,
})
export class ModalContentComponent {
}

@Component({
  selector: 'demo-app',
  template: `
    <button (click)="openFromComponent()">Open from component</button>
    <button (click)="openFromTemplate()">Open from template</button>

    <ng-template #tpl style="z-index: 1000">
      Some sample content here too
    </ng-template>
  `,
})
export class AppComponent {

  @ViewChild('tpl') public tpl: TemplateRef<void>

  constructor(private modal: ModalService) {
  }

  public openFromComponent() {
    this.modal.open(ModalContentComponent)
  }

  public openFromTemplate() {
    this.modal.open(this.tpl)
  }

}
