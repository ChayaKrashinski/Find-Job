using Microsoft.AspNetCore.Mvc;
using server.Models;
using System.Collections.Generic;
using System.Linq;


namespace server.Controllers
{
    [ApiController]
    public class serverController : ControllerBase
    {

        public static List<User> users {get; set;}

        public static List<Job> jobs {get; set;}

        public serverController()
        {
        users = new List<User>()
        { new User(123,"chaya",  "zxcvbnm,", Profession.admins),
        new User(456,"sara",  "11111111", Profession.electric),
        new User(789,"pnina",  "12345678", Profession.secretry),
        new User(876,"lea",  "asdfghjk", Profession.teachers),
        new User(432,"gila",  "vvvvvvvv", Profession.computers),
        };

        jobs = new List<Job>()
         {  new Job("principal", Profession.admins, 10, "jerusalem", "---", false),
            new Job("secretery", Profession.secretry, 10, "jerusalem", "---", true),
            new Job("teacher", Profession.teachers, 10, "jerusalem", "---", false),
            new Job("fs developer", Profession.computers, 10, "jerusalem", "---", true),
            new Job("electricial", Profession.electric, 10, "jerusalem", "---", false),
            new Job("team leader", Profession.computers, 10, "jerusalem", "---", false)
         };
        }


        [HttpGet("GetJobs")]
        public ActionResult<List<Job>> GetJobs()
        {
            return Ok(jobs);
        }

        [HttpPost("GetUser")]
        public ActionResult<User> GetUser({string? name, string? password})
        {
            if(users==null)return null;
            return users.FirstOrDefault(u=>u.name.Equals(name)&&u.password.Equals(password));
        }

    }

}