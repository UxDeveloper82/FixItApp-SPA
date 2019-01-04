using System.Collections.Generic;
using System.Threading.Tasks;
using FixItApp.API.Models;

namespace FixItApp.API.Data
{
    public interface IBlogRepository
    {
       void Add<B>(B entity)where B: class;

       void Delete<B>(B entity)where B: class;

       Task<bool> SaveAll();

       Task<IEnumerable<Blog>> GetBlogs();

       Task<Blog> GetBlog(int id);
    }
}