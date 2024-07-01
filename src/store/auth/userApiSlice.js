import { apiSlice } from "../apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `/api/login`,
        method: "POST",
        body: data,
      }),
    }),
    registerUser: builder.mutation({
      query: (data) => ({
        url: `/api/register`,
        method: "POST",
        body: data,
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: `/api/user`,
        method: "GET",
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useLoginMutation, useRegisterUserMutation, useGetUserQuery } =
  userApiSlice;
