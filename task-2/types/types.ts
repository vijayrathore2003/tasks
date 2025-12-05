export type Task = {
    id: number;
    title: string;
    completed: boolean;
    priority: "Low" | "Medium" | "High";
};


export type Filter = "ALL" | "ACTIVE" | "COMPLETED"

export type Priority = "Low" | "Medium" | "High";

export type PriorityFilter = "ALL" | "Low" | "Medium" | "High"

