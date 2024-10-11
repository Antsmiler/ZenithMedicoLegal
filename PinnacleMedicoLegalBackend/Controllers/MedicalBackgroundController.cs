using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using PinnacleMedicoLegalBackend.Models;
using PinnacleMedicoLegalBackend.Data;

[ApiController]
[Route("api/[controller]")]
public class MedicalBackgroundController : ControllerBase
{
    private readonly AppDbContext _context;

    public MedicalBackgroundController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost("create")]
    public async Task<IActionResult> CreateMedicalBackground(MedicalBackground medicalBackground)
    {
        _context.MedicalBackgrounds.Add(medicalBackground);
        await _context.SaveChangesAsync();
        return Ok(medicalBackground);
    }

    [HttpGet("{clientId}")]
    public async Task<IActionResult> GetMedicalBackground(int clientId)
    {
        var medicalBackground = await _context.MedicalBackgrounds.FirstOrDefaultAsync(m => m.ClientId == clientId);
        if (medicalBackground == null)
            return NotFound();
        return Ok(medicalBackground);
    }

    [HttpPut("{clientId}")]
    public async Task<IActionResult> UpdateMedicalBackground(int clientId, MedicalBackground updatedMedicalBackground)
    {
        var medicalBackground = await _context.MedicalBackgrounds.FirstOrDefaultAsync(m => m.ClientId == clientId);
        if (medicalBackground == null)
            return NotFound();

        // Update each section
        medicalBackground.IsMedicalHistoryChecked = updatedMedicalBackground.IsMedicalHistoryChecked;
        medicalBackground.MedicalHistoryDetails = updatedMedicalBackground.MedicalHistoryDetails;

        medicalBackground.IsAccidentDetailsChecked = updatedMedicalBackground.IsAccidentDetailsChecked;
        medicalBackground.AccidentDetails = updatedMedicalBackground.AccidentDetails;

        medicalBackground.IsSubSectionA_Checked = updatedMedicalBackground.IsSubSectionA_Checked;
        medicalBackground.SubSectionA_Details = updatedMedicalBackground.SubSectionA_Details;

        // Continue updating the rest...

        await _context.SaveChangesAsync();
        return Ok(medicalBackground);
    }

    [HttpDelete("{clientId}")]
    public async Task<IActionResult> DeleteMedicalBackground(int clientId)
    {
        var medicalBackground = await _context.MedicalBackgrounds.FirstOrDefaultAsync(m => m.ClientId == clientId);
        if (medicalBackground == null)
            return NotFound();

        _context.MedicalBackgrounds.Remove(medicalBackground);
        await _context.SaveChangesAsync();

        return Ok(new { message = "Medical background deleted successfully" });
    }
}