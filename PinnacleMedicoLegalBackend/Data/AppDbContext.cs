using Microsoft.EntityFrameworkCore;
using PinnacleMedicoLegalBackend.Models;

namespace PinnacleMedicoLegalBackend.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<Client> Clients { get; set; }
        public DbSet<ClientFile> ClientFiles { get; set; }
        public DbSet<MedicalBackground> MedicalBackgrounds { get; set; }
        
    }
}