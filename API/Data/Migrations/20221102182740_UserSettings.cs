﻿using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace API.Data.Migrations
{
    public partial class UserSettings : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "SettingId",
                table: "Users",
                type: "TEXT",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "UserSetting",
                columns: table => new
                {
                    Id = table.Column<Guid>(type: "TEXT", nullable: false),
                    LastCigarette = table.Column<DateTime>(type: "TEXT", nullable: false),
                    NumbersOfCigarettes = table.Column<int>(type: "INTEGER", nullable: false),
                    YearsOfSmoking = table.Column<int>(type: "INTEGER", nullable: false),
                    PriceOfPacket = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserSetting", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Users_SettingId",
                table: "Users",
                column: "SettingId");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_UserSetting_SettingId",
                table: "Users",
                column: "SettingId",
                principalTable: "UserSetting",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_UserSetting_SettingId",
                table: "Users");

            migrationBuilder.DropTable(
                name: "UserSetting");

            migrationBuilder.DropIndex(
                name: "IX_Users_SettingId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "SettingId",
                table: "Users");
        }
    }
}
