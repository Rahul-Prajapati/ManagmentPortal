"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

const TableSort = () => {
  const router = useRouter();

  const handleSort = () => {
    const params = new URLSearchParams(window.location.search);

    const currentOrder = params.get("order") || "asc";

    const newOrder = currentOrder === "asc" ? "desc" : "asc";

    params.set("sort", "name");
    params.set("order", newOrder);
    params.set("page", "1"); 

    router.push(`${window.location.pathname}?${params}`);
  };

  return (
    <button
      onClick={handleSort}
      className="w-8 h-8 flex items-center justify-center rounded-full bg-Yellow"
    >
      <Image src="/sort.png" alt="" width={14} height={14} />
    </button>
  );
};

export default TableSort;