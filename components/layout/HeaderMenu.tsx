import Image from "next/image";
import React from "react";
import avatar from "../../public/profile.png";
import {
  AiOutlineHome,
  AiOutlineTags,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import Link from "next/link";
import { useRouter } from "next/router";

const NavTable = {
  "/": {
    name: "Home",
    icon: <AiOutlineHome />,
  },
  "/tags": {
    name: "Tags",
    icon: <AiOutlineTags />,
  },
  "/search": {
    name: "Search",
    icon: <AiOutlineSearch />,
  },
  "/profile": {
    name: "Profile",
    icon: <AiOutlineUser />,
  },
};

interface HeaderMenuProps {
  isMenuOpen: boolean;
}

const HeaderMenu = ({ isMenuOpen }: HeaderMenuProps) => {
  const { asPath } = useRouter();

  return (
    <aside
      className={`z-50 bg-white fixed top-0 bottom-0 w-3/5 max-w-sm transition-all duration-200 shadow-xl ${
        isMenuOpen ? "left-0" : "-left-[60%]"
      }`}
    >
      <div className="py-10 flex flex-col h-full">
        <div className="relative w-full h-1/6 mx-auto">
          <Image
            src={avatar}
            alt="Profile Image"
            objectFit="contain"
            layout="fill"
          />
        </div>
        <h1 className="text-center font-semibold text-xl text-gray-800 ">
          <Link href="/profile">
            <a>YOONVELOP</a>
          </Link>
        </h1>
        <ul className="mt-8 flex flex-col font-light text-gray-500">
          {Object.entries(NavTable).map(([href, value]) => (
            <li
              key={href}
              className={`text-xl hover:bg-rose-50 duration-300 ease-in-out ${
                asPath === href ? "text-black font-medium" : ""
              }`}
            >
              <Link href={href}>
                <a className="flex flex-row gap-2 items-center px-10 py-6">
                  {value.name}
                  <span>{value.icon}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default HeaderMenu;
