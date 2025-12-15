import React, { useLayoutEffect } from 'react';
import { locations } from '#constants';
import clsx from 'clsx';
import { useGSAP } from '@gsap/react';
import Draggable from 'gsap/Draggable';
import gsap from 'gsap';
import useWindowStore from '#store/window';
import useLocationStore from '#store/Location';

gsap.registerPlugin(Draggable);

const projects = locations?.work?.children ?? [];

export const Home = () => {
  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  const handleProject = (project) => {
    setActiveLocation(project);
    openWindow('finder');
  };

  useLayoutEffect(() => {
    projects.forEach((project, index) => {
      const el = document.getElementById(`folder-${project.id}`);
      if (!el) return;

      // restore position
      const saved = localStorage.getItem(`folder-${project.id}`);
      if (saved) {
        const { x, y } = JSON.parse(saved);
        gsap.set(el, { x, y });
      } else {
        gsap.set(el, { x: 40, y: 40 + index * 120 });
      }

      Draggable.create(el, {
        type: 'x,y',
        bounds: '#home',
        inertia: true,
        onDragEnd() {
          localStorage.setItem(
            `folder-${project.id}`,
            JSON.stringify({ x: this.x, y: this.y })
          );
        },
      });
    });
  }, []);

  return (
    <section id="home">
      <ul>
        {projects.map((project) => (
          <li
            key={project.id}
            id={`folder-${project.id}`}
            className={clsx('group folder', project.windowPosition)}
            onDoubleClick={() => handleProject(project)}
          >
            <img src="/images/folder.png" alt={project.name} />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};
