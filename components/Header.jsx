"use client";

import { useState } from "react";
import Link from "next/link";
import { navGroups } from "@/lib/siteData";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-top">
        <div className="container header-top-inner">
          <span>Extreme Environment Valve Technology</span>
          <div className="utility-links">
            <Link href="/">HOME</Link>
            <Link href="/support/contact">CONTACT US</Link>
            <span className="lang">KOR <span>⌄</span></span>
          </div>
        </div>
      </div>
      <div className="container header-main">
        <Link className="brand" href="/" aria-label="TWOYGEN 홈">
          <img src="/logo.svg" alt="TWOYGEN" />
        </Link>

        <nav className="desktop-nav" aria-label="주 메뉴">
          {navGroups.map((group) => (
            <div className="nav-group" key={group.label}>
              <Link className="nav-link" href={group.href}>{group.label}</Link>
              <div className="mega-menu">
                <div className="mega-menu-title">
                  <strong>{group.label}</strong>
                  <span>{group.description}</span>
                </div>
                <div className="mega-menu-links">
                  {group.items.map((item) => (
                    <Link key={item.href} href={item.href}>{item.label}<span>↗</span></Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>

        <button className="menu-toggle" type="button" onClick={() => setOpen(!open)} aria-label="모바일 메뉴 열기">
          <span></span><span></span><span></span>
        </button>
      </div>

      {open && (
        <div className="mobile-nav">
          <div className="container mobile-nav-inner">
            {navGroups.map((group) => (
              <div className="mobile-group" key={group.label}>
                <Link href={group.href} onClick={() => setOpen(false)}>{group.label}</Link>
                <div>
                  {group.items.map((item) => (
                    <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
