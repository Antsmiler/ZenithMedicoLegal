using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PinnacleMedicoLegalBackend.Migrations
{
    /// <inheritdoc />
    public partial class MedicalBackgroundSection : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "MedicalBackgrounds",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ClientId = table.Column<int>(type: "INTEGER", nullable: false),
                    IsMedicalHistoryChecked = table.Column<bool>(type: "INTEGER", nullable: false),
                    MedicalHistoryDetails = table.Column<string>(type: "TEXT", nullable: false),
                    IsOtherAccidentsChecked = table.Column<bool>(type: "INTEGER", nullable: false),
                    OtherAccidentsDetails = table.Column<string>(type: "TEXT", nullable: false),
                    IsAccidentDetailsChecked = table.Column<bool>(type: "INTEGER", nullable: false),
                    AccidentDetails = table.Column<string>(type: "TEXT", nullable: false),
                    IsSubSectionA_Checked = table.Column<bool>(type: "INTEGER", nullable: false),
                    SubSectionA_Details = table.Column<string>(type: "TEXT", nullable: false),
                    IsSubSectionB_Checked = table.Column<bool>(type: "INTEGER", nullable: false),
                    SubSectionB_Details = table.Column<string>(type: "TEXT", nullable: false),
                    IsSubSectionC_Checked = table.Column<bool>(type: "INTEGER", nullable: false),
                    SubSectionC_Details = table.Column<string>(type: "TEXT", nullable: false),
                    IsInjuriesSustainedChecked = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MedicalBackgrounds", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "MedicalBackgrounds");
        }
    }
}
