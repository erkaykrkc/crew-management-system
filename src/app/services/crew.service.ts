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

  // when the user add, update and delete cember member then show messages 
  showMessage(key: string): void {
    this.translate.get(key).subscribe((translatedMessage: string) => {
      this.snackBar.open(translatedMessage, 'Close', {
        duration: 1500,
        horizontalPosition: 'right',
        verticalPosition: 'bottom'
      });
    });
  }

  // Add crew member service
  addCrew(newCrew: Crew): void {
    this.crewList.push(newCrew);

    this.showMessage('messages.addSuccess');
  }

  // Update crew member service
  editCrew(data: Crew, crewIndex: number): void {
    this.crewList = this.crewList.map((crew, index) =>
      index === crewIndex ? data : crew
    );

    // After updated crew, show updated message according to selected language
    this.showMessage('messages.editSuccess');
  }

  // Delete crew member service
  deleteCrew(index: number): void {
    this.crewList = this.crewList.filter((crewMember, currentIndex) => currentIndex !== index);

    // After deleted crew, show deleted message according to selected language
    this.showMessage('messages.deleteSuccess');
  }

}
