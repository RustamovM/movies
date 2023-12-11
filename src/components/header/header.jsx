import { Link } from "react-router-dom";
import Logo from "../../assets/logo.svg";

const Header = ({ isSearchable, onChange }) => {
  return (
    <header className="p-10 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <img src={Logo} alt="site logo" width={153} height={32} />
        {isSearchable && (
          <input
            onChange={onChange}
            type="search"
            className="px-3 py-2 rounded-xl w-[300px] bg-gray-800 outline-slate-800"
          />
        )}
        <nav>
          <ul className="flex items-center list-none p-0 m-0 gap-8">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">All movies</Link>
            </li>
            <li>
              <Link to="/">Movie Realease</Link>
            </li>
            <li>
              <Link to="/">Forum</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
