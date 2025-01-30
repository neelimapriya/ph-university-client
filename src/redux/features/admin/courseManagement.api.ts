import { TQueryParam, TResponseRedux, TSemester } from "../../../types";
import { baseApi } from "../../api/baseApi";

const CourseManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllRegisteredSemester: builder.query({
      query: (args) => {
        const params = new URLSearchParams();

        if (args) {
          args.forEach((item: TQueryParam) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: "/semester-registration",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<TSemester[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    addRegisteredSemester: builder.mutation({
      query: (data) => ({
        url: "semester-registration/create-semester",
        method: "POST",
        body: data,
      }),
    }),
    updateRegisteredSemester: builder.mutation({
      query: (args) => ({
        url: `semester-registration/${args.id}`,
        method: "PATCH",
        body: args.data,
      }),
    }),
  }),
});
export const {useAddRegisteredSemesterMutation,useGetAllRegisteredSemesterQuery,useUpdateRegisteredSemesterMutation}=CourseManagementApi