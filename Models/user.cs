using System.ComponentModel.DataAnnotations;

namespace moist_von_lipwig.Models
{
    public class User
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public required string UserName { get; set; }
        public required string Email { get; set; }

    }

}
