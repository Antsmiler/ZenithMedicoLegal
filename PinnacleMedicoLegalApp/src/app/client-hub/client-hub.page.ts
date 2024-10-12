import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../api-service/api.service';
import { Client, Section } from '../models/client.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-hub',
  templateUrl: './client-hub.page.html',
  styleUrls: ['./client-hub.page.scss'],
})
export class ClientHubPage implements OnInit {
  client: Client = {} as Client;
  
  sections: Section[] = [
    { name: 'Section A: Work Ability', status: 'not-started' , route: ''},
    { name: 'Section B: Life Amenities', status: 'not-started',route:'' },
    { name: 'Section C: Intervention, Therapy, and Recommendations', status: 'not-started' ,route:''},
    { name: 'Section D: Medical Background', status: 'not-started' ,route:'/medical-background'},
    { name: 'Section E: Current Complaints', status: 'not-started' ,route:'/current-complaints'},
    { name: 'Section F: Activity Profile', status: 'not-started',route:'' },
    { name: 'Section G: Occupational Performance', status: 'not-started',route:'' },
    { name: 'Section H: Outcome Summary and Conclusions', status: 'not-started' ,route:''},
    { name: 'Section I: Appendix', status: 'not-started' ,route:''},
    { name: 'Section J: Test Results', status: 'not-started' ,route:''},
  ];

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    const clientId = this.route.snapshot.paramMap.get('id');
    if (clientId) {
      this.loadClientDetails(+clientId);
    }
  }

  loadClientDetails(clientId: number) {
    this.apiService.getClientById(clientId).subscribe(
      (response) => {
        this.client = response;
  
        // Dynamically update section statuses based on client data
        // if (this.client.complaintsCompleted) {
        //   this.sections.find(section => section.name === 'Section E: Current Complaints').status = 'completed';
        // }
        // Update statuses for other sections as needed
      },
      (error) => {
        console.error('Error fetching client details', error);
      }
    );
  }

  navigateToSection(section: Section) {
    this.navCtrl.navigateForward(section.route);
  }

  manageDocuments() {
    this.navCtrl.navigateForward(`/document-management/${this.client.id}`);
  }

  
}
