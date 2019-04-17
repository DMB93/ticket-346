import { Component, EventEmitter, HostBinding, Input, ViewChild, Output } from '@angular/core';
import { ScreenService } from './shared/services';
import { DxPopupComponent, DxFormComponent } from 'devextreme-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }

  @Input() visible = false;

  @Output() changeVisible = new EventEmitter<boolean>();

  @ViewChild(DxPopupComponent) popup: DxPopupComponent;
  @ViewChild(DxFormComponent) form: DxFormComponent;

  // save button deklaration
  saveButtonOptions = {
    text: 'Speichern',
    type: 'success',
    onClick: (e) => {
      this.clickSave.bind(this)(e);
    },
  };

  // abort button deklaration
  abortButtonOptions: any = {
    text: 'Abbrechen',
    type: 'danger',
    icon: 'close',
    onClick: () => this.clickAbort.bind(this)(),
  };

  buttonText = 'Popup öffnen';
  newFormData = {};
  sexOptions: any;

  constructor(private screen: ScreenService) { }

  openPopup($event) {
    this.visible = true;
  }

  onPopupInit(e) {
    e.component.registerKeyHandler('escape', (arg) => {
      arg.stopPropagation();
    });
  }

  clickSave() {
    // dummy
    this.close();
  }

  clickAbort() {
    // dummy
    this.close();
  }

  close() {
    this.visible = false;
    this.form.instance.resetValues();
  }
}
