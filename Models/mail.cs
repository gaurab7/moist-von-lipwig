using System.ComponentModel.DataAnnotations;

namespace moist_von_lipwig.Models
{
    public class Mails
    {
        [Key]
        private int Id { get; set; }
        
        [Required]
        public required string Message { get; set; }
        public bool Status { get; set; }


    }
}
