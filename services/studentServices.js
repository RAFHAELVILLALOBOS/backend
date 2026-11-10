import * as studentModels from '../models/studentModels.js';
import ValidationError from '../utils/ValidationError.js';
export const fetchAllStudents = async () => {
 const students = await studentModels.fetchAllStudents();
 return students;
}

const doesStudentExist = async (student) => {
    let existing;
    if(Object.hasOwn(student, "id")) {
       existing = await studentModels.findStudentById(student.id);
    } else {
       existing = await studentModels.findStudentByNameAndSrcodeAndProgram(student);
    }
  if (existing.length > 0) {
    return true;

    }

 return false;
}

export const createStudent = async (student) => {
if (!student.name || !student.srcode || !student.program) {
        throw new ValidationError(404, 'Name, SRCODE, and program are required!');
    }

        const existing = await doesStudentExist(student);
        if (existing) {
            throw new ValidationError(409, 'Student already exists');
        }


 const studentId = await studentModels.insertStudent(student);
 return studentId;
}

export const updateStudent = async (student) => {
    if (!student.name || !student.srcode || !student.program) {
        throw new ValidationError(400, 'Name, SRCODE, and program are required!');
    }

    const existing = await doesStudentExist({ id: student.id });
    if (!existing) {
        throw new ValidationError(404, 'Student does not exist!');
    }

    const updatedRows = await studentModels.update(student);
    return updatedRows;
}

export const deleteStudent = async (id) => {
     const existing = await doesStudentExist({id});
    if (!existing) {
        throw new ValidationError(404, 'Student does not exist!');
    }
    const deletedStudent = await studentModels.remove(id);
    return deletedStudent;
}