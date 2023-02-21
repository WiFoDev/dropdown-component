import {useState} from "react";

import {services} from "@/utils";

import {Dropdown} from "./Dropdown";

export const DropdownList = () => {
  const [openGeneralState, setOpenGeneralState] = useState(() =>
    services.map(({title}) => {
      return {
        title,
        open: false,
      };
    }),
  );

  return (
    <>
      {services.map((it) => {
        const isOpen = openGeneralState.find(
          (option) => option.title === it.title,
        )?.open;

        const toggleOpen = () => {
          setOpenGeneralState((prev) => {
            return prev.map((option) => {
              if (option.title === it.title) {
                return {
                  ...option,
                  open: !option.open,
                };
              }

              return {
                ...option,
                open: false,
              };
            });
          });
        };

        return (
          <Dropdown
            key={it.title}
            open={isOpen}
            toggleOpen={toggleOpen}
            {...it}
          />
        );
      })}
    </>
  );
};
