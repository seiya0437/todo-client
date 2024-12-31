import { API_URL } from "@/constants/url";
import useSWR from "swr";

async function fetcher(key: string) {
  return await fetch(key).then((res) => res.json());
}

export const useTodos = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, isLoading, error, mutate } = useSWR(
    `${API_URL}/allTodos`,
    fetcher
  );

  return { todos: data, isLoading, error, mutate };
};
