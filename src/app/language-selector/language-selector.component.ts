import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss'
})
export class LanguageSelectorComponent {

  selectedLanguage: string = 'en';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.selectedLanguage);
  }

  changeLanguage(language: string) {
    this.selectedLanguage = language;
    this.translate.use(language);
  }
}
