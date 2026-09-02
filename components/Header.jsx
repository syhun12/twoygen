"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navGroups } from "@/lib/siteData";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (group) => {
    if (group.label === "회사소개") return pathname.startsWith("/company");
    if (group.label === "사업분야") return pathname.startsWith("/business");
    if (group.label === "제품소개") return pathname.startsWith("/products");
    if (group.label === "기술력") return pathname.startsWith("/technology");
    if (group.label === "납품실적") return pathname.startsWith("/performance");
    if (group.label === "고객지원") return pathname.startsWith("/support");
    return false;
  };

  const hasSubmenu = (group) => group.label !== "사업분야" && group.items?.length > 0;

  return (
    <header className="site-header">
      <div className="container header-main">
        <Link className="brand" href="/" aria-label="TWOYGEN 홈">
          <img src="/assets/twoygen-logo-reference.svg" alt="TWOYGEN DESIGN & ENG" />
        </Link>

        <nav className="desktop-nav" aria-label="주 메뉴">
          {navGroups.map((group) => (
            <div className={`nav-group ${hasSubmenu(group) ? "has-submenu" : "no-submenu"}`} key={group.label}>
              <Link className={`nav-link ${isActive(group) ? "active" : ""}`} href={group.href}>
                {group.label === "고객지원" ? "공지/문의" : group.label}
              </Link>
              {hasSubmenu(group) && (
                <div className="mega-menu compact">
                  {group.items.map((item) => (
                    <Link key={item.href} href={item.href}>{item.label}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="header-utility">
          <Link href="/">HOME</Link><i></i>
          <Link href="/support/contact">CONTACT US</Link><i></i>
          <span>KOR⌄</span>
        </div>

        <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-label="모바일 메뉴 열기">
          <span></span><span></span><span></span>
        </button>
      </div>

      {open && (
        <div className="mobile-nav">
          <div className="container mobile-nav-inner">
            {navGroups.map((group) => (
              <div className={`mobile-group ${hasSubmenu(group) ? "has-submenu" : "no-submenu"}`} key={group.label}>
                <Link href={group.href} onClick={() => setOpen(false)}>
                  {group.label === "고객지원" ? "공지/문의" : group.label}
                </Link>
                {hasSubmenu(group) && (
                  <div>
                    {group.items.map((item) => (
                      <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
