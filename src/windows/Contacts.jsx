import React from "react";
import windowWrapper from "../HOC/windowWrapper";
import Windowcontrol from "#components/windowcontrol";
import { socials } from "#constants"; 
import { Copy } from "lucide-react";

const Contacts = () => {
  return (
    <>
      <div id="window-header">
        <Windowcontrol target="contact" />
        <h2>Contact Me</h2>
        <p>prashantbisht284@gmail.com</p>
        <Copy
  className="icon cursor-pointer"
  onClick={() => {
    navigator.clipboard.writeText("prashantbisht284@gmail.com");
    alert("Email copied!");
  }}
  title="Copy email"
/>

      </div>

      <div className="p-5 space-y-5">
        <img
          src="/images/prashant.PNG"
          alt="Adrian"
          className="w-20 rounded-full"
        />

        <h3 className="text-lg font-semibold">Let’s Connect</h3>

        <p>I am passionate about building great solutions and always open to discussing new projects, creative opportunities, or collaborations. Feel free to connect!</p>

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
