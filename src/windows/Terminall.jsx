import React from 'react';
import windowWrapper from '../HOC/windowWrapper';

const Terminall = () => {
  return (
    <>
      <div id="window-header">
        <p>Window Control</p>
        <h2>Tech Stack</h2>
      </div>

      <div className="techstack">
        <p>
          <span className="font-bold">Prashant</span> _show tech stack
        </p>
      </div>
    </>
  );
};

const TerminalWindow = windowWrapper(Terminall, "terminal");


export default TerminalWindow;
