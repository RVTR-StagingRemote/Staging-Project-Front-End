export interface ICourse {
    id: number;
    name: string;
    instructor: string;
    description: string;
    duration: number; // <-- How many weeks the course is expected to take.
}