namespace PinnacleMedicoLegalBackend.Models
{
    public class MedicalBackground
{
    public int Id { get; set; }
    public int ClientId { get; set; }

    // Section 16.1: Documentation Considered (already handled)

    // Section 16.2: Medical History
    public bool IsMedicalHistoryChecked { get; set; }  // Checkbox for 16.2
    public string MedicalHistoryDetails { get; set; }  // Details for 16.2 if checked
    public bool IsOtherAccidentsChecked { get; set; }  // Checkbox for 16.2.2
    public string OtherAccidentsDetails { get; set; }  // Additional details for 16.2.2 if checked

    // Section 16.3: Accident Details
    public bool IsAccidentDetailsChecked { get; set; }  // Checkbox for 16.3
    public string AccidentDetails { get; set; }  // Additional details for 16.3

    // Subsections for 16.3.5
    public bool IsSubSectionA_Checked { get; set; }  // Checkbox for 16.3.5(a)
    public string SubSectionA_Details { get; set; }  // Additional details for 16.3.5(a)

    public bool IsSubSectionB_Checked { get; set; }  // Checkbox for 16.3.5(b)
    public string SubSectionB_Details { get; set; }  // Additional details for 16.3.5(b)

    public bool IsSubSectionC_Checked { get; set; }  // Checkbox for 16.3.5(c)
    public string SubSectionC_Details { get; set; }  // Additional details for 16.3.5(c)

    // Section 16.4: Injuries Sustained (if applicable)
    public bool IsInjuriesSustainedChecked { get; set; }  // Checkbox for 16.4
    //public List<Injury> Injuries { get; set; }  // Dynamic list of injuries
}


    public class DocumentationConsidered
    {
        public int Id { get; set; }
        public string Author { get; set; }
        public string Speciality { get; set; }
        public string Document { get; set; }
        public DateTime DocumentationDate { get; set; }
    }

    public class InjuriesSustained
    {
        public int Id { get; set; }
        public string ReportedBy { get; set; }  // MXX, Doctor, Hospital, etc.
        public string Details { get; set; }  // Details of injury
        public bool IsMMIReached { get; set; }
        public int TotalOrthopedicWPI { get; set; }  // WPI value
    }


//     public class Incident {
//     public int IncidentId { get; set; }
//     public List<Injury> ClientInjuries { get; set; }
//     public List<Injury> Raf1Injuries { get; set; }
//     public List<Injury> HospitalInjuries { get; set; }
//     public bool IsRaf4a { get; set; }
//     public string Raf4aDetails { get; set; }
//     public bool IsRaf4b { get; set; }
//     public string Raf4bDetails { get; set; }
//     public bool IsRaf4c { get; set; }
//     public string Raf4cDetails { get; set; }
//     public bool IsRaf4d { get; set; }
//     public string Raf4dDetails { get; set; }
//     public bool IsDateAndDetailsOther { get; set; }
//     public string DateAndDetailsOther { get; set; }
// }

// public class Injury {
//     public int InjuryId { get; set; }
//     public string Detail { get; set; }
//     public int IncidentId { get; set; }
//     public Incident Incident { get; set; }
// }

}