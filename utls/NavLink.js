"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const NavLink = ({ children, href, className, activeClassName }) => {
    const pathname = usePathname();
    const isActive = pathname === href;
   

    return (
        <Link href={href} className={isActive ? `${className} ${activeClassName}` : className}>
            {children}
        </Link>
    );
};

export default NavLink;
