using server.Models;

namespace  server.Models

{public class User{

    public int id{get; set;}
    public string name{get; set;}
    public string password{get; set;}
    public Profession profession{get; set;}


    public User(int id, string name, string password, Profession profession)
    {
        this.id=id;
        this.name=name;
        this.password=password;
        this.profession=profession;
        
    }

}}