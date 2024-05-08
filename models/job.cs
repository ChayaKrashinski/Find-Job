using server.Models;

namespace server.Models

{public class Job{

    public string name{get; set;}
    public Profession profession{get; set;}
    public int range{get; set;}
    public string area{get; set;}
    public string requierments{get; set;}
    public bool fromHome{get; set;}

    
    public Job(string name, Profession profession, int range, string area, string requierments, bool fromHome)
    {
        this.name = name;
        this.profession = profession;
        this.range = range;
        this.area=area;
        this.requierments = requierments;
        this.fromHome = fromHome;
    }



}}