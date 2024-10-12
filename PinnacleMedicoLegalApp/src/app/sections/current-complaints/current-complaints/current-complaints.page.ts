import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-current-complaints',
  templateUrl: './current-complaints.page.html',
  styleUrls: ['./current-complaints.page.scss'],
})
export class CurrentComplaintsPage implements OnInit {

  client: Client = {} as Client;

  currentcomplaints = {

    clientPhysicalSymptom: [{ frequencyAndIntensity: '', location: '', triggers: '', painRelief: '', other: '' }],

  }

  constructor() { }

  ngOnInit() {
  }

  // Client Injury Methods
  addSymptom() {
    this.currentcomplaints.clientPhysicalSymptom.push({ frequencyAndIntensity: '', location: '', triggers: '', painRelief: '', other: '' });
  }

  removeSymptom(index: number) {
    this.currentcomplaints.clientPhysicalSymptom.splice(index, 1);
  }

}
