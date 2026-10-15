import * as studentModels from '../models/studentModels.js';

export const fetchAllStudents = async () => {
 const students = await studentModels.fetchAllStudents();
 return students;
}

export const createStudent = async (student) => {
 const studentId = await studentModels.insertStudent(student);
 return studentId;
}

export const updateStudent = async (student) => { 
    const updatedRows = await studentModels.update(student);
    return updatedRows;
}