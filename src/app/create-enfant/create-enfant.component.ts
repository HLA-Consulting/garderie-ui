import { Component, OnInit } from '@angular/core';

import { Enfant } from '../enfant';
import { EnfantService } from '../enfant.service';

@Component({
  selector: 'create-enfant',
  templateUrl: './create-enfant.component.html',
  styleUrls: ['./create-enfant.component.css']
})
export class CreateEnfantComponent implements OnInit {

  enfant: Enfant = new Enfant();
  submitted = false;

  constructor(private enfantService: EnfantService) { }

  ngOnInit() {
  }

  newEnfant(): void {
    this.submitted = false;
    this.enfant = new Enfant();
  }

  save() {
    this.enfantService.createEnfant(this.enfant)
      .subscribe(data => console.log(data), error => console.log(error));
    this.enfant = new Enfant();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
