import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { RootState } from "../Store";
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
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      if (state?.user?.users?.[0]?.userName) {
        headers.set("token", state.user.users[0].userName);
      }

      return headers;
    },
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
export const { useGetUserQuery, useLazyGetUserQuery, useCreateUserMutation } =
  userApi;
