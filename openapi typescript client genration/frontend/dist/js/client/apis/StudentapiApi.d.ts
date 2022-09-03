import * as runtime from '../runtime';
import { Student } from '../models';
export interface CreateStudentRequest {
    student?: Student;
}
export interface DestroyStudentRequest {
    id: string;
}
export interface PartialUpdateStudentRequest {
    id: string;
    student?: Student;
}
export interface RetrieveStudentRequest {
    id: string;
}
export interface UpdateStudentRequest {
    id: string;
    student?: Student;
}
export declare class StudentapiApi extends runtime.BaseAPI {
    createStudentRaw(requestParameters: CreateStudentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Student>>;
    createStudent(requestParameters?: CreateStudentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Student>;
    destroyStudentRaw(requestParameters: DestroyStudentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<void>>;
    destroyStudent(requestParameters: DestroyStudentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<void>;
    listStudentsRaw(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Array<Student>>>;
    listStudents(initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Array<Student>>;
    partialUpdateStudentRaw(requestParameters: PartialUpdateStudentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Student>>;
    partialUpdateStudent(requestParameters: PartialUpdateStudentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Student>;
    retrieveStudentRaw(requestParameters: RetrieveStudentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Student>>;
    retrieveStudent(requestParameters: RetrieveStudentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Student>;
    updateStudentRaw(requestParameters: UpdateStudentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<runtime.ApiResponse<Student>>;
    updateStudent(requestParameters: UpdateStudentRequest, initOverrides?: RequestInit | runtime.InitOverideFunction): Promise<Student>;
}
