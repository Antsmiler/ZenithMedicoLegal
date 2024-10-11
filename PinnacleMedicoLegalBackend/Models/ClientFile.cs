namespace PinnacleMedicoLegalBackend.Models
{
   public class ClientFile
    {
        public int Id { get; set; }
        public int ClientId { get; set; }
        public Client Client { get; set; }
        public string FileName { get; set; }
        public string FilePath { get; set; }
        public string FileType { get; set; }
        public DateTime UploadedAt { get; set; } = DateTime.Now;
    }
}
