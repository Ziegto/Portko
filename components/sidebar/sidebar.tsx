"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const pathUrl = usePathname();

  return (
    <aside className={`aside ${open ? "open" : ""}`}>
      <div onClick={handleOpen} className="nav-toggler">
        <span />
      </div>
      <div className="aside-inner">
        <div className="logo">
          <Link href="/" onClick={handleClose}>
            <img className="logo" src="/imgs/logo.png"/>
          </Link>
        </div>
        <ul className="nav">
          <li onClick={handleClose}>
            <Link href="/" className={`${pathUrl == "/" && "active"}`}>
              <i className="fa fa-home" /> Home
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/about"
              className={`${pathUrl == "/about" && "active"}`}
            >
              <i className="fa fa-user" /> O mne
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/services"
              className={`${pathUrl == "/services" && "active"}`}
            >
              <i className="fa fa-list" /> Služby
            </Link>
          </li>
          <li onClick={handleClose}>
            <Link
              href="/portfolio"
              className={`${pathUrl == "/portfolio" && "active"}`}
            >
              <i className="fa fa-briefcase" /> Technologie
            </Link>
          </li>
          {/*<li onClick={handleClose}>*/}
          {/*  <Link href="/blog" className={`${pathUrl == "/blog" && "active"}`}>*/}
          {/*    <i className="fa fa-envelope" /> Blog*/}
          {/*  </Link>*/}
          {/*</li>*/}
          <li onClick={handleClose}>
            <Link
              href="/contact"
              className={`${pathUrl == "/contact" && "active"}`}
            >
              <i className="fa fa-comments" /> Kontakt
            </Link>
          </li>
        </ul>
        <div className="copyright">
          <p>Tomáš Ziegler</p><br/>
          <p>Jateční 7a</p><br/>
          <p>Opava-Předměstí</p><br/>
          <p>746 01</p><br/>
          <p>IČO: 21176582</p><br/>
          <p>Fyzická osoba zapsaná v Živnostenském rejstříku v Opavě od 25.1.2024</p><br/>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
