"use client";

import PostComponent from "./post";
import PostComposer from "./post-composer";

const MOCK_POSTS = [
  {
    id: "1",
    author: "Alex Chen",
    avatar: "AC",
    walletAddress: "0x1A2B3C4D5E6F7G8H9I0J",
    timestamp: "2h",
    content:
      "Just launched my new DeFi protocol on mainnet. The gas optimization is next level. Can't wait to see how the community responds to this!",
    likes: 2345,
    comments: 456,
    shares: 123,
  },
  {
    id: "2",
    author: "Jordan Kim",
    avatar: "JK",
    walletAddress: "0x2C3D4E5F6G7H8I9J0K1L",
    timestamp: "4h",
    content:
      "Web3 development tooling has come so far. Building cross-chain applications is now as simple as traditional web dev. Amazing progress! 🚀",
    likes: 5678,
    comments: 890,
    shares: 234,
  },
  {
    id: "3",
    author: "Sam Rivera",
    avatar: "SR",
    walletAddress: "0x3D4E5F6G7H8I9J0K1L2M",
    timestamp: "6h",
    content:
      "Discovered a critical pattern for optimizing smart contract execution. Sharing the technical writeup later today. This could save projects thousands in gas fees.",
    likes: 8923,
    comments: 1567,
    shares: 456,
  },
  {
    id: "4",
    author: "Morgan Lee",
    avatar: "ML",
    walletAddress: "0x4E5F6G7H8I9J0K1L2M3N",
    timestamp: "8h",
    content:
      "The state of blockchain gaming is evolving rapidly. We're seeing real innovation in player economics and on-chain mechanics. Exciting times ahead!",
    likes: 4521,
    comments: 723,
    shares: 189,
  },
  {
    id: "5",
    author: "Casey Park",
    avatar: "CP",
    walletAddress: "0x5F6G7H8I9J0K1L2M3N4O",
    timestamp: "10h",
    content:
      "Community governance is the future. Just participated in a DAO vote and realized how powerful distributed decision-making can be. #Web3",
    likes: 3214,
    comments: 567,
    shares: 98,
  },
];

interface MainFeedProps {
  isWalletConnected?: boolean;
  walletAddress?: string | null;
}

export default function MainFeed({ isWalletConnected, walletAddress }: MainFeedProps) {
  return (
    <div className="flex-1 border-r border-border max-w-2xl overflow-y-auto">
      {/* Sticky Header */}
      <div className="sticky top-0 bg-background/70 backdrop-blur-md border-b border-border px-6 py-4 z-20">
        <h2 className="text-xl font-bold text-foreground">Home</h2>
        <p className="text-xs text-muted-foreground mt-1">Welcome to Nexus, the Web3 social network</p>
      </div>

      <div className="sticky top-20 bg-background/70 backdrop-blur-md border-b border-border z-10">
        {isWalletConnected && <PostComposer walletAddress={walletAddress} />}
      </div>

      {/* Posts Feed */}
      <div className="divide-y divide-border">
        {MOCK_POSTS.map(post => (
          <PostComponent key={post.id} {...post} />
        ))}
      </div>

      {/* Load More */}
      <div className="p-6 text-center border-b border-border hover:bg-secondary/30 transition cursor-pointer">
        <p className="text-muted-foreground font-semibold">Load more posts</p>
      </div>
    </div>
  );
}
