using System.Collections.Generic;
using System.Threading.Tasks;
using FixItApp.API.Models;

namespace FixItApp.API.Data
{
    public interface IRepairRepository
    {
         void Add<R>(R entity) where R: class;

         void Delete<R>(R entity) where R: class;

         Task<bool> SaveAll();

         Task<IEnumerable<Repair>> GetRepairs();

         Task<Repair> GetRepair(int id);
    }
}