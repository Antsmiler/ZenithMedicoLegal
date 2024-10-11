using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PinnacleMedicoLegalBackend.Models;
using PinnacleMedicoLegalBackend.Data;

[ApiController]
[Route("api/[controller]")]
public class ClientController : ControllerBase
{
    private readonly AppDbContext _context;

    public ClientController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost("create")]
    public async Task<IActionResult> CreateOrUpdateClient([FromBody] Client client)
    {
        if (client.Id > 0)  // Check if the client exists (i.e., it's an update)
        {
            var existingClient = await _context.Clients.FindAsync(client.Id);
            if (existingClient != null)
            {
                // Update existing client fields
                existingClient.MedicoLegalReportNumber = client.MedicoLegalReportNumber;
                existingClient.DateOfAssessment = client.DateOfAssessment;
                existingClient.ReferredBy = client.ReferredBy;
                // Add more fields as needed...

                await _context.SaveChangesAsync();
                return Ok(existingClient);
            }
        }

        // Insert a new client if the ID is not present
        _context.Clients.Add(client);
        await _context.SaveChangesAsync();
        return Ok(client);
    }

    [HttpGet("clients")]
    public async Task<IActionResult> GetClients()
    {
        var clients = await _context.Clients.ToListAsync();
        return Ok(clients);
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetClient(int id)
    {
        var client = await _context.Clients.FindAsync(id);
        if (client == null)
        {
            return NotFound();
        }
        return Ok(client);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteClient(int id)
    {
        var client = await _context.Clients.FindAsync(id);
        if (client == null)
        {
            return NotFound();
        }

        _context.Clients.Remove(client);
        await _context.SaveChangesAsync();

        return Ok(new { message = "Client deleted successfully" });
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> UpdateClient(int id, [FromBody] Client updatedClient)
    {
        if (id != updatedClient.Id)
        {
            return BadRequest();
        }

        var client = await _context.Clients.FindAsync(id);
        if (client == null)
        {
            return NotFound();
        }

        // Update fields
        client.Name = updatedClient.Name;
        client.Surname = updatedClient.Surname;
        client.MedicoLegalReportNumber = updatedClient.MedicoLegalReportNumber;
        client.DateOfAssessment = updatedClient.DateOfAssessment;
        client.DateOfReport = updatedClient.DateOfReport;
        client.ReferredBy = updatedClient.ReferredBy;
        client.MyReference = updatedClient.MyReference;
        client.YourReference = updatedClient.YourReference;
        client.IdentityNumber = updatedClient.IdentityNumber;
        client.DateOfBirth = updatedClient.DateOfBirth;
        client.Age = updatedClient.Age;
        client.MaritalStatus = updatedClient.MaritalStatus;
        client.Gender = updatedClient.Gender;
        client.HomeLanguage = updatedClient.HomeLanguage;
        client.DateOfInjury = updatedClient.DateOfInjury;
        client.AgeAtTimeOfInjury = updatedClient.AgeAtTimeOfInjury;
        client.TimeSinceInjury = updatedClient.TimeSinceInjury;
        client.ResidentialAddress = updatedClient.ResidentialAddress;
        client.ContactDetails = updatedClient.ContactDetails;
        client.EmploymentPreAccident = updatedClient.EmploymentPreAccident;
        client.EmploymentPresent = updatedClient.EmploymentPresent;
        client.PlaceOfAssessment = updatedClient.PlaceOfAssessment;

        await _context.SaveChangesAsync();

        return Ok(client);
    }
}
