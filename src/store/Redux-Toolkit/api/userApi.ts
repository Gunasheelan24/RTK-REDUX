import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// the createSlice will create the below thing
/* it is going to create a APISlice, Endpoint, Cache, Generate State */

const sampleBody = {
  id: 0,
  name: "gunasheelan",
  email: "gunasheelan@gmail.com",
  userName: "gunasheelan24",
};

export const userApi = createApi({
  reducerPath: "users",
  tagTypes: ["users"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/redux",
  }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (id: number) => `/get-user/${id}`,
      providesTags: ["users"],
    }),
    createUser: builder.mutation({
      query: () => ({
        url: "/create-user",
        method: "POST",
        body: sampleBody,
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export default userApi;
export const { useGetUserQuery, useCreateUserMutation } = userApi;
