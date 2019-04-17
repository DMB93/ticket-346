import { Component, HostBinding } from '@angular/core';
import { ScreenService } from './shared/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent  {
  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }

  constructor(private screen: ScreenService) { }
}
