import getStudents from './call';

window.onload = async () => {
    const students = await getStudents();
    // @ts-ignore
    document.getElementById("students")!.innerText = students;
}
