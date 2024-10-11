import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApiService } from 'src/app/api-service/api.service';
import { Client } from 'src/app/models/client.model';

@Component({
  selector: 'app-medical-background',
  templateUrl: './medical-background.page.html',
  styleUrls: ['./medical-background.page.scss'],
})
export class MedicalBackgroundPage implements OnInit {

  client: Client = {} as Client;

  medicalBackground = {
    //16.2
    isHealthyBeforeAccident: false,
    healthyBeforeAccidentDetails: '',
    isOtherAccidentsDenied: false,
    otherAccidentsDeniedDetails: '',
    isMedicalHistoryOther: false,
    medicalHistoryOther:'',

    wasInVehicleAccident: false, // Was involved in a vehicle accident (16.3.1)
    vehicleAccidentDetails: '',
    wasInPedestrianAccident: false, // Was involved in a pedestrian vehicle accident (16.3.2)
    pedestrianAccidentDetails: '',
    hadBriefLossOfConsciousness: false, // Lost consciousness briefly (16.3.3)
    briefConsciousnessDetails: '',
    lostConsciousnessInHospital: false, // Lost consciousness and woke up in the hospital (16.3.4)
    hospitalConsciousnessDetails: '',
    
    lostConsciousnessInAmbulance: false, // Lost consciousness and woke up in the ambulance (16.3.5)
    lostConsciousnessDuringAccident: false, // 16.3.5(a)
    duringAccidentDetails: '',
    cousinInjured: false, // Cousin was also injured in the accident (16.3.5(b))
    cousinInjuryDetails: '',
    nobodyElseInjured: false, // Nobody else was injured (16.3.5(c))
    nobodyElseInjuryDetails: '',

    isDateAndDetailsOther: false,
    dateAndDetailsOther:'',

    clientInjuries: [{ detail: '' }],
    
    raf1Dr:'',
    raf1Injuries: [{detail: '' }],
       
    raf4Dr:'',
    isRaf4Diagnosis: false,
    raf4DiagnosisDetails: '',
    isRaf4Notes: false,
    raf4NotesDetails: '',
    isRaf4MMI: false,
    raf4MMIDetails: '',
    isRaf4WPI: false,
    raf4WPIDetails: '',

    hospitalName:'',
    hospitalInjuries: [{ detail: '' }],

    orthopaedicDr:'',
    orthopaedicDiagnosis: [{ detail: '' }],
    isOrthopaedicDiagnosisOther: false,
    orthopaedicDiagnosisOther:'',

    isTakenToHospital: false,
    takenToHospitalDetails: '',
    isAdmittedForDays: false,
    admittedForDaysDetails: '',
    isTransferredFor3to4Days: false,
    transferredFor3to4DaysDetails: '',
    isTransferredToThemba: false,
    transferredToThembaDetails: '',
    isDischargedWithEquipment: false,
    neckCollarDuration: '',
    dischargedWithEquipmentDetails: '',
    isDischargedWithCrutches: false,
    dischargedWithCrutchesDetails: '',
    isCastRemoved: false,
    castDuration: '',
    castRemovedDetails: '',
    isFollowUpAppointments: false,
    followUpLocation: '',
    travelCost: '',
    followUpDetails: '',

    raf1InterventionDr:'',
    raf1Interventions: [{detail: '' }],
    hospitalNameRecords:'',
    hospitalInterventions: [{ detail: '' }],

    // Section 16.7 - Disruption during recovery
    isSelfCareAssistance: false,
    selfCareAssistanceDetails: '',
    isLivingArrangements: false,
    livingArrangementsDetails: '',
    isUnableToWork: false,
    unableToWorkDetails: '',
    isReturnToCapacity: false,
    returnToCapacityDetails: '',
    isImmediatelyReturn: false,
    immediatelyReturn: '',
    isNoDifficulties: false,
    noDifficulties: '',
    isLightDuty: false,
    lightDutyDetails: '',
    isWorkDifficulties: false,
    workDifficultiesDetails: '',

    // Section 16.8 - Current health, medication, and rehabilitation therapies
    isFollowUpCare: false,
    followUpCareDetails: '',
    isPainMedication: false,
    painMedicationDetails: '',
    isPrescribedMedication: false,
    prescribedMedicationDetails: '',
    isBenefitOfPhysiotherapy:false,
    benefitOfPhysiotherapyDetails:'',
    isPhysiotherapy: false,
    physiotherapyDetails: '',
    isOtherRehabilitation: false,
    otherRehabilitationDetails: '',
    isObtainsMedication: false,
    obtainsMedicationDetails: '',
    isHealthyState: false,
    presentMedicalConditions: '',
    isPresentingConditions: false,
    presentingConditionsDetails: ''
  };

  documentation = [
    { autho1r: 'Attorney', speciality: '', document: '', date: '' },
    { author: 'Orthopedic Surgeon', speciality: '', document: '', date: '' },
    { author: 'Radiologist', speciality: '', document: '', date: '' },
    { author: 'General Practitioner', speciality: '', document: '', date: '' },
    { author: 'Hospital', speciality: '', document: '', date: '' }
  ];

   // Client Injury Methods
   addClientInjury() {
    this.medicalBackground.clientInjuries.push({ detail: '' });
  }

  removeClientInjury(index: number) {
    this.medicalBackground.clientInjuries.splice(index, 1);
  }

  // RAF1 Injury Methods
  addRaf1Injury() {
    this.medicalBackground.raf1Injuries.push({ detail: '' });
  }

  removeRaf1Injury(index: number) {
    this.medicalBackground.raf1Injuries.splice(index, 1);
  }

  // Hospital Injury Methods
  addHospitalInjury() {
    this.medicalBackground.hospitalInjuries.push({ detail: '' });
  }

  removeHospitalInjury(index: number) {
    this.medicalBackground.hospitalInjuries.splice(index, 1);
  }

  // Hospital Injury Methods
  addHospitalIntervention() {
    this.medicalBackground.hospitalInterventions.push({ detail: '' });
  }

  removeHospitalIntervention(index: number) {
    this.medicalBackground.hospitalInterventions.splice(index, 1);
  }


  // Hospital Injury Methods
  addRaf1Intervention() {
    this.medicalBackground.raf1Interventions.push({ detail: '' });
  }

  removeRaf1Intervention(index: number) {
    this.medicalBackground.raf1Interventions.splice(index, 1);
  }

  // Hospital Injury Methods
  addDiagnosis() {
    this.medicalBackground.orthopaedicDiagnosis.push({ detail: '' });
  }

  removeDiagnosis(index: number) {
    this.medicalBackground.orthopaedicDiagnosis.splice(index, 1);
  }
  
  constructor(private apiService: ApiService, 
    private route: ActivatedRoute,
    private navCtrl: NavController) {}


    ngOnInit() {
      this.loadClientDetails(1);
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

   onSubmit() {
    //   this.apiService.createMedicalBackground(this.medicalBackground).subscribe(
    //     (response) => {
    //       console.log('Medical Background saved successfully!', response);
    //       this.navCtrl.navigateForward('/client-hub');
    //     },
    //     (error) => {
    //       console.error('Error saving medical background', error);
    //     }
    //   );
     }
}
