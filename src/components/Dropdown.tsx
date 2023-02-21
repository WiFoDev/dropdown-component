import {motion} from "framer-motion";
import Image, {StaticImageData} from "next/image";
import {FC} from "react";

import {ArrowDown} from "@/assets/ArrowDown";
import {ArrowUp} from "@/assets/ArrowUp";

const list = {
  visible: {opacity: 1},
  hidden: {opacity: 0},
};

export interface DropdownProps {
  title: string;
  items: string[];
  iconSrc: StaticImageData;
  toggleOpen?: () => void;
  open?: boolean;
}

export const Dropdown: FC<DropdownProps> = ({
  title,
  items,
  iconSrc,
  toggleOpen,
  open,
}) => {
  return (
    <div>
      <div
        className="flex items-center justify-between bg-primary p-2"
        onClick={toggleOpen}
      >
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10">
            <Image fill alt="" src={iconSrc} />
          </div>
          <h3>{title}</h3>
        </div>
        <div className="h-5 w-5 grid place-items-center">
          {!open ? <ArrowDown /> : <ArrowUp />}
        </div>
      </div>
      {open && (
        <motion.div
          animate="visible"
          className="bg-primary border-t-2 border-background p-2 transition-all"
          initial="hidden"
          variants={list}
        >
          <ul className="flex flex-col gap-2">
            {items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};
