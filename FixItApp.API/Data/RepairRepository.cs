using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using FixItApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace FixItApp.API.Data 
{
    public class RepairRepository : IRepairRepository
    {
        private readonly DataContext _context;
        public RepairRepository (DataContext context) 
        {
            _context = context;

        }
        public void Add<R> (R entity) where R : class 
        {
            _context.Add(entity);
        }

        public void Delete<R> (R entity) where R : class 
        {
            _context.Remove(entity);
        }

        public async Task<Repair> GetRepair (int id) 
        {
            var repair= await _context.Repairs.SingleOrDefaultAsync(r => r.Id == id);
            return repair;
        }

        public async Task<IEnumerable<Repair>> GetRepairs () 
        {
           var repairs =await _context.Repairs.ToListAsync();
           return repairs;
        }

        public Task<bool> SaveAll () {
            throw new System.NotImplementedException ();
        }
    }
}