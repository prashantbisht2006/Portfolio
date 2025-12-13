import React from 'react';
import Navbar from '#components/Navbar';
import Welcome from '#components/Welcome';
import TerminalWindow from '#windows/Terminall';
import Safari from '#windows/Safari';
import { Dock } from '#components/Dock';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import Finder from '#windows/Finder';

import Resumewindow from '#windows/Resume';

gsap.registerPlugin(Draggable);
const App = () => {
  return (
    <main>
      <Navbar/>
      <Welcome/>
      <Dock/>
      <TerminalWindow/>
      <Safari/>
      <Resumewindow/>
      <Finder/>
    </main>
  )
}

export default App;