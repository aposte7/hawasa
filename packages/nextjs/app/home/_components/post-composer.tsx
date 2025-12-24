"use client";

import { BoltIcon, PhotoIcon } from "@heroicons/react/20/solid";

interface PostComposerProps {
  walletAddress?: string | null;
}

export default function PostComposer({ walletAddress }: PostComposerProps) {
  const shortAddress = walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : "Connect Wallet";

  return (
    <div className="border-b border-border p-6 bg-card hover:bg-card/80 transition">
      <div className="flex gap-4">
        {/* Avatar */}
        <div>
          <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/60 rounded-full flex-shrink-0 flex items-center justify-center shadow-lg">
            <span className="text-accent-foreground font-bold text-sm">YOU</span>
          </div>
          <span className="text-sm">{shortAddress}</span>
        </div>

        {/* Composer */}
        <div className="flex-1">
          <div className="bg-secondary/50 rounded-2xl px-4 py-3 mb-3 border border-border/50 hover:border-accent/30 transition">
            <textarea
              placeholder="What's happening on-chain?"
              className="w-full bg-transparent text-base text-foreground placeholder-muted-foreground resize-none focus:outline-none"
              rows={3}
            />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-accent/10 rounded-full transition text-accent">
                <BoltIcon className="size-5" />
              </button>
              <button className="p-2 hover:bg-accent/10 rounded-full transition text-accent">
                <PhotoIcon className="size-5" />
              </button>
            </div>
            <button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-6 py-2 rounded-full transition shadow-lg">
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
