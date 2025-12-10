import React from 'react';
import windowWrapper from '../HOC/windowWrapper';
import { Check } from 'lucide-react';
import { techStack } from '#constants';

const Terminall = () => {
  return (
    <>
      <div id="window-header">
        <p>Window Control</p>
        <h2>Tech Stack</h2>
      </div>

      <div className="techstack">
        <p>
          <span className="font-bold">Prashant</span> 
        </p>

        <div className='label'>
          <p className='w-32'>Category</p>
          <p>Technologies</p>
        </div>

        <ul className='content'>
          {techStack.map(({ category, items }) => (
            <li key={category} className='flex items-center'>
              <Check className='check' size={20}/>
              <h3>{category}</h3>

              <ul>
                {items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const TerminalWindow = windowWrapper(Terminall, "terminal");

export default TerminalWindow;
