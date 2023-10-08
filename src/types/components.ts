import { getAllGithubReposResponse } from "./services";

export type SearchInputProps = {
  value: string;
  changeValue: (v: string) => void;
};

export type RepositoryItemProps = {
  repositories: getAllGithubReposResponse;
  changeRepositoriesOrder: () => void;
  isDesceding: boolean;
};
