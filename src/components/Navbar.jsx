import React from 'react'
import { navLinks, navIcons } from '#constants';
import dayjs from 'dayjs';
import useWindowStore from '#store/window'; // ✅ NEW IMPORT

const Navbar = () => {
  const { windows } = useWindowStore(); // ✅ To read which window is open

  return (
    <nav>
      <div>
        <img src='/public/images/logo.svg' alt='logo'/>
        <p className='font-bold'>Prashant's Portfolio</p>

        <ul>
          {navLinks.map(({ id, name }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => {
            const isOpen = windows[id]?.isOpen; // ✅ Check if that window is open

            return (
              <li key={id} className="relative flex flex-col items-center">
                <img
                  src={img}
                  className="icon-hover"
                  alt={`icon-${id}`}
                />

                {/* ✅ Underline appears ONLY when that window is open */}
                {isOpen && (
                  <span
                    className="absolute -bottom-1 w-5 h-[2px] bg-black rounded-full"
                  />
                )}
              </li>
            );
          })}
        </ul>

        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
}

export default Navbar;
