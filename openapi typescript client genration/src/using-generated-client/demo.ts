import { Configuration, Student, StudentapiApi } from "../generated-sources/openapi";

const configuration = new Configuration({
    basePath: 'http://127.0.0.1:8000/',
});


const studentApi = new StudentapiApi(configuration);

async function printStudents(){
    const students = await studentApi.listStudents();
    console.log(students);
    // document.getElementById("students")!.innerText;
}
