import { Configuration, StudentapiApi } from "../client";

const configuration = new Configuration({
    basePath: 'http://127.0.0.1:8000',
});


const studentApi = new StudentapiApi(configuration);

window.onload = async () => {
    const students = await studentApi.listStudents();
    console.log(students);
    document.getElementById("students")!.innerText = JSON.stringify(students);
}