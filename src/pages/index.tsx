import type {NextPage} from "next";

import {DropdownList} from "@/components";

const Home: NextPage = () => {
  return (
    <section className="flex flex-col gap-4">
      <DropdownList />
    </section>
  );
};

export default Home;
