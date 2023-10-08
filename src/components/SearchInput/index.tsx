"use client";

import { SearchInputProps } from "@/types/components";
import styles from "./SearchInput.module.scss";

const SearchInput = ({ changeValue, value }: SearchInputProps) => {
  return (
    <>
      <input
        value={value}
        onChange={(e) => changeValue(e.target.value)}
        type="text"
        className={styles.inputSearch}
      ></input>
    </>
  );
};

export default SearchInput;
