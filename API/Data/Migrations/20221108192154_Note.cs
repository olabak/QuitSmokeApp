using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Data.Migrations
{
    public partial class Note : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Motivation",
                table: "UserSetting",
                type: "TEXT",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "QuizScore",
                table: "UserSetting",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Motivation",
                table: "UserSetting");

            migrationBuilder.DropColumn(
                name: "QuizScore",
                table: "UserSetting");
        }
    }
}
