import React from "react";
import windowWrapper from "../HOC/windowWrapper";
import Windowcontrol from "#components/windowcontrol";
import { socials } from "#constants"; // ✅ FIX 1

const Contacts = () => {
  return (
    <>
      <div id="window-header">
        <Windowcontrol target="contact" />
        <h2>Contact Me</h2>
        <p>prashantbisht284@gmail.com</p>
      </div>

      <div className="p-5 space-y-5">
        <img
          src="/images/adrian.jpg"
          alt="Adrian"
          className="w-20 rounded-full"
        />

        <h3 className="text-lg font-semibold">Let’s Connect</h3>

        <p>aao kabhi haveli pe 😄</p>

        <ul className="space">
          {socials.map(({ id, bg, link, icon, text }) => (
            <li
              key={id}
              style={{ backgroundColor: bg }}
              className="rounded-lg"
            >
              <a
                href={link}
                target="_blank" // ✅ FIX 2
                rel="noopener noreferrer"
                title={text}
                className="flex items-center gap-3 p-3"
              >
                <img src={icon} alt={text} className="size-6" />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = windowWrapper(Contacts, "contact");
export default ContactWindow;
