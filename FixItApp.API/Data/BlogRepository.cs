using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FixItApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace FixItApp.API.Data {
    public class BlogRepository : IBlogRepository 
    {
        private readonly DataContext _context;

        public BlogRepository (DataContext context) 
        {
            _context = context;

        }
        public void Add<B> (B entity) where B : class
        {
           _context.Add(entity);
        }

        public void Delete<B> (B entity) where B : class 
        {
            _context.Remove(entity);
        }

        public async Task<Blog> GetBlog (int id) 
        {
            var blog = await _context.Blogs.FirstOrDefaultAsync(b => b.Id == id);

            return blog;
        }

        public async Task<IEnumerable<Blog>> GetBlogs ()
        {
            var blogs = await _context.Blogs.ToListAsync();

            return blogs;
        }

        public async Task<bool> SaveAll () 
        {
            return await _context.SaveChangesAsync() > 0;
        }
    }
}