"use client";

import { navItems } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="border-b py-2 flex gap-4 px-4 justify-between items-center">
      <Link className=" " href="/">
        <Image
          src="/images/logo.jpg"
          alt="logo"
          width="40"
          height="40"
          className="object-fill"
        />
      </Link>
      <div className="flex gap-4 flex-1 justify-end">
        {navItems.map((items, i) => {

            const activeLink = pathname === items.link;
          return (
            <Link key={i} href={items.link} className={`hover:text-green-600 ${activeLink ? 'text-blue-500 underline':'text-gray-500'}`}>
              {items.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;
