export interface ClientFile {
    id: number;
    clientId: number;
    fileName: string;
    filePath: string;
    fileType: string;
    uploadedAt: Date;
  }
  
  export interface Client {
    id: number;
    name: string;
    surname: string;
    medicoLegalReportNumber: string;
    dateOfAssessment: string;
    dateOfReport: string;
    referredBy: string;
    myReference: string;
    yourReference: string;
    identityNumber: string;
    dateOfBirth: string;
    age: number | null;
    maritalStatus: string;
    gender: string;
    homeLanguage: string;
    dateOfInjury: string;
    ageAtTimeOfInjury: number | null;
    timeSinceInjury: string;
    residentialAddress: string;
    contactDetails: string;
    employmentPreAccident: string;
    employmentPresent: string;
    placeOfAssessment: string;
    //clientFiles: ClientFile[];  // This is the array of ClientFile objects
  }

  export interface Section {
    name: string;
    status: 'completed' | 'in-progress' | 'not-started';
    route: string;
  }