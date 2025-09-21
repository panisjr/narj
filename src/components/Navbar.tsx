"use client";
import Link from "next/link";
import React from "react";
import { topBarLinkTypes } from "./Types";

const topbarLink: topBarLinkTypes[] = [
  {
    name: "NEW ARRIVAL",
    link: "#",
    routes: ["#"],
  },
  {
    name: "SHOP",
    link: "#",
    routes: ["#"],
  },
  {
    name: "STUDIO NA",
    link: "#",
    routes: ["#"],
  },
  {
    name: "ABOUT",
    link: "#",
    routes: ["#"],
  },
];
export default function Header() {
  return (
    <div className="w-full border-b shadow-md px-10 py-5 flex flex-row items-center justify-between">
      <div className="flex flex-row items-center justify-between w-full">
        {topbarLink.map((item, index) => (
          <Link href={"#"} key={index} className="text-[13px] font-poppins group">
            {item.name}
            <div className="border-b border-b-[#3d3d3d] w-0 group-hover:w-[80%] duration-300 transition-all ease-in-out"></div>
          </Link>
        ))}
        <p className="text-3xl font-medium font-libre tracking-widest">NARJ</p>
      </div>
      <div className="flex flex-row items-center justify-end gap-5 w-full font-poppins">
        <Link href={"#"} className="group text-[13px]">
          ACCOUNT
          <div className="border-b border-b-[#3d3d3d] w-0 group-hover:w-[80%] transition-all duration-300 ease-in-out"></div>
        </Link>
        <Link href={"#"} className="group text-[13px]">
          CAST
          <div className="border-b border-b-[#3d3d3d] w-0 group-hover:w-[80%] transition-all duration-300 ease-in-out"></div>
        </Link>
      </div>
    </div>
  );
}
