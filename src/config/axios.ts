import axios, { AxiosInstance, Method } from "axios";

export const GithubAPIInstance = axios.create({
  baseURL: "https://api.github.com/",
});

export const axiosRequest = async (
  instance: AxiosInstance,
  url: string,
  method?: Method,
  data?: any,
  headers?: any,
  params?: any
) => {
  try {
    const response = await instance.request({
      method: method || "GET",
      url,
      data,
      headers,
      timeout: 15000,
      params,
    });
    return response.data;
  } catch (error: any) {
    console.error(
      `[${method || "GET"}] ${instance.getUri() + url}`,
      data,
      headers,
      error,
      typeof error?.response?.data === "string" &&
        error?.response?.data?.includes("html")
        ? "[HTML ERROR RESPONSE]"
        : error?.response?.data
    );
    return error?.response?.data || null;
  }
};
