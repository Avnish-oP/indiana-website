import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  IconDeviceImacStar,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconArrowWaveRightUp,
} from "@tabler/icons-react";

export default function BentoGridDemo() {
  return (
    <>
    <div className="pt-20 z-10 text-center  md:text-4xl text-2xl mb-8 antialiased text-[#C8A26B]">Explore Our Categories</div>
    <BentoGrid className="max-w-5xl mx-auto px-4">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
    </>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200  to-neutral-100"></div>
);
const items = [
  {
    title: "Decor",
    description: "Enhance your space with our range of decorative items.",
    header: <Skeleton />,
    icon: <IconDeviceImacStar className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Living",
    description: "Furniture and accessories for a comfortable living space.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Home Office",
    description: "Everything you need for an efficient and stylish home office.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Garden and Outdoor",
    description: "Products to enhance your garden and outdoor spaces.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Bar",
    description: "Everything you need for a well-stocked bar.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Mats",
    description: "Protective and decorative mats for various spaces.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Wall Decor",
    description: "Add character to your walls with our decor options.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Kitchen & Dining",
    description: "Essential items for a functional and stylish kitchen and dining area.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Bathroom Essentials",
    description: "Everything you need for a well-equipped bathroom.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Seasonal",
    description: "Products for various seasons and holidays.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
