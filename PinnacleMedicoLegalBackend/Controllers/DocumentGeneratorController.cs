using Microsoft.AspNetCore.Mvc;
using PinnacleMedicoLegalBackend.Data;
using PinnacleMedicoLegalBackend.Models;
using Xceed.Words.NET;

[ApiController]
[Route("api/[controller]")]
public class DocumentGeneratorController : ControllerBase
{
    private readonly AppDbContext _context;

    public DocumentGeneratorController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet("generate/{clientId}")]
    public async Task<IActionResult> GenerateDocument(int clientId)
    {
        var client = await _context.Clients.FindAsync(clientId);
        if (client == null)
            return NotFound();

        // Create Word document using DocX
        var doc = DocX.Create($"Client_{client.MedicoLegalReportNumber}.docx");

        doc.InsertParagraph("Medico Legal Report")
            .FontSize(20)
            .Bold();

        doc.InsertParagraph($"Report Number: {client.MedicoLegalReportNumber}");
        doc.InsertParagraph($"Date of Assessment: {client.DateOfAssessment.ToShortDateString()}");
        doc.InsertParagraph($"Date of Report: {client.DateOfReport.ToShortDateString()}");
        doc.InsertParagraph($"Referred By: {client.ReferredBy}");
        doc.InsertParagraph($"Identity Number: {client.IdentityNumber}");
        doc.InsertParagraph($"Employment Pre-Accident: {client.EmploymentPreAccident}");
        doc.InsertParagraph($"Employment Present: {client.EmploymentPresent}");
        doc.InsertParagraph($"Place of Assessment: {client.PlaceOfAssessment}");

        // Save the document
        var filePath = Path.Combine("Documents", $"Client_{client.MedicoLegalReportNumber}.docx");
        doc.SaveAs(filePath);

        return Ok(new { filePath });
    }
}
