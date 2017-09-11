import {NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import {AppComponent, ModalContentComponent, RedModalComponent} from './app.component'
import {ModalModule} from '@lernejaro/modal'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ModalModule.forRoot(RedModalComponent),
  ],
  declarations: [
    AppComponent,
    RedModalComponent,
    ModalContentComponent,
  ],
  bootstrap: [
    AppComponent,
  ],
  entryComponents: [
    RedModalComponent,
    ModalContentComponent,
  ],
})
export class AppModule {
}
