using FixItApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace FixItApp.API.Data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) :base (options) {}

        public DbSet<Value> Values { get; set; }  
        public DbSet<User> Users { get; set; } 

        public DbSet<Photo> Photos { get; set; }

        public DbSet<Blog> Blogs { get; set; }
    }
}