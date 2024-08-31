import { v } from "convex/values";
import { mutation, query } from "./_generated/server";
import { formSchema } from "@/app/register/utils";
import { ZodArray, ZodObject, ZodString } from "zod";

function convertZodToConvex(zodSchema: ZodObject<any>): { [key: string]: any } {
  const convexSchema: { [key: string]: any } = {};

  for (const key in zodSchema.shape) {
    const zodType = zodSchema.shape[key];

    if (zodType instanceof ZodString) {
      convexSchema[key] = v.string();
    } else if (zodType instanceof ZodArray) {
      const elementType = zodType._def.type;
      if (elementType instanceof ZodString) {
        convexSchema[key] = v.array(v.string());
      }
      // Add other array element types as needed
    }
    // Add more Zod type conversions as needed
  }

  return convexSchema;
}

export const getAllEmployees = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("employees").order("desc").collect();
  },
});

export const getEmployeeById = query({
  args: { employeeId: v.id("employees") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.employeeId)
  },
});

export const createEmployee = mutation({
  args: convertZodToConvex(formSchema),
  handler: async (ctx, args) => {
    const employeeId = await ctx.db.insert("employees", args);
    return employeeId;
  },
});

export const updateEmployeeJob = mutation({
  args: {
    employeeId: v.id("employees"),
    job: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.patch(args.employeeId, {
      job: args.job,
    });
  },
});
