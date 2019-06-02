import { Component, OnInit } from '@angular/core';
import { Enfant } from '../enfant';
import { EnfantService } from '../enfant.service';

@Component({
  selector: 'search-enfants',
  templateUrl: './search-enfants.component.html',
  styleUrls: ['./search-enfants.component.css']
})
export class SearchEnfantsComponent implements OnInit {

  prenom: string;
  enfants: Enfant[];

  constructor(private dataService: EnfantService) { }

  ngOnInit() {
    this.prenom = '';
  }

  private searchEnfants() {
    this.dataService.getEnfantsByPrenom(this.prenom)
      .subscribe(enfants => this.enfants = enfants);
  }

  onSubmit() {
    this.searchEnfants();
  }
}
