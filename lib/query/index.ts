import {
  QueryClient,
  QueryClientProvider,
  QueryFunction,
  useInfiniteQuery,
  useMutation,
  useQueries,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

export const useAppQueries = useQueries;
export const useAppQuery = useQuery;
export const useAppMutation = useMutation;
export const useAppQueryClient = useQueryClient;
export const useAppInfiniteQuery = useInfiniteQuery;
export const AppQueryClient = QueryClient;
export const AppQueryClientProvider = QueryClientProvider;

export type IQueryFunction = QueryFunction;
