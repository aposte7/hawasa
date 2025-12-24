"use client";

import { useState } from "react";
import { ChatBubbleOvalLeftIcon, HeartIcon, ShareIcon } from "@heroicons/react/16/solid";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { ChatBubbleBottomCenterIcon } from "@heroicons/react/24/solid";

interface PostProps {
  author: string;
  avatar: string;
  walletAddress: string;
  timestamp: string;
  content: string;
  likes: number;
  comments: number;
  shares: number;
}

export default function Post({
  author,
  avatar,
  walletAddress,
  timestamp,
  content,
  likes,
  comments,
  //shares,
}: PostProps) {
  const [showComments, setShowComments] = useState(false);

  const shortAddress = `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`;

  // Mock comments data
  const mockComments = [
    {
      id: "c1",
      author: "Dev Builder",
      avatar: "DB",
      address: "0xABCD...1234",
      timestamp: "1h",
      content: "This is exactly what we needed in the ecosystem!",
    },
    {
      id: "c2",
      author: "Blockchain Dev",
      avatar: "BD",
      address: "0xEFGH...5678",
      timestamp: "2h",
      content: "Great insights on the optimization. Looking forward to the writeup.",
    },
  ];

  return (
    <div className="border-b border-border group">
      <div className="p-6 hover:bg-secondary/30 transition">
        <div className="flex gap-4">
          {/* Avatar */}
          <div className="w-12 h-12 bg-gradient-to-br from-accent/30 to-accent/10 rounded-full flex-shrink-0 flex items-center justify-center border border-accent/30 group-hover:border-accent/60 transition">
            <span className="text-accent font-bold text-sm">{avatar}</span>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-bold text-foreground hover:underline cursor-pointer">{author}</span>
              <span className="text-muted-foreground text-sm">@{shortAddress}</span>
              <span className="text-muted-foreground text-sm">·</span>
              <span className="text-muted-foreground text-sm">{timestamp}</span>
            </div>

            {/* Text */}
            <p className="text-foreground text-base mt-3 break-words leading-relaxed">{content}</p>

            <div className="flex gap-8 mt-4 text-muted-foreground text-sm max-w-md">
              <button
                onClick={() => setShowComments(!showComments)}
                className="flex items-center gap-2 hover:text-accent hover:bg-accent/10 px-2 py-1 rounded transition group/btn"
              >
                <ChatBubbleOvalLeftIcon className="group-hover/btn:scale-110 size-5 transition" />
                <span>{comments}</span>
              </button>

              <button className="flex items-center gap-2 hover:text-red-500 hover:bg-red-500/10 px-2 py-1 rounded transition group/btn">
                <HeartIcon className="group-hover/btn:scale-110 size-5 transition" />
                <span>{likes}</span>
              </button>
              <button className="flex items-center gap-2 hover:text-accent hover:bg-accent/10 px-2 py-1 rounded transition group/btn">
                <ShareIcon className="group-hover/btn:scale-110 size-5 transition" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {showComments && (
        <div className="border-t border-border bg-secondary/20">
          <div className="px-6 py-3 flex items-center justify-between border-b border-border">
            <h3 className="font-bold text-foreground text-sm">Replies</h3>
            <button
              onClick={() => setShowComments(false)}
              className="p-1 hover:bg-secondary rounded transition text-muted-foreground"
            >
              <XMarkIcon className="size-5" />
            </button>
          </div>

          {/* Reply composer */}
          <div className="p-4 border-b border-border">
            <div className="flex gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-accent/30 to-accent/10 rounded-full flex-shrink-0 flex items-center justify-center border border-accent/30">
                <span className="text-accent font-bold text-xs">YOU</span>
              </div>
              <div className="flex-1">
                <textarea
                  placeholder="Post your reply..."
                  className="w-full bg-secondary/50 text-foreground text-sm p-2 rounded-lg border border-border/50 placeholder-muted-foreground resize-none focus:outline-none focus:border-accent/50 transition"
                  rows={2}
                />
                <div className="mt-2 flex justify-end">
                  <button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-4 py-1 rounded-full text-sm transition">
                    Reply
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="divide-y divide-border">
            {mockComments.map(comment => (
              <div key={comment.id} className="p-4 hover:bg-secondary/50 transition">
                <div className="flex gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent/30 to-accent/10 rounded-full flex-shrink-0 flex items-center justify-center border border-accent/30">
                    <span className="text-accent font-bold text-xs">{comment.avatar}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-foreground text-sm">{comment.author}</span>
                      <span className="text-muted-foreground text-xs">
                        @{comment.address.slice(0, 6)}...{comment.address.slice(-4)}
                      </span>
                      <span className="text-muted-foreground text-xs">·</span>
                      <span className="text-muted-foreground text-xs">{comment.timestamp}</span>
                    </div>
                    <p className="text-foreground text-sm mt-2">{comment.content}</p>
                    <div className="flex gap-4 mt-2 text-muted-foreground text-xs">
                      <button className="flex items-center gap-1 hover:text-accent transition">
                        <ChatBubbleBottomCenterIcon className="size-5" />
                        <span>5</span>
                      </button>
                      <button className="flex items-center gap-1 hover:text-red-500 transition">
                        <HeartIcon className="size-5" />
                        <span>23</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load more comments */}
          <div className="p-4 text-center border-t border-border">
            <button className="text-accent hover:underline text-sm font-semibold">Load more replies</button>
          </div>
        </div>
      )}
    </div>
  );
}
