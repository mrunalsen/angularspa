import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IconstoreModule, IconstoreRegistry, iconstoreIconsArtist, iconstoreIconsBirthday, iconstoreIconsChef, iconstoreIconsSleep, iconstoreIconsSpace } from 'angulariconstore';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IconstoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private iconStoreRegistry: IconstoreRegistry) {
    iconStoreRegistry.registerIcons([iconstoreIconsArtist, iconstoreIconsBirthday, iconstoreIconsChef, iconstoreIconsSleep, iconstoreIconsSpace]);
  }
}
