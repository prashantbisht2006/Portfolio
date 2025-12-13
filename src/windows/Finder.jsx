import React from 'react';
import Windowcontrol from '#components/windowcontrol';
import { Search } from 'lucide-react';
import windowWrapper from '../HOC/windowWrapper';
import { locations } from '#constants';
import useLocationStore from '#store/Location';
import clsx from 'clsx';


const Finder = () => {
  
  const { setActiveLocation ,activeLocation } = useLocationStore();

  return (
    <>
      <div id="window-header">
        <Windowcontrol target="finder" />
        <Search className="icon" />
      </div>

      <div className="bg-white flex h-full">
        <div className="sidebar">
          <div>
            <h3>Favourites</h3>

            <ul>
              {Object.values(locations).map((item) => (
                <li
  key={item.id}
  onClick={() => setActiveLocation(item)}
  className={clsx(
    activeLocation?.id === item.id ? 'active' : 'not-active'
  )}
>

                  <img src={item.icon} className="w-4" alt={item.name}  />
                  <p className="text-sm font-medium truncate">
                    {item.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Work</h3>
            <ul>
              {locations.work.children.map((item) => (
                <li
  key={item.id}
  onClick={() => setActiveLocation(item)}
  className={clsx(
    activeLocation?.id === item.id ? 'active' : 'not-active'
  )}
>

                  <img src={item.icon} className="w-4" alt={item.name}  />
                  <p className="text-sm font-medium truncate">
                    {item.name}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

const FinderWindow = windowWrapper(Finder, "finder");
export default FinderWindow;
