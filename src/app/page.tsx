"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import SearchInput from "@/components/SearchInput";

import styles from "./Page.module.scss";
import glass from "../assets/magnifying-glass.svg";

export default function Home() {
  const router = useRouter();
  const [searchInput, setSearchInput] = useState("");

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <SearchInput changeValue={setSearchInput} value={searchInput} />
        <button onClick={() => router.push(`user/${searchInput}`)}>
          <Image src={glass} width={30} height={30} alt="search input" />
        </button>
      </div>
    </main>
  );
}
