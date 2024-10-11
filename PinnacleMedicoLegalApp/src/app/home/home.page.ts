import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../api-service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  clients: any[] = [];

  constructor(private apiService: ApiService, private navCtrl: NavController) {}

  ngOnInit() {
    this.loadClients();
  }

  loadClients() {
    this.apiService.getClients().subscribe(
      (response: any[]) => {
        console.log(response)
        this.clients = response;
      },
      (error) => {
        console.error('Error fetching clients', error);
      }
    );
  }

  viewClient(clientId: number) {
    this.navCtrl.navigateForward(`/client-hub/${clientId}`);
  }

  // Navigate to the client details form (for editing)
  editClient(clientId: number) {
    this.navCtrl.navigateForward(`/client-details/${clientId}/edit`);
  }

  removeClient(clientId: number) {
    this.apiService.deleteClient(clientId).subscribe(
      (response) => {
        console.log('Client removed successfully');
        this.loadClients(); // Reload the client list after deletion
      },
      (error) => {
        console.error('Error deleting client', error);
      }
    );
  }
}
