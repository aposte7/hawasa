"use client";

import MainFeed from "./_components/main-feed";
import RightSidebar from "./_components/right-sidebar";
import Sidebar from "~~/components/sidebar";

export default function Home() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar isWalletConnected={false} walletAddress="0x1A2B3C4D5E6F7G8H9I0J" />

      <MainFeed isWalletConnected={false} walletAddress={null} />

      <RightSidebar isWalletConnected={false} />
    </div>
  );
}
