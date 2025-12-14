import React from 'react';
import Navbar from '#components/Navbar';
import Welcome from '#components/Welcome';
import TerminalWindow from '#windows/Terminall';
import Safari from '#windows/Safari';
import { Dock } from '#components/Dock';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import TextWindow from '#windows/Text';
import Finder from '#windows/Finder';
import ImageWindow from '#windows/Image';
import ContactWindow from '#windows/Contacts';

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
      <TextWindow/>
      <ImageWindow/>
      <ContactWindow/>
    </main>
  )
}

export default App;