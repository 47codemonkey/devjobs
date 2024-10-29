import React from 'react';
import { IconSearch } from '../../assets/desktop/icons/IconSearch';
import { IconLocation } from '../../assets/desktop/icons/IconLocation';
import { SearchProps } from 'src/types/search.ts';
import './search.css';

export const Search: React.FC<SearchProps> = ({ search, setSearch, handleSearch }) => {
  return (
    <div className="search-wrapper">
      <div className="search-form-wrapper">
        <div className="search-input-wrapper">
          <IconSearch />
          <input
            className="search-input"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Filter by title, companies, expertise..."
          />
        </div>
        <div className="location-input-wrapper">
          <IconLocation />
          <input
            className="location-input"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Filter by location..."
          />
        </div>
        <div className="search-btn-wrapper">
          <input className="checkbox-input" type="checkbox" id="myCheckbox" name="fullTimeOnly" />
          <label className="label-name" htmlFor="myCheckbox">
            Full Time Only
          </label>
          <button className="search-btn" onClick={handleSearch}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

// export const Search: React.FC<SearchProps> = ({
//                                                 handleData,
//                                                 handleChange,
//                                                 handleLocationSearch,
//                                                 query,
//                                                 locationQuery,
//                                               }) => {
//   return (
//       <div className="search-wrapper">
//         <div className="search-form-wrapper">
//           <div className="search-input-wrapper">
//             <IconSearch />
//             <input
//                 className="search-input"
//                 type="text"
//                 value={query}
//                 onChange={handleChange}
//                 placeholder={query ? '' : 'Filter by title, companies, expertise...'}
//             />
//           </div>
//           <div className="location-input-wrapper">
//             <IconLocation />
//             <input
//                 className="location-input"
//                 type="text"
//                 value={locationQuery}
//                 onChange={handleLocationSearch}
//                 placeholder="Filter by location..."
//             />
//           </div>
//           <div className="search-btn-wrapper">
//             <input className="checkbox-input" type="checkbox" id="myCheckbox" name="fullTimeOnly" />
//             <label className="label-name" htmlFor="myCheckbox">
//               Full Time Only
//             </label>
//             <button className="search-btn" onClick={handleData}>
//               Search
//             </button>
//           </div>
//         </div>
//       </div>
//   );
// };
