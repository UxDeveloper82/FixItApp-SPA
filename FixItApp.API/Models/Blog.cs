using System;
using System.Collections.Generic;

namespace FixItApp.API.Models
{
    public class Blog
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Description { get; set; }

        public string Content { get; set; }

        public DateTime Created { get; set; }

        public ICollection<PhotoBlog> PhotosBlog { get; set; }
    }
}