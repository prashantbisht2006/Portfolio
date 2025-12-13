import React from 'react';
import Windowcontrol from '#components/windowcontrol';
import { Search } from 'lucide-react';
import windowWrapper from '../HOC/windowWrapper';
import { locations } from '#constants';
import useLocationStore from '#store/Location';
import clsx from 'clsx';
import useWindowStore from '#store/window';


const Finder = () => {
    const {openWindow} = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();
  const openItems = (item)=>{
    if(item.fileType==="pdf") return openWindow('resume');
    if(item.kind==="folder") return setActiveLocation(item);
    if(['fig','url','jpg','mp3','mp4'].includes(item.fileType)&& item.href)
        return window.open(item.href,"blank");

    openWindow(`${item.fileType}${item.kind}`,item)
  };

  // Reusable list renderer
  const renderList = (items) =>
    items.map((item) => (
      <li
        key={item.id}
        onClick={() => setActiveLocation(item)}
        className={clsx(
          activeLocation?.id === item.id ? "active" : "not-active"
        )}
      >
        <img src={item.icon} className="w-4" alt={item.name} />
        <p className="text-sm font-medium truncate">{item.name}</p>
      </li>
    ));

  return (
    <>
      {/* Window Header */}
      <div id="window-header">
        <Windowcontrol target="finder" />
        <Search className="icon" />
      </div>

      {/* Window Body */}
      <div className="bg-white flex h-full">
        <div className="sidebar">
          {/* Favourites */}
          <div>
            <h3>Favourites</h3>
            <ul>{renderList(Object.values(locations))}</ul>
          </div>

          {/* Work */}
          <div>
            <h3>Work</h3>
            <ul>{renderList(locations.work.children)}</ul>
          </div>
        </div>
     
      <ul className="content">
        {
            activeLocation.children.map((item)=>(
                <li key={item.id} 
                className={item.position}
                onClick={()=> openItems(item)}
                >
                    <img src={item.icon} alt={item.name}/>
                    <p>{item.name}</p>
                </li>
            ))
        }
      </ul>
       </div>
    </>
  );
};

const FinderWindow = windowWrapper(Finder, "finder");
export default FinderWindow;