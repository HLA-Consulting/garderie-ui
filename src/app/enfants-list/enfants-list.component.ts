import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { EnfantService } from '../enfant.service';
import { Enfant } from '../enfant';

@Component({
  selector: 'enfants-list',
  templateUrl: './enfants-list.component.html',
  styleUrls: ['./enfants-list.component.css']
})
export class EnfantsListComponent implements OnInit {

  enfants: Observable<Enfant[]>;

  constructor(private enfantService: EnfantService) { }

  ngOnInit() {
    this.reloadData();
  }

  deleteEnfants() {
    this.enfantService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }

  reloadData() {
    this.enfants = this.enfantService.getEnfantsList();
  }
}
