export default function getStudents(): Promise<{
    id?: number | undefined;
    name: string;
    roll: number;
    city: string;
}[] | undefined>;
