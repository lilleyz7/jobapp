import { pgTable, integer, varchar, date,serial } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
    id: serial('id').primaryKey(),
});

export const jobsTable = pgTable("jobs", {
    id: serial('id').primaryKey(),
    userId: integer('user_id').notNull().references(() => usersTable.id), 
    title: varchar().notNull(),
    company: varchar().notNull(),
    jobType: varchar().notNull(),
    description: varchar().notNull(),
    location: varchar().notNull(),
    salary: integer(),
    applied: date().defaultNow(),
    
});