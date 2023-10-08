import { GithubAPIInstance, axiosRequest } from "@/config/axios";
import { getAllGithubReposResponse } from "@/types/services";

export const getAllGithubRepos = async (
  user: string
): Promise<getAllGithubReposResponse> => {
  const data = await axiosRequest(
    GithubAPIInstance,
    `users/${user}/repos`,
    "GET",
    undefined,
    {
      Authorization: "7bf7652ebd4d712d7eba00276e4088595055f4ec",
      "X-GitHub-Api-Version": "2022-11-28",
    }
  );

  return data as any;
};
