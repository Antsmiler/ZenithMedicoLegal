import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { ApiService } from '../api-service/api.service';
import { Client } from '../models/client.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.page.html',
  styleUrls: ['./client-details.page.scss'],
})
export class ClientDetailsPage implements OnInit {
  selectedFile: FormData | null = null;

  client: Client = {
    id: 0,
    name: '',
    surname: '',
    medicoLegalReportNumber: '',
    dateOfAssessment: '',
    dateOfReport: '',
    referredBy: '',
    myReference: '',
    yourReference: '',
    identityNumber: '',
    dateOfBirth: '',
    age: null,
    maritalStatus: '',
    gender: '',
    homeLanguage: '',
    dateOfInjury: '',
    ageAtTimeOfInjury: null,
    timeSinceInjury: '',
    residentialAddress: '',
    contactDetails: '',
    employmentPreAccident: '',
    employmentPresent: '',
    placeOfAssessment: '',
    //clientFiles: [],
  };

  constructor(
    private apiService: ApiService, 
    private route: ActivatedRoute,
    private navCtrl: NavController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    const clientId = this.route.snapshot.paramMap.get('id');
    if (clientId) {
      this.loadClientDetails(+clientId);
      console.log('clientid', clientId)
    }
  }

  loadClientDetails(clientId: number) {
    this.apiService.getClientById(clientId).subscribe((response) => {
      console.log('response', response)
      this.client = response;
    });
  }

  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Success',
      message: message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  saveChanges() {
    this.apiService.updateClient(this.client).subscribe(
      (response) => {
        console.log('Client updated:', response);
        this.navCtrl.navigateBack('/home');  // Navigate back after saving
      },
      (error) => {
        console.error('Error updating client:', error);
      }
    );
  }

  onSubmit() {
    if (this.client.id) {
      // If client exists, update client details
      this.apiService.updateClient(this.client).subscribe(
        (response) => {
          
          // If a file was selected, upload it
          if (this.selectedFile) {
            this.uploadFile(this.selectedFile, this.client.id);
          }

          // Navigate back to home or success page
          this.presentAlert('Client updated successfully!'); 
          this.navCtrl.navigateForward('/home');
        },
        (error) => {
          console.error('Error updating client', error);
        }
      );
    } else {
      // If new client, create client
      this.apiService.createClient(this.client).subscribe(
        (response) => {
          
          // Store the client ID from response (for file uploads)
          this.client.id = response.id;

          // If a file was selected, upload it
          if (this.selectedFile) {
            this.uploadFile(this.selectedFile, this.client.id);
          }

          this.presentAlert('Client created successfully!');
          // Navigate to the success or home page
          this.navCtrl.navigateForward('/home');
        },
        (error) => {
          console.error('Error saving client', error);
        }
      );
    }
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = new FormData();
      this.selectedFile.append('file', file, file.name);
    }
  }
  
  // File upload method
  uploadFile(formData: FormData, clientId: number) {
    this.apiService.uploadClientFile(formData, clientId).subscribe(
      (response) => {
        console.log('File uploaded successfully!', response);
      },
      (error) => {
        console.error('File upload failed', error);
      }
    );
  }
}
