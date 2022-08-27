import './search.css'
import { FaSearch } from 'react-icons/fa';

export default function Search() {
  return (
    <div className="search-container">
        <form action="#" className="search-form">
            <input type="text"
                placeholder="Search.."
                name="search" 
                className="search-input" 
            />
            <button className="search-btn">
                <i className="search-icon">
                    <FaSearch />
                </i>
            </button>
        </form>
    </div>
  )
}
