import { Component, OnInit, Input } from '@angular/core';
import { EnfantService } from '../enfant.service';
import { Enfant } from '../enfant';

import { EnfantsListComponent } from '../enfants-list/enfants-list.component';

@Component({
  selector: 'enfant-details',
  templateUrl: './enfant-details.component.html',
  styleUrls: ['./enfant-details.component.css']
})
export class EnfantDetailsComponent implements OnInit {

  @Input() enfant: Enfant;

  constructor(private enfantService: EnfantService, private listComponent: EnfantsListComponent) { }

  ngOnInit() {
  }

  updateActive(isActive: boolean) {
    this.enfantService.updateEnfant(this.enfant.id,
      { nom: this.enfant.nom, prenom: this.enfant.prenom, active: isActive })
      .subscribe(
        data => {
          console.log(data);
          this.enfant = data as Enfant;
        },
        error => console.log(error));
  }

  deleteEnfant() {
    this.enfantService.deleteEnfant(this.enfant.id)
      .subscribe(
        data => {
          console.log(data);
          this.listComponent.reloadData();
        },
        error => console.log(error));
  }
}
