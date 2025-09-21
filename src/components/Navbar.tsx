"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { topBarLinkTypes } from "./Types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AlignJustify } from "lucide-react";
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
  const [isWidth, setIsWidth] = useState<boolean | null>(null);
  useEffect(() => {
    const checkScreen = () => {
      const currentWidth = window.innerWidth;
      const isNowMobile = currentWidth <= 1024;
      setIsWidth(isNowMobile);
    };

    checkScreen(); // Run immediately after hydration
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  if (isWidth === null) {
    // Optional: show loader or nothing until screen size is known
    return null;
  }
  return (
    <>
      {!isWidth ? (
        <div className="w-full border-b shadow-md px-10 py-5 flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-between w-full">
            {topbarLink.map((item, index) => (
              <Link
                href={"#"}
                key={index}
                className="text-[13px] font-poppins group"
              >
                {item.name}
                <div className="border-b border-b-[#3d3d3d] w-0 group-hover:w-[80%] duration-300 transition-all ease-in-out"></div>
              </Link>
            ))}
            <p className="text-3xl font-medium font-libre tracking-widest">
              NARJ
            </p>
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
      ) : (
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="w-full px-5">
            <AccordionTrigger className="[&>svg]:hidden">
              <div className="p-2 hover:cursor-pointer">
                <AlignJustify className="text-[#0D3531] w-8 h-8" />
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-5 px-5 border-b">
                {topbarLink.map((item, index) => (
                  <Link
                    href={"#"}
                    key={index}
                    className="text-[13px] font-poppins group"
                  >
                    {item.name}
                    <div className="border-b border-b-[#3d3d3d] w-0 group-hover:w-[80%] duration-300 transition-all ease-in-out"></div>
                  </Link>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </>
  );
}
