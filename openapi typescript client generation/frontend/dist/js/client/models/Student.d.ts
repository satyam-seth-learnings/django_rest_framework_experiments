export interface Student {
    readonly id?: number;
    name: string;
    roll: number;
    city: string;
}
export declare function StudentFromJSON(json: any): Student;
export declare function StudentFromJSONTyped(json: any, ignoreDiscriminator: boolean): Student;
export declare function StudentToJSON(value?: Student | null): any;
