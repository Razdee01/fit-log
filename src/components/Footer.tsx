import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-[#0b0d10]">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 py-5 md:flex-row">

        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* <span className="text-xl font-black text-lime-400">⚡</span> */}
          <Link href="/" className="btn btn-ghost text-xl">
            <Image src={logo} alt="logo" />
            <p>FITLOG</p>
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-center text-[10px] text-gray-500 md:text-right">
          © 2026 FitLog — Workout Library. Train hard, log honestly.
        </p>

      </div>
    </footer>
  );
};

export default Footer;