import { apiSlice } from "../apiSlice";

export const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => ({
        url: `/api/posts`,
        method: "GET",
      }),
      providesTags: ["Post"],
    }),
    createPost: builder.mutation({
      query: (data) => ({
        url: `/api/blog/post`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Post"],
    }),
    createAndPublishPost: builder.mutation({
      query: (data) => ({
        url: `/api/blog/createnpublishpost`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Post"],
    }),
    updatePost: builder.mutation({
      query: (data) => ({
        url: `/api/posts/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Post"],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `/api/posts/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useCreatePostMutation,
  useCreateAndPublishPostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = postApiSlice;
