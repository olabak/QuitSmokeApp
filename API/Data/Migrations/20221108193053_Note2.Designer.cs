﻿// <auto-generated />
using System;
using API.Data;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace API.Data.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20221108193053_Note2")]
    partial class Note2
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.17");

            modelBuilder.Entity("API.Entities.AppUser", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<byte[]>("PasswordHash")
                        .HasColumnType("BLOB");

                    b.Property<byte[]>("PasswordSalt")
                        .HasColumnType("BLOB");

                    b.Property<int>("SettingId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("UserName")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("SettingId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("API.Entities.Note", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("AddDate")
                        .HasColumnType("TEXT");

                    b.Property<string>("Description")
                        .HasColumnType("TEXT");

                    b.Property<int>("Mood")
                        .HasColumnType("INTEGER");

                    b.Property<string>("MoodDescription")
                        .HasColumnType("TEXT");

                    b.Property<bool>("Symptom")
                        .HasColumnType("INTEGER");

                    b.Property<string>("SymptomDescription")
                        .HasColumnType("TEXT");

                    b.Property<int>("UserId")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Notes");
                });

            modelBuilder.Entity("API.Entities.UserSetting", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("LastCigarette")
                        .HasColumnType("TEXT");

                    b.Property<string>("Motivation")
                        .HasColumnType("TEXT");

                    b.Property<int>("NumbersOfCigarettes")
                        .HasColumnType("INTEGER");

                    b.Property<int>("PriceOfPacket")
                        .HasColumnType("INTEGER");

                    b.Property<int>("QuizScore")
                        .HasColumnType("INTEGER");

                    b.Property<int>("YearsOfSmoking")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("UserSetting");
                });

            modelBuilder.Entity("API.Entities.AppUser", b =>
                {
                    b.HasOne("API.Entities.UserSetting", "Setting")
                        .WithMany()
                        .HasForeignKey("SettingId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Setting");
                });

            modelBuilder.Entity("API.Entities.Note", b =>
                {
                    b.HasOne("API.Entities.AppUser", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });
#pragma warning restore 612, 618
        }
    }
}
