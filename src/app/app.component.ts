import { Component } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  iconName: string = 'artist';
  iconNames: string[] = ['artist', 'sleep'];
  currentIconIndex: number = 0;

  toggleIconName() {
    this.currentIconIndex = (this.currentIconIndex + 1) % this.iconNames.length;
    this.iconName = this.iconNames[this.currentIconIndex];
  }
}
