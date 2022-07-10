import getStudents from './call';

window.onload = async () => {
    const students = await getStudents();
    document.getElementById("students")!.innerText = JSON.stringify(students);
}
