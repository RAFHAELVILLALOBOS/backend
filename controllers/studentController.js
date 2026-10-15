import * as studentServices from '../services/studentServices.js';

export const getAllStudents = async (req, res) => {
    const students = await studentServices.fetchAllStudents();
    res.status(200).json(students); 
}

export const createStudent = async (req, res) => {
   const {name, srcode, program} = req.body;
    const student = {name, srcode, program};

    try{
        const studentId = await studentServices.createStudent(student);
        res.status(200).json({
            success: true,
            message: studentId
        });
    }catch(e){
        console.log(e);
        res.status(500).json({
           error:"Internal Server Error"
        });
    }
}


export const editStudent = async (req, res) => {
    const {name, srcode, program} = req.body;
    const { id } = req.params;
    const student = {id, name, srcode, program};

    try {
        const updatedStudent = await studentServices.updateStudent(student);
        res.status(200).json({
            success: true,
            message: updatedStudent
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: "Internal Server Error"
        });
    }
}
