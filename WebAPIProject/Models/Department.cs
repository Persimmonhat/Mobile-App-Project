using System.ComponentModel.DataAnnotations;

public class Department
{
    [Key]
    public int Id { get; set; }
    public string Name { get; set; }
    public virtual ICollection<Person> People { get; set; } = new List<Person>();
}