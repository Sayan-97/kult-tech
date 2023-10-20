"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";

export default function Header() {
  const [navAtTop, setNavAtTop] = useState(true);
  const [navOpen, setNavOpen] = useState(false);

  const links = [
    { label: "Home", link: "/" },
    { label: "Features", link: "/" },
    { label: "Team", link: "/" },
    { label: "Roadmap", link: "/" },
    { label: "Blog", link: "/" },
    { label: "Contact", link: "/" },
  ];

  const NavLinks = () => (
    <ul className="flex max-lg:flex-col items-center max-lg:space-y-4 lg:space-x-8">
      {links.map((item, index) => (
        <Link key={index} href={item.link}>
          {item.label}
        </Link>
      ))}
    </ul>
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Check if the scroll direction is up or down
      if (currentScrollY > 0) {
        setNavAtTop(false); // Scrolling down
      } else {
        setNavAtTop(true); // Scrolling up
      }
    };
    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 ${
        navAtTop
          ? "py-6 max-lg:bg-[#5416E9] max-lg:bg-opacity-20 max-lg:backdrop-blur-xl max-lg:shadow-xl"
          : "py-3 bg-[#5416E9] bg-opacity-20 backdrop-blur-xl shadow-xl"
      } transition-all duration-500 ease-in-out`}
    >
      <nav className="container flex items-center justify-between">
        {/* Navbar Logo */}
        <Image
          src={`/svgs/kult-brand.svg`}
          alt="img"
          width={123}
          height={37}
          priority={true}
        />
        <div className="hidden lg:block">
          <NavLinks />
        </div>
        <Link href={`/`} className="hidden lg:block">
          <Button name="Contact Us" />
        </Link>
        <div className="block lg:hidden text-3xl">
          {!navOpen ? (
            <MdOutlineMenu onClick={() => setNavOpen(true)} />
          ) : (
            <MdOutlineClose onClick={() => setNavOpen(false)} />
          )}
        </div>
      </nav>
      {navOpen && (
        <div className="absolute inset-x-0 top-[100%] bg-blue-900 shadow-xl">
          <div className="container py-4 flex flex-col items-center gap-4">
            <NavLinks />
            <Link href={`/`}>
              <Button name="Contact Us" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}