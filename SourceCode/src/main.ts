import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

export function showLoader(){
  document.getElementById("_ngcontent-c0").style.opacity = "0.5";
  document.getElementById("loader").style.display = "block";
}

export function hideLoader(){
  document.getElementById("loader").style.display = "none";
}

export function showAlert(){
  document.getElementById("popup_container").style.display = "block";
}

export function hideAlert(){
  document.getElementById("popup_container").style.display = "none";
}
