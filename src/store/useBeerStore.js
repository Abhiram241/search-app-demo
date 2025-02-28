import { create } from 'zustand';
import axios from 'axios';

const useBeerStore = create((set) => ({
  beers: [],
  searchQuery: '',
  setSearchQuery: (query) => set({ searchQuery: query }),
  fetchBeers: async () => {
    try {
      const response = await axios.get('https://api.sampleapis.com/beers/ale');
      set({ beers: response.data });
    } catch (error) {
      console.error('Error fetching beers:', error);
    }
  },
}));

export default useBeerStore;
