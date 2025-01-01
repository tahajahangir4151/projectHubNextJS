import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="px-5 py-3 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href={"/"}>
          <Image
            src={"https://projects.deerwalk.edu.np/images/projectHub.png"}
            alt=""
            width={164}
            height={40}
          />
        </Link>
        <div className="flex items-center gap-5 text-black">
          <Link href={"/"}>
            <span className="text-2 font-sans max-sm:hidden">Create</span>
          </Link>
          <Link href={"/"}>
            <span className="text-2 font-sans max-sm:hidden">Logout</span>
          </Link>
          <Link href={"/"}>Username</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
