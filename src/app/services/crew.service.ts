import { Injectable } from '@angular/core';
import { Crew } from '../models/crew.model';
import { CREW_DATA } from './example-crew-data'; // imported example of crew members
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';


@Injectable({
  providedIn: 'root'
})
export class CrewService {

  private crewList: Crew[] = CREW_DATA;

  constructor(private snackBar: MatSnackBar, private translate: TranslateService) { }

  // Get crew member lists
  getCrewList(): Crew[] {
    return this.crewList;
  }

  // Update crew service
  editCrew(data: Crew, crewIndex: number): void {
    this.crewList = this.crewList.map((crew, index) =>
      index === crewIndex ? data : crew
    );

    // After updated crew, show updated message according to selected language
    this.translate.get('messages.editSuccess').subscribe((translatedMessage: string) => {
      this.snackBar.open(translatedMessage, 'Close', {
        duration: 1500,
        horizontalPosition: 'right',
        verticalPosition: 'bottom'
      });
    });
  }

  // Delete crew service
  deleteCrew(index: number): void {
    this.crewList = this.crewList.filter((crewMember, currentIndex) => currentIndex !== index);

    // After deleted crew, show deleted message according to selected language
    this.translate.get('messages.deleteSuccess').subscribe((translatedMessage: string) => {
      this.snackBar.open(translatedMessage, 'Close', {
        duration: 1500,
        horizontalPosition: 'right',
        verticalPosition: 'bottom'
      });
    });
  }
}
