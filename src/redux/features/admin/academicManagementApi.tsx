import { baseApi } from "../../api/baseApi";


const academicManagementApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllSemesters:builder.query({
            query:()=>({
                url:'/academic-semester',
                method:'GET',
                
            }),
            transformErrorResponse:(response)=>{
               
                return {
                    data:response.data,
                    meta:response.meta
                }
            }
        }),
        addAcademicSemester:builder.mutation({
            query:(data)=>({
                url:'/academic-semester/create-academic-semester',
                method:'POST',
                body:data
                
            })
        })
    })
})
export const {useGetAllSemestersQuery,useAddAcademicSemesterMutation}=academicManagementApi