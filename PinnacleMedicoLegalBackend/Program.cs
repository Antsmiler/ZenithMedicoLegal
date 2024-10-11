using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using PinnacleMedicoLegalBackend.Data;
using Utils.SwaggerFileOperationFilter;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc("v1", new OpenApiInfo
    {
        Title = "Pinnacle Medico-Legal API",
        Version = "v1",
        Description = "API for medico-legal reporting"
    });

    c.OperationFilter<SwaggerFileOperationFilter>();
});

// Configure Entity Framework Core to use SQLite
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite("Data Source=PinnacleMedicoLegal.db"));

// Add CORS policy (optional, if needed for frontend communication)
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});

// Add controllers if you're using MVC or Web API controllers
builder.Services.AddControllers();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Enable CORS globally (optional, if CORS is needed)
app.UseCors("AllowAll");

app.UseAuthorization();

// Map controllers (since you're using API controllers)
app.MapControllers();

// Example endpoint for weather forecast (you can keep this if needed)
var summaries = new[]
{
    "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
};

app.MapGet("/weatherforecast", () =>
{
    var forecast = Enumerable.Range(1, 5).Select(index =>
        new WeatherForecast
        (
            DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
            Random.Shared.Next(-20, 55),
            summaries[Random.Shared.Next(summaries.Length)]
        ))
        .ToArray();
    return forecast;
})
.WithName("GetWeatherForecast")
.WithOpenApi();

app.Run();

// Your WeatherForecast record (this can stay as an example)
record WeatherForecast(DateOnly Date, int TemperatureC, string? Summary)
{
    public int TemperatureF => 32 + (int)(TemperatureC / 0.5556);
}
