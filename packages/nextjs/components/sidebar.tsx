"use client";

import type React from "react";
import Link from "next/link";
import { BellAlertIcon, GlobeEuropeAfricaIcon, HomeIcon, UserCircleIcon } from "@heroicons/react/20/solid";

interface SidebarProps {
  isWalletConnected?: boolean;
  walletAddress?: string | null;
}

export default function Sidebar({ isWalletConnected, walletAddress }: SidebarProps) {
  return (
    <div className="w-64 border-r border-border bg-card flex flex-col p-6 sticky top-0 h-screen overflow-y-auto">
      <Link href="/" className="flex items-center gap-3 mb-10 hover:opacity-80 transition">
        <div className="w-10 h-10 bg-gradient-to-br from-accent to-accent/60 rounded-full flex items-center justify-center shadow-lg">
          <span className="text-foreground font-bold text-lg">N</span>
        </div>
        <span className="text-2xl font-bold text-foreground">Nexus</span>
      </Link>

      <nav className="space-y-4 flex-1">
        <NavLink href="/" icon={<HomeIcon className="size-6" />} label="Home" active />
        <NavLink href="/explore" icon={<GlobeEuropeAfricaIcon className="size-6" />} label="Explore" />
        <NavLink href="/notifications" icon={<BellAlertIcon className="size-6" />} label="Notifications" />
        <NavLink href="/profile" icon={<UserCircleIcon className="size-6" />} label="Profile" />
      </nav>

      <div className="space-y-3 border-t border-border pt-4">
        <button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-3 px-4 rounded-full transition shadow-lg text-lg">
          Post
        </button>

        {isWalletConnected && walletAddress ? (
          <div className="bg-secondary/60 border border-accent/20 rounded-2xl p-4">
            <p className="text-xs text-muted-foreground mb-2">Connected Wallet</p>
            <p className="text-sm font-mono text-accent font-semibold truncate">{walletAddress}</p>
            <button className="mt-3 w-full text-sm text-foreground hover:bg-border/30 py-2 rounded-lg transition font-medium">
              Disconnect
            </button>
          </div>
        ) : (
          <button className="w-full border border-accent text-accent font-bold py-2 px-4 rounded-full hover:bg-accent/10 transition">
            Connect Wallet
          </button>
        )}
      </div>
    </div>
  );
}

function NavLink({
  href,
  icon,
  label,
  active = false,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) {
  return (
    <Link href={href}>
      <button
        className={`w-full flex items-center gap-4 px-4 py-3 rounded-full transition font-semibold text-lg ${
          active
            ? "bg-accent/15 text-accent border border-accent/30"
            : "text-foreground hover:bg-secondary/50 border border-transparent"
        }`}
      >
        {icon}
        <span>{label}</span>
      </button>
    </Link>
  );
}
