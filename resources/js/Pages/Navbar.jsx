import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ content }) => {
  return (
      <nav className="bg-[#5E1675] flex items-center justify-between px-8 py-2 sticky top-0 z-50">
          <p className="text-2xl font-bold text-slate-50">RESTORAN</p>
          {content ? (
              <div className="dropdown dropdown-end">
                  <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle avatar"
                  >
                      <div className="w-24 rounded-full">
                          <img
                              alt="Tailwind CSS Navbar component"
                              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                          />
                      </div>
                  </div>
                  <ul
                      tabIndex={0}
                      className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content
                       rounded-box w-52 bg-[#5E1675] py-4"
                  >
                      <li className=" text-slate-50 hover:bg-[#FFD23F] hover:text-[#5E1675] rounded-md">
                          <a className="text-lg">{content}</a>
                      </li>
                      <li className=" text-slate-50 hover:bg-[#EE4266] rounded-md">
                          <a className="text-lg">Logout</a>
                      </li>
                  </ul>
              </div>
          ) : (
              <div className="">
                  <a className="btn btn-ghost text-xl text-slate-50 hover:bg-[#337357]">
                      Login
                  </a>
              </div>
          )}
      </nav>
  );
};

Navbar.propTypes = {
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Navbar;
