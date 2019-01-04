using System;
using System.Linq;
using System.Threading.Tasks;
using FixItApp.API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FixItApp.API.Controllers {

    [Route ("api/[controller]")]
    [ApiController]
    public class BlogsController : ControllerBase 
    {
        private readonly IBlogRepository _repo;

        public BlogsController (IBlogRepository repo)
        {
            _repo = repo;

        }

        [HttpGet]
        public async Task<IActionResult> GetBlogs () 
        {
            var myBlogs = await _repo.GetBlogs();

            return Ok (myBlogs);
        }

        [HttpGet ("{id}")]
        public async Task<IActionResult> GetBlog (int id) 
        {
            var myBlog = await _repo.GetBlog (id);

            return Ok (myBlog);
        }

         [HttpPut("{id}")]
         public async Task<IActionResult> UpdateBlog(int id)
         {
             var blogFromRepo = await _repo.GetBlog(id);
             if(await _repo.SaveAll())
                return NoContent();

             throw new Exception($"Updating blog {id} failed on save");   
         }
    }
}