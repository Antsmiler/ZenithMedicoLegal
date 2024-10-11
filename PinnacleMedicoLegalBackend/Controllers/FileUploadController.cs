using Microsoft.AspNetCore.Mvc;
using PinnacleMedicoLegalBackend.Models;
using PinnacleMedicoLegalBackend.Data; 

[ApiController]
[Route("api/[controller]")]
public class FileUploadController : ControllerBase
{
    private readonly AppDbContext _context;

    public FileUploadController(AppDbContext context)
    {
        _context = context;
    }

    [HttpPost("upload")]
    [ApiExplorerSettings(IgnoreApi = true)]
    public async Task<IActionResult> UploadFile([FromForm] IFormFile file, [FromForm] int clientId, [FromForm] string fileType)
    {
        var client = await _context.Clients.FindAsync(clientId);
        if (client == null) return NotFound("Client not found");

        if (file == null || file.Length == 0) return BadRequest("No file was uploaded.");

        var filePath = Path.Combine("Uploads", file.FileName);

        using (var stream = new FileStream(filePath, FileMode.Create))
        {
            await file.CopyToAsync(stream);
        }

        // Save file info to ClientFile table
        var clientFile = new ClientFile
        {
            ClientId = clientId,
            FileName = file.FileName,
            FilePath = filePath,
            FileType = fileType // e.g., Document, Image, Video
        };

        _context.ClientFiles.Add(clientFile);
        await _context.SaveChangesAsync();

        return Ok(new { filePath });
    }
}
