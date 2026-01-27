import React from "react";
import { Link } from "react-router-dom";
import { COLORS } from "../../Theme/Theme";
import "./Navbar.css";
import useMediaQuery from "../useMediaQuery";

function NavBarMain({
  page,
  navStyle
}) {
  const matches = useMediaQuery('(max-width:820px)')
  const mobile = useMediaQuery('(min-width:460px)')

  // If mobile and matches (small screen), we might want to hide this or show a different version
  // But based on original logic: display: mobile ? matches ? 'block' : null : 'none'
  // It seems it was shown on mobile? Let's stick to the visible structure but styled better.
  // Actually, usually side nav handles mobile. Let's make this the desktop top nav.

  if (!mobile || (mobile && matches)) {
    // If it's a small screen, this top nav might be redundant if the sidebar modal handles it.
    // However, preserving original logic's intent:
    return null;
  }

  const navLinks = [
    { label: 'Herds', path: '/', id: 'herds' },
    { label: 'Add', path: '/add', id: 'add' },
    { label: 'Alerts', path: '/alerts', id: 'alerts' },
  ];

  return (
    <div className="w-full bg-white border-b border-gray-100 px-8 py-4 sticky top-0 z-40">
      <div className="flex w-full items-center">
        {/* Placeholder for left side content if any */}
        <div className="w-0"></div>

        <nav className="flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              className={`
                text-lg font-medium px-2 py-1 transition-colors duration-200
                ${page === link.id
                  ? 'text-[#009A48] border-b-2 border-[#009A48]'
                  : 'text-gray-500 hover:text-[#009A48]'}
              `}
              style={{ textDecoration: 'none' }} // Ensure no default underline
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default NavBarMain;
