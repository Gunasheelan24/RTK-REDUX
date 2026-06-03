import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// the createSlice will create the below thing
/* it is going to create a APISlice, Endpoint, Cache, Generate State */

export const userApi = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getUser: builder.mutation({
      query: (id: number) => `/users/${id}`,
    }),
    createUser: builder.mutation({
        query: () => "/"
    })
  }),
});

export default userApi;
export const { useGetUserMutation } = userApi;
