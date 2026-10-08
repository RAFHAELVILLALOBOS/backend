import * as studentModels from '../models/studentModels.js';

export const fetchAllStudents = async () => {
 const students = await studentModels.fetchAllStudents();
 return students;
}

export const createStudent = async (student) => {
 const studentId = await studentModels.insertStudent(student);
 return studentId;
}