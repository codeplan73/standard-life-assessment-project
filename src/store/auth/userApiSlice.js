import { apiSlice } from "../apiSlice";
import { BASE_URL } from "../../constant";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `/${BASE_URL}/api/login`,
        method: "POST",
        body: data,
      }),
    }),
    registerUser: builder.mutation({
      query: (data) => ({
        url: `/${BASE_URL}/api/register`,
        method: "POST",
        body: data,
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: `${BASE_URL}/api/user`,
        method: "GET",
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useLoginMutation, useRegisterUserMutation, useGetUserQuery } =
  userApiSlice;
