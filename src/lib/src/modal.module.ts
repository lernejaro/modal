import {InjectionToken, ModuleWithProviders, NgModule} from '@angular/core'
import {BlackoutModule, BlackoutService} from '@lernejaro/blackout'
import {ModalService} from './modal.service'

export const LRN_MODAL = new InjectionToken<any>('lrn.modal')

@NgModule({
  imports: [
    BlackoutModule,
  ],
})
export class ModalModule {
  public static forRoot(modalComponent: any): ModuleWithProviders {
    return {
      ngModule: ModalModule,
      providers: [
        ModalService,
        BlackoutService,
        {
          provide: LRN_MODAL,
          useValue: modalComponent,
        },
      ],
    }
  }
}
