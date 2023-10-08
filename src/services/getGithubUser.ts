import { GithubAPIInstance, axiosRequest } from "@/config/axios";
import { getGithubUserResponse } from "@/types/services";

export const getGithubUser = async (
  user: string
): Promise<getGithubUserResponse> => {
  const data = await axiosRequest(
    GithubAPIInstance,
    `users/${user}`,
    "GET",
    undefined,
    {
      Authorization: "7bf7652ebd4d712d7eba00276e4088595055f4ec",
      "X-GitHub-Api-Version": "2022-11-28",
    }
  );

  return data as any;
};
