"use client";

import React from "react";
import { Carousel, Card } from "./AppleCard";

// Importing images using relative paths
import aiImage from "../../assets/ai.png";
import workspaceImage from "../../assets/workspace.png";
import offlineImage from "../../assets/offline.png";
import collaborationImage from "../../assets/collaboration.png";
import automationImage from "../../assets/automation.png";
import cloudsyncImage from "../../assets/cloudsync.png";

const AppleCardsSecondDemo = () => {
  const cards = data.map((card, index) => (
    <Card key={card.title} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-4 flex justify-center pr-12"> 
      <div className="max-w-7xl w-full">
        <Carousel items={cards} />
      </div>
    </div>
  );
};

const DummyContent = () => {
  return (
    <>
      {[...new Array(3)].map((_, index) => (
        <div
          key={"dummy-content" + index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
              The first rule of Apple club is that you boast about Apple club.
            </span>{" "}
            Keep a journal, quickly jot down a grocery list, and take amazing
            class notes. Want to convert those notes to text? No problem.
            Langotiya jeetu ka mara hua yaar is ready to capture every thought.
          </p>
          <div className="w-full h-64 bg-gray-300 rounded-xl flex items-center justify-center">
            <span className="text-gray-500">Your Image Here</span>
          </div>
        </div>
      ))}
    </>
  );
};

const data = [
  {
    category: "AI-Powered Notes 🧠",
    title: (
      <>
        Smart notes, <br /> smarter you.
      </>
    ),
    src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Custom Workspace 🏡",
    title: (
      <>
        Your space, <br /> your rules.
      </>
    ),
    src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Offline Mode 🚀",
    title: "Work anytime, anywhere.",
    src: "https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Real-time Collaboration 🤝",
    title: "Instant teamwork, seamless flow.",
    src: "https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Task Automation ⚡",
    title: (
      <>
        Let the system <br /> do it.
      </>
    ),
    src: "https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop",
    content: <DummyContent />,
  },
  {
    category: "Seamless Cloud Sync ☁️",
    title: (
      <>
        Your data, <br /> everywhere.
      </>
    ),
    src: "https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop",
    content: <DummyContent />,
  },
];

export default AppleCardsSecondDemo;
