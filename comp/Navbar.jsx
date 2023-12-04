"use client";

import Link from "next/link";
import { useState } from "react";
import { motion as m } from "framer-motion";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <main className="nav">
      <div className="navBar">
        <Link href="/" onClick={toggle} className="navLinks">
          Home
        </Link>
        <Link href="/works" onClick={toggle} className="navLinks">
          Works
        </Link>
        <Link href="/works#achievements" onClick={toggle} className="navLinks">
          Achievements
        </Link>
      </div>
    </main>
  );
};

export default Navbar;
