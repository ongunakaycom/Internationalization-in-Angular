import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public languageService = inject(LanguageService);

  get greeting() {
    return this.languageService.getTranslation('greeting');
  }

  get farewell() {
    return this.languageService.getTranslation('farewell');
  }

  setLanguage(lang: 'en' | 'fr' | 'es') {
    this.languageService.switchLanguage(lang);
  }
}
