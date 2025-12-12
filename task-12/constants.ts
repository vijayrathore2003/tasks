import type { ListType, Task } from "./types/types";

export const tasks: Record<string, Task> = {
    "101": { id: "101", title: "Setup project structures" },
    "102": { id: "102", title: "Design Kanban layout" },
    "103": { id: "103", title: "Implement List component" },
    "201": { id: "201", title: "Build main board container" },
    "202": { id: "202", title: "Style with Tailwind" },
    "203": { id: "203", title: "Integrate TypeScript types" },
    "301": { id: "301", title: "Define component architecture" },
    "302": { id: "302", title: "Set up initial boilerplate" },
    "303": { id: "303", title: "Create initial data model" },
};

export const enum ListTitles {
    TO_DO = "TO DO",
    IN_PROGRESS = "IN PROGRESS",
    DONE = "DONE",
}

export const initialData: ListType[] = [
    {
        id: "1",
        title: ListTitles.TO_DO,
        tasks: ["101", "102", "103"],
    },
    {
        id: "2",
        title: ListTitles.IN_PROGRESS,
        tasks: ['201', '202', '203'],
    },
    {
        id: "3",
        title: ListTitles.DONE,
        tasks: ['301', '302', '303'],
    },
];