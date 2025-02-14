import React from "react";
import { BentoGrid, BentoGridItem } from "./BentoGrid"; // Correct relative import
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";

// Importing images from src/assets
import noteTakingImg from "../../assets/note-taking.png";
import githubSyncImg from "../../assets/github-sync.png";
import taskManagerImg from "../../assets/task-manager.png";
import liveCollabImg from "../../assets/live-collaboration.png";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[22rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={<ImageSection image={item.image} />}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}

const ImageSection = ({ image }) => (
    <div className="flex flex-1 w-full min-h-[10rem] h-full rounded-xl overflow-hidden border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-white">
      <img src={image} alt="Feature Preview" className="w-full h-full object-cover" />
    </div>
  );
  
const items = [
  {
    title: "Effortless Note-Taking",
    description: "Capture and organize notes with ease.",
    image: noteTakingImg, // ✅ Using imported image
    className: "md:col-span-2",
    icon: <IconClipboardCopy className="h-6 w-6 text-neutral-500" />,
  },
  {
    title: "GitHub Sync",
    description: "Seamlessly sync with GitHub repositories.",
    image: githubSyncImg,
    className: "md:col-span-1",
    icon: <IconTableColumn className="h-6 w-6 text-neutral-500" />,
  },
  {
    title: "Task Management",
    description: "Organize your workflow efficiently.",
    image: taskManagerImg,
    className: "md:col-span-1",
    icon: <IconSignature className="h-6 w-6 text-neutral-500" />,
  },
  {
    title: "Live Collaboration",
    description: "Edit documents with real-time updates.",
    image: liveCollabImg,
    className: "md:col-span-2",
    icon: <IconFileBroken className="h-6 w-6 text-neutral-500" />,
  },
];

