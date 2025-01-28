import { z } from "zod";

export const academicSemesterSchema=z.object({
    name: z.string({required_error:"Please select Name"}),
    year: z.string({required_error:"Please select Year"}),
    // code: z.string({required_error:"Please select Code"}),
    startMonth:  z.string({required_error:"Please select Start month"}),
    endMonth:  z.string({required_error:"Please select End Month"}),
})