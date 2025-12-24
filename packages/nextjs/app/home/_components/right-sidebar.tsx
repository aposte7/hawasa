"use client";

import {
  ArrowTrendingUpIcon,
  ChatBubbleLeftIcon,
  MagnifyingGlassIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";

interface RightSidebarProps {
  isWalletConnected?: boolean;
}

export default function RightSidebar({ isWalletConnected }: RightSidebarProps) {
  return (
    <div className="w-80 border-l border-border bg-card sticky top-0 h-screen p-6 overflow-y-auto">
      {/* Search */}
      <div className="mb-6 relative">
        <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground size-6" />
        <input
          type="text"
          placeholder="Search Nexus"
          className="w-full bg-secondary text-foreground placeholder-muted-foreground rounded-full pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-accent/50 transition border border-border/50"
        />
      </div>

      {/* What's Happening */}
      <div className="bg-secondary/50 border border-border/50 rounded-2xl p-5 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <ArrowTrendingUpIcon className="text-accent size-6" />
          <h3 className="text-xl font-bold text-foreground">What is Happening</h3>
        </div>
        <div className="space-y-1">
          {TRENDING_TOPICS.map((topic, index) => (
            <TrendingItem key={index} {...topic} />
          ))}
        </div>
      </div>

      {/* Suggested Profiles */}
      <div className="bg-secondary/50 border border-border/50 rounded-2xl p-5 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <UserPlusIcon className="text-accent size-6" />
          <h3 className="text-xl font-bold text-foreground">Suggested Profiles</h3>
        </div>
        <div className="space-y-3">
          {SUGGESTED_PROFILES.map((profile, index) => (
            <SuggestedProfile key={index} {...profile} />
          ))}
        </div>
      </div>

      {/* Network Status */}
      <div className="bg-secondary/50 border border-border/50 rounded-2xl p-5">
        <h3 className="text-sm font-bold text-foreground mb-4 flex items-center gap-2">
          <ChatBubbleLeftIcon className="size-6" />
          Network Status
        </h3>
        <div className="space-y-3">
          <StatusItem label="Network" value="Ethereum" badge="ETH" />
          <StatusItem label="Status" value="Connected" badge="●" badgeColor="text-green-500" />
          {isWalletConnected && <StatusItem label="Wallet" value="Ready" badge="✓" badgeColor="text-accent" />}
        </div>
      </div>
    </div>
  );
}

function TrendingItem({ category, title, posts }: { category: string; title: string; posts: number }) {
  return (
    <button className="w-full hover:bg-secondary rounded-lg p-3 transition text-left group">
      <p className="text-xs text-muted-foreground group-hover:text-foreground/70 transition">{category}</p>
      <p className="text-foreground font-bold text-sm group-hover:text-accent transition">{title}</p>
      <p className="text-xs text-muted-foreground">{posts.toLocaleString()} posts</p>
    </button>
  );
}

function SuggestedProfile({ name, handle, avatar }: { name: string; handle: string; avatar: string }) {
  return (
    <div className="flex items-center justify-between p-3 hover:bg-secondary rounded-lg transition group">
      <div className="flex items-center gap-3 flex-1 min-w-0">
        <div className="w-10 h-10 bg-gradient-to-br from-accent/40 to-accent/10 rounded-full flex-shrink-0 flex items-center justify-center border border-accent/30 group-hover:border-accent/60 transition">
          <span className="text-accent font-bold text-xs">{avatar}</span>
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-bold text-foreground truncate group-hover:text-accent transition">{name}</p>
          <p className="text-xs text-muted-foreground truncate">{handle}</p>
        </div>
      </div>
      <button className="flex-shrink-0 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold hover:bg-accent/90 transition">
        Follow
      </button>
    </div>
  );
}

function StatusItem({
  label,
  value,
  badge,
  badgeColor = "text-accent",
}: {
  label: string;
  value: string;
  badge: string;
  badgeColor?: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-semibold text-foreground">{value}</p>
      </div>
      <span className={`text-xs font-bold ${badgeColor}`}>{badge}</span>
    </div>
  );
}

const TRENDING_TOPICS = [
  { category: "Technology", title: "Smart Contracts", posts: 45230 },
  { category: "Blockchain", title: "Layer 2 Solutions", posts: 32156 },
  { category: "Web3", title: "DeFi Protocols", posts: 28945 },
  { category: "Community", title: "Ethereum Staking", posts: 19876 },
  { category: "News", title: "Crypto Adoption", posts: 15342 },
];

const SUGGESTED_PROFILES = [
  { name: "Vitalik V.", handle: "@vitalik", avatar: "VV" },
  { name: "Raoul Pal", handle: "@RaoulGMI", avatar: "RP" },
  { name: "Bankless", handle: "@banklessHQ", avatar: "B" },
  { name: "LayerZero", handle: "@LayerZero_Labs", avatar: "LZ" },
];
