using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace PinnacleMedicoLegalBackend.Migrations
{
    /// <inheritdoc />
    public partial class UpdateClientModel : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "ClientDetails");

            migrationBuilder.RenameColumn(
                name: "PhoneNumber",
                table: "Clients",
                newName: "YourReference");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "Clients",
                newName: "TimeSinceInjury");

            migrationBuilder.RenameColumn(
                name: "Email",
                table: "Clients",
                newName: "ResidentialAddress");

            migrationBuilder.AddColumn<int>(
                name: "Age",
                table: "Clients",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "AgeAtTimeOfInjury",
                table: "Clients",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "ContactDetails",
                table: "Clients",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<DateTime>(
                name: "DateOfAssessment",
                table: "Clients",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "DateOfBirth",
                table: "Clients",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "DateOfInjury",
                table: "Clients",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<DateTime>(
                name: "DateOfReport",
                table: "Clients",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<string>(
                name: "EmploymentPreAccident",
                table: "Clients",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "EmploymentPresent",
                table: "Clients",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "IdentityNumber",
                table: "Clients",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "MedicoLegalReportNumber",
                table: "Clients",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "MyReference",
                table: "Clients",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "PlaceOfAssessment",
                table: "Clients",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ReferredBy",
                table: "Clients",
                type: "TEXT",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Age",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "AgeAtTimeOfInjury",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "ContactDetails",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "DateOfAssessment",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "DateOfBirth",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "DateOfInjury",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "DateOfReport",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "EmploymentPreAccident",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "EmploymentPresent",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "IdentityNumber",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "MedicoLegalReportNumber",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "MyReference",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "PlaceOfAssessment",
                table: "Clients");

            migrationBuilder.DropColumn(
                name: "ReferredBy",
                table: "Clients");

            migrationBuilder.RenameColumn(
                name: "YourReference",
                table: "Clients",
                newName: "PhoneNumber");

            migrationBuilder.RenameColumn(
                name: "TimeSinceInjury",
                table: "Clients",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "ResidentialAddress",
                table: "Clients",
                newName: "Email");

            migrationBuilder.CreateTable(
                name: "ClientDetails",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    ClientId = table.Column<int>(type: "INTEGER", nullable: false),
                    Type = table.Column<string>(type: "TEXT", nullable: false),
                    Value = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ClientDetails", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ClientDetails_Clients_ClientId",
                        column: x => x.ClientId,
                        principalTable: "Clients",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ClientDetails_ClientId",
                table: "ClientDetails",
                column: "ClientId");
        }
    }
}
