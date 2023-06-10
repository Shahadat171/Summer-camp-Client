
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden"></label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Instructors</a>
              </li>
              <li>
                <a>Classes</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl text-white font-serif">
            English Center
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu text-[15px] menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Instructors</a>
            </li>
            <li>
              <a>Classes</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
