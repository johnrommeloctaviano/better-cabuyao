import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';

interface SearchCardProps {
  placeholder?: string;
  label?: string;
  suggestions?: string[];
}

const defaultSuggestions = [
  'Business permit',
  'Birth certificate',
  'Health services',
  'Barangay clearance',
  'Social welfare',
];

export function SearchCard({
  placeholder = 'Search services, departments…',
  label = 'How can we help you?',
  suggestions = defaultSuggestions,
}: SearchCardProps) {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim())
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <div className="flex h-full w-full flex-col justify-center rounded-2xl bg-white p-8 shadow-xl lg:p-10">
      <p className="mb-1 text-xl font-bold text-gray-900">{label}</p>
      <p className="mb-6 text-sm text-gray-500">
        Find services, departments, and government information quickly.
      </p>
      <form onSubmit={handleSearch}>
        <div className="relative flex items-center">
          <Search className="absolute left-4 h-5 w-5 text-gray-400 pointer-events-none" />
          <input
            type="search"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder={placeholder}
            aria-label="Search"
            className="w-full pl-11 pr-28 py-4 rounded-xl border border-gray-200 text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="absolute right-2 px-4 py-2 rounded-lg bg-primary-600 text-white text-sm font-semibold hover:bg-primary-700 transition"
          >
            Search
          </button>
        </div>
      </form>

      {suggestions.length > 0 && (
        <div className="mt-5">
          <p className="mb-2 text-xs font-medium text-gray-400 uppercase tracking-wide">
            Key suggestions
          </p>
          <div className="flex flex-wrap gap-2">
            {suggestions.map(s => (
              <button
                key={s}
                type="button"
                onClick={() =>
                  navigate(`/search?q=${encodeURIComponent(s)}`)
                }
                className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 transition hover:border-primary-300 hover:bg-primary-50 hover:text-primary-700"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
