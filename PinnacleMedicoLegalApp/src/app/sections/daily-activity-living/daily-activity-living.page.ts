import { Component, OnInit } from '@angular/core';

interface Partner {
  name: string;
  age: number;
  employment: string;
}

interface Parent {
  name: string;
  age: number;
  relationship: string;
}

interface Child {
  name: string;
  age: number;
  school: string;
}

interface Sibling {
  name: string;
  age: number;
  relationship: string;
}

interface Resident {
  name: string;
  age: number;
  relation: string;
}

@Component({
  selector: 'app-daily-activity-living',
  templateUrl: './daily-activity-living.page.html',
  styleUrls: ['./daily-activity-living.page.scss'],
})
export class DailyActivityLivingPage {

  client = {
    name: 'Client Name'  // Placeholder for client's name
  };

  partners: Partner[] = [];
  parents: Parent[] = [];
  children: Child[] = [];
  siblings: Sibling[] = [];

  financialDependents = '';
  additionalCareResponsibilities = '';
  personalSituationChanges = '';

  //residential
  residential = {
    propertyOwnership: '',
    propertyOwner: '',
    propertyDescription: '',
    propertyBedrooms: null,
    stepsStairs: '',
    residents: [] as Resident[],
    waterSupply: '',
    waterGeyser: '',
    electricity: '',
    toilet: '',
    bathingFacilities: '',
    yardDescription: ''
  };

  //communityAccessibility
  communityAccessibility = {
    transport: '',
    driversLicense: '',
    vehicleOwned: '',
    problemsExperienced: '',
    taxiPickup: { method: '', distanceTime: '', cost: '' },
    shopMall: { method: '', distanceTime: '', cost: '' },
    clinic: { method: '', distanceTime: '', cost: '' },
    hospital: { method: '', distanceTime: '', cost: '' },
    workSchool: { method: '', distanceTime: '', cost: '' },
    residentialSituationAccident: '',
    futureResidentialPlans: ''
  };

  //activities
  activities = {
    transfersPre: {
      independent: false,
      independentDetails: '',
      difficulty: false,
      difficultyDetails: '',
      pain: false,
      painDetails: ''
    },
    transfersCurrent: {
      independent: false,
      independentDetails: '',
      difficulty: false,
      difficultyDetails: '',
      pain: false,
      painDetails: ''
    },
    eatingPre: {
      independent: false,
      independentDetails: '',
      difficulty: false,
      difficultyDetails: ''
    },
    eatingCurrent: {
      independent: false,
      independentDetails: '',
      difficulty: false,
      difficultyDetails: ''
    },
    toiletingPre: {
      independent: false,
      independentDetails: ''
    },
    toiletingCurrent: {
      independent: false,
      independentDetails: ''
    },
    washingPre: {
      independent: false,
      independentDetails: ''
    },
    washingCurrent: {
      independent: false,
      independentDetails: ''
    },
    dressingPre: {
      independent: false,
      independentDetails: ''
    },
    dressingCurrent: {
      independent: false,
      independentDetails: ''
    },
    groomingPre: {
      independent: false,
      independentDetails: ''
    },
    groomingCurrent: {
      independent: false,
      independentDetails: ''
    },
    sexualPre: {
      independent: false,
      independentDetails: ''
    },
    sexualCurrent: {
      independent: false,
      independentDetails: ''
    }
  };

  //instrumental
  instrumental = {
    carePre: {
      petsIndependent: false,
      petsIndependentDetails: '',
      childrenIndependent: false,
      childrenIndependentDetails: '',
      elderlyIndependent: false,
      elderlyIndependentDetails: ''
    },
    careCurrent: {
      petsIndependent: false,
      petsIndependentDetails: '',
      childrenIndependent: false,
      childrenIndependentDetails: '',
      elderlyIndependent: false,
      elderlyIndependentDetails: ''
    },
    transportPre: {
      publicTransport: false,
      publicTransportDetails: '',
      walking: false,
      walkingDetails: ''
    },
    transportCurrent: {
      publicTransport: false,
      publicTransportDetails: '',
      walking: false,
      walkingDetails: ''
    },
    financialPre: {
      independent: false,
      independentDetails: ''
    },
    financialCurrent: {
      independent: false,
      independentDetails: ''
    },
    cookingPre: {
      independent: false,
      independentDetails: ''
    },
    cookingCurrent: {
      independent: false,
      independentDetails: ''
    },
    choresPre: {
      independent: false,
      independentDetails: ''
    },
    choresCurrent: {
      independent: false,
      independentDetails: ''
    },
    maintenancePre: {
      independent: false,
      independentDetails: ''
    },
    maintenanceCurrent: {
      independent: false,
      independentDetails: ''
    },
    shoppingPre: {
      independent: false,
      independentDetails: ''
    },
    shoppingCurrent: {
      independent: false,
      independentDetails: ''
    }
  };

  //performancePatterns
  performancePatterns = {
    habitsPre: {
      noAlcohol: false,
      noAlcoholDetails: '',
      occasionalAlcohol: false,
      occasionalAlcoholDetails: '',
      frequentAlcohol: false,
      frequentAlcoholDetails: '',
      noDrugs: false,
      noDrugsDetails: '',
      occasionalDrugs: false,
      occasionalDrugsDetails: '',
      smoking: false,
      smokingDetails: ''
    },
    habitsCurrent: {
      alcohol: false,
      alcoholDetails: '',
      drugs: false,
      drugsDetails: '',
      smoking: false,
      smokingDetails: ''
    },
    personalManagementPre: {
      managedIndependently: false,
      details: ''
    },
    personalManagementCurrent: {
      managesAsBefore: false,
      managesAsBeforeDetails: '',
      difficulties: false,
      difficultiesDetails: '',
      futureChanges: false,
      futureChangesDetails: ''
    },
    rolesPre: {
      functionedAdequately: false,
      functionedAdequatelyDetails: '',
      carer: false,
      carerDetails: ''
    },
    rolesCurrent: {
      functionAsBefore: false,
      functionAsBeforeDetails: '',
      roleChanges: false,
      roleChangesDetails: ''
    },
    relationshipsPre: {
      stableHealthy: ''
    },
    relationshipsCurrent: {
      unchanged: false,
      unchangedDetails: '',
      concerns: false,
      concernsDetails: '',
      changes: false,
      changesDetails: ''
    }
  };

  //leisureRecreation
  leisureRecreation = {
    recreationPre: '',
    recreationCurrent: '',
    gardeningPre: {
      responsible: false,
      responsibleDetails: '',
      notResponsible: false,
      notResponsibleDetails: '',
      managedIndependently: false,
      managedIndependentlyDetails: '',
      assistance: false,
      assistanceDetails: ''
    },
    gardeningCurrent: {
      notResponsible: false,
      notResponsibleDetails: '',
      managesIndependently: false,
      managesIndependentlyDetails: '',
      toleratesPain: false,
      toleratesPainDetails: '',
      adjustedMethods: false,
      adjustedMethodsDetails: '',
      dependsAssistance: false,
      dependsAssistanceDetails: '',
      specifySymptoms: false,
      specifySymptomsDetails: ''
    }
  };

  constructor() { }

  addPartner() {
    const newPartner: Partner = { name: '', age: 0, employment: '' };
    this.partners.push(newPartner);
  }

  removePartner(partner: Partner) {
    const index = this.partners.indexOf(partner);
    if (index > -1) {
      this.partners.splice(index, 1);
    }
  }

  // Parent logic
  addParent() {
    const newParent: Parent = { name: '', age: 0, relationship: '' };
    this.parents.push(newParent);
  }

  removeParent(parent: Parent) {
    const index = this.parents.indexOf(parent);
    if (index > -1) {
      this.parents.splice(index, 1);
    }
  }

  // Child logic
  addChild() {
    const newChild: Child = { name: '', age: 0, school: '' };
    this.children.push(newChild);
  }

  removeChild(child: Child) {
    const index = this.children.indexOf(child);
    if (index > -1) {
      this.children.splice(index, 1);
    }
  }

  // Sibling logic
  addSibling() {
    const newSibling: Sibling = { name: '', age: 0, relationship: '' };
    this.siblings.push(newSibling);
  }

  removeSibling(sibling: Sibling) {
    const index = this.siblings.indexOf(sibling);
    if (index > -1) {
      this.siblings.splice(index, 1);
    }
  }


  addResident() {
    const newResident: Resident = { name: '', age: 0, relation: '' };
    this.residential.residents.push(newResident);
  }

  // Remove resident logic
  removeResident(index: number) {
    this.residential.residents.splice(index, 1);
  }


  // Save or manage data changes (if needed)
  saveFormData() {
    // Logic to handle saving or manipulating form data
    console.log("Form data saved: ", this.partners, this.parents, this.children, this.siblings, this.financialDependents, this.additionalCareResponsibilities, this.personalSituationChanges);
  }
}
