import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrl: './language-selector.component.scss'
})
export class LanguageSelectorComponent {

  selectedLanguage: any;

  constructor(private translate: TranslateService) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('selectedLanguage')) {
      this.selectedLanguage = localStorage.getItem('selectedLanguage');
    }
    else {
      this.selectedLanguage = 'en';
      localStorage.setItem('selectedLanguage', this.selectedLanguage);
    }
    this.translate.setDefaultLang(this.selectedLanguage);
  }

  changeLanguage(language: string) {
    this.selectedLanguage = language;
    this.translate.use(language);
    localStorage.setItem('selectedLanguage', this.selectedLanguage); // When the user select any language, save the localStorage 
  }
}
