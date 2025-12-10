import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type Lang = 'en' | 'fr' | 'es';

@Injectable({ providedIn: 'root' })
export class LanguageService {

  private currentLangSubject = new BehaviorSubject<Lang>('en');
  currentLang$ = this.currentLangSubject.asObservable();

  private translations: Record<Lang, Record<string, string>> = {
    en: {
      greeting: 'Hello, World!',
      farewell: 'Goodbye!'
    },
    fr: {
      greeting: 'Bonjour, le monde !',
      farewell: 'Au revoir !'
    },
    es: {
      greeting: '¡Hola, Mundo!',
      farewell: '¡Adiós!'
    }
  };

  switchLanguage(lang: Lang) {
    this.currentLangSubject.next(lang);
  }

  getTranslation(key: string): string {
    const lang = this.currentLangSubject.value;
    return this.translations[lang][key] || key;
  }

  getCurrentLang(): Lang {
    return this.currentLangSubject.value;
  }
}
