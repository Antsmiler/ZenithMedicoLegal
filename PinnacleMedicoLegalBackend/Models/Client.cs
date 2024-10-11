using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace PinnacleMedicoLegalBackend.Models
{
    public class Client
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

         public string Name { get; set; }    // New field for First Name
        public string Surname { get; set; } // New field for Last Name

        [Required]
        public string MedicoLegalReportNumber { get; set; }

        [Required]
        public DateTime DateOfAssessment { get; set; }

        public DateTime DateOfReport { get; set; }

        public string ReferredBy { get; set; }
        
        public string MyReference { get; set; }

        public string YourReference { get; set; }

        [Required]
        public string IdentityNumber { get; set; }

        [Required]
        public DateTime DateOfBirth { get; set; }

        public int Age { get; set; }
        public string MaritalStatus { get; set; } // e.g., Married, Single
        public string Gender { get; set; } // e.g., Male, Female, Other
        public string HomeLanguage { get; set; } // e.g., English, Afrikaans, etc.

        public DateTime DateOfInjury { get; set; }

        public int AgeAtTimeOfInjury { get; set; }

        public string TimeSinceInjury { get; set; }

        public string ResidentialAddress { get; set; }

        public string ContactDetails { get; set; }

        public string EmploymentPreAccident { get; set; }

        public string EmploymentPresent { get; set; }

        public string PlaceOfAssessment { get; set; } = "105 George Storrar Drive, Groenkloof, Pretoria, Centurion, 0181";
        // [JsonIgnore]
        // public ICollection<ClientFile> ClientFiles { get; set; }
    }
}
