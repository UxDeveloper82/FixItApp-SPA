
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace FixItApp.API.Controllers
{   
    [Authorize]
    [Route ("api/[controller]")]
    [ApiController]
    public class RepairsController : ControllerBase
    {
        
    }
}