using Microsoft.EntityFrameworkCore;
public class RoiContext : DbContext
{
    public DbSet<Person> People { get; set; }
    public DbSet<Department> Departments { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        optionsBuilder.UseSqlServer("Server=(localdb)\\MSSQLLocalDB;Database=roi;Trusted_Connection=True;");
    } 

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        // Configure the foreign key relationship
        modelBuilder.Entity<Person>()
            .HasOne(p => p.Department)
            .WithMany(d => d.People)
            .HasForeignKey(p => p.DepartmentId);

        modelBuilder.Entity<Department>(b =>
        {
            b.ToTable("Department");
            b.Property(x => x.Id).ValueGeneratedOnAdd().UseIdentityColumn(0, 1);
        });
    }
}