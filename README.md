<!-- REDUX PACKAGES TO INSTALL -->

Dependency:
react-redux -- this package is a bridge connecting the react app and redux store because the both are different library
@reduxjs/toolkit -- a package build in top of redux to reduce the Boiler Plate Code it give multiple method to create a configureStore, CreateSlice
redux -- we don't need to install the package in main project because for learning i have installed it 

devDependency:
@types/react-redux -- react redux offical have type defination for the react-redux library
 
<!-- RoadMap
1)createApi
2)reducerPath 
3)fetchBaseQuery
4)builder.query
5)builder.mutation
6)Generated hooks
7)Dynamic params
8)Cache
9)isLoading
10)isFetching
11)Store integration
12)Middleware
13)Query vs Mutation hooks -
14) prepareHeaders (JWT/Auth tokens)
15) Lazy Queries (useLazyGetUsersQuery)
16) Polling
->

Dynamic tags ({ type: "Users", id: 1 })
transformResponse
Optimistic Updates


# RTK Query Revision Notes

## Why RTK Query?

RTK Query solves the boilerplate involved in API state management.

Without RTK Query:

* createAsyncThunk
* pending state
* fulfilled state
* rejected state
* loading state
* error state
* manual caching
* manual refetching

With RTK Query:

* Auto API calls
* Auto caching
* Auto loading states
* Auto error handling
* Auto refetching

---

# createApi

Creates an RTK Query API slice.

```ts
createApi()
```

Responsibilities:

* Define endpoints
* Generate hooks
* Manage cache
* Manage API requests

---

# reducerPath

```ts
reducerPath: "userApi"
```

Purpose:

Defines where RTK Query stores its cache inside Redux.

Example:

```ts
state.userApi
```

Stores:

* Queries
* Mutations
* Cache
* Metadata

---

# fetchBaseQuery

```ts
fetchBaseQuery({
  baseUrl: "https://api.com"
})
```

Purpose:

Avoid repeating URLs.

Instead of:

```txt
/api/users
/api/posts
/api/comments
```

Use:

```txt
baseUrl + endpoint
```

---

# prepareHeaders

```ts
prepareHeaders(headers, { getState })
```

Purpose:

Attach common headers to every request.

Example:

```ts
Authorization: Bearer token
```

Benefits:

* No repetition
* Centralized authentication
* Automatically uses latest token

---

# Query

```ts
builder.query()
```

Purpose:

Read data from server.

Usually:

```txt
GET
```

Example:

```ts
getUsers: builder.query()
```

Generated Hook:

```ts
useGetUsersQuery()
```

Runs automatically.

---

# Mutation

```ts
builder.mutation()
```

Purpose:

Modify server data.

Usually:

* POST
* PUT
* PATCH
* DELETE

Generated Hook:

```ts
useCreateUserMutation()
```

Runs only when triggered manually.

---

# Query vs Mutation

Query:

```txt
Automatic
Read Data
```

Mutation:

```txt
Manual Trigger
Change Data
```

---

# Generated Hooks

Endpoint:

```ts
getUsers
```

Hook:

```ts
useGetUsersQuery()
```

Endpoint:

```ts
createUser
```

Hook:

```ts
useCreateUserMutation()
```

---

# RTK Query Cache

API responses are stored inside Redux.

Benefits:

* Avoid duplicate requests
* Faster UI
* Shared data across components

---

# userApi.reducer

Purpose:

Creates storage for RTK Query cache.

```ts
[userApi.reducerPath]: userApi.reducer
```

---

# userApi.middleware

Purpose:

Runs RTK Query engine.

Handles:

* Requests
* Cache updates
* Refetching
* Polling

---

# isLoading

Meaning:

No data exists yet and request is running.

---

# isFetching

Meaning:

Request is running.

Data may already exist.

---

# unwrap()

Without:

```ts
const result = await createUser(data)
```

Returns wrapped result.

With:

```ts
await createUser(data).unwrap()
```

Success:

Returns raw response data.

Failure:

Throws error.

Perfect for:

```ts
try/catch
```

---

# TypeScript Generics

Query:

```ts
builder.query<ResponseType, ArgumentType>()
```

Mutation:

```ts
builder.mutation<ResponseType, ArgumentType>()
```

Examples:

```ts
builder.query<User[], void>()
```

Returns:

```ts
User[]
```

Takes:

```ts
nothing
```

---

```ts
builder.query<User, number>()
```

Returns:

```ts
User
```

Takes:

```ts
number
```

---

```ts
builder.mutation<User, CreateUserDto>()
```

Returns:

```ts
User
```

Takes:

```ts
CreateUserDto
```

---

# Tags

Register tags:

```ts
tagTypes: ["Users"]
```

---

# providesTags

Purpose:

Label cache.

```ts
providesTags: ["Users"]
```

Meaning:

This query owns Users cache.

---

# invalidatesTags

Purpose:

Mark cache as stale.

```ts
invalidatesTags: ["Users"]
```

Meaning:

Users cache must be refreshed.

---

# Refetch Flow

```txt
Mutation Success
↓
Invalidate Tag
↓
Refetch Matching Queries
↓
Cache Updated
↓
UI Updated
```

---

# Lazy Queries

Normal Query:

```ts
useGetUsersQuery()
```

Runs automatically.

Lazy Query:

```ts
useLazyGetUsersQuery()
```

Returns trigger function.

Runs manually.

Good For:

* Search
* Autocomplete
* Generate Report
* Button-triggered fetches

---

# Refetch Options

refetchOnFocus

```txt
User returns to tab
↓
Refetch
```

---

refetchOnReconnect

```txt
Internet returns
↓
Refetch
```

---

refetchOnMountOrArgChange

```txt
Component mounts
↓
Refetch
```

---

# Polling

```ts
pollingInterval: 5000
```

Meaning:

Refetch every 5 seconds while component remains mounted.

Good For:

* Notifications
* Dashboards
* Live Monitoring
* Order Tracking

---

# Dynamic Tags

Simple Tags:

```ts
providesTags: ["Users"]
```

Refetches entire Users cache.

Dynamic Tags:

```ts
{ type: "Users", id: 1 }
```

Allows invalidating specific records.

Benefits:

* Better performance
* Fewer API requests
* Fine-grained cache control

```

---

🔥 Tomorrow, revise this once, then build a small CRUD app with RTK Query. That's where everything will truly click. 👊🚀
```
