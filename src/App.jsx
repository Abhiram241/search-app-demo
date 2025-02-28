// src/App.jsx
import { useEffect } from 'react';
import useBeerStore from './store/useBeerStore';
import BeerCard from './components/BeerCard';

function App() {
  const { beers, fetchBeers, searchQuery, setSearchQuery } = useBeerStore();

  useEffect(() => {
    fetchBeers();
  }, []);

  const filteredBeers = beers.filter((beer) =>
    beer.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-4">Beer Collection</h1>
      <input
        type="text"
        placeholder="Search beers..."
        className="w-full p-2 border rounded-md"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        {filteredBeers.length ? (
          filteredBeers.map((beer) => <BeerCard key={beer.id} beer={beer} />)
        ) : (
          <p className="col-span-full text-center">No beers found</p>
        )}
      </div>
    </div>
  );
}

export default App;
