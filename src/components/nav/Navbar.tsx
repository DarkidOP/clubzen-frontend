import React from "react";
import Link from "next/link";
import Image from "next/image";
// icon import
import { ShoppingCart, Bell } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";
import ProfileDropDown from "@/components/nav/menu-dropdown/ProfileDropDown";

const Navbar = () => {
  return (
    <nav className="bg-nutralDark700 fmax-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2 px-5">
      <ul className="flex items-center space-x-4">
        <Link href="/home">
          <li className="p-1 px-3 bg-primary/20 text-primary font-semibold rounded-sm">
            Join the club
          </li>
        </Link>
        <Link href="/services">
          <li>Services</li>
        </Link>
        <Link href="/services#combos">
          <li>Combos</li>
        </Link>
        <Link href="/contact">
          <li>Contact us</li>
        </Link>
      </ul>
      <Link href="/">
        <div className="place-self-center">
          <Image
            className=""
            src="/clubzen-icon.svg"
            height={50}
            width={50}
            alt="clubzen"
            priority={false}
          ></Image>
        </div>
      </Link>
      <ul className="flex items-center space-x-3">
        <li>
          <Button
            size="sm"
            variant="iconSecondary"
            className="px-2 h-10 rounded-xl"
          >
            <Bell className="h-5" />
          </Button>
        </li>
        <li>
          <Link href="/cart">
            <Button
              size="sm"
              variant="iconPrimary"
              className="px-2 h-10 rounded-xl"
            >
              <ShoppingCart className="h-5" />
            </Button>
          </Link>
        </li>
        <li>
          <button className="felx items-center align-middle">
            <ProfileDropDown>
              <Avatar>
                <AvatarImage src="https://cdn.discordapp.com/avatars/522340125380706314/701f5bcb939221320c9845c00229b438.webp" />
                <AvatarFallback>?</AvatarFallback>
              </Avatar>
            </ProfileDropDown>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
