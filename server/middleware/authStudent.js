const jwt = require("jsonwebtoken");
const Student = require("../models/Student.js");

const JWT_SECRET = process.env.JWT_SECRET

const authStudent = async (req,res,next) => {
    try {
        const token = req.header('Authorization').replace("Bearer ", "");
        if(!token){
            res.status(401).json({message:"Unauthorized pls provide the token"})
        }

        const decodedtoken = jwt.verify(token,JWT_SECRET)
        if(decodedtoken.role !== 'student'){
            return res.status(403).json({message:"Forbidden: Not a Student"})
        }
        const student = await Student.findById(decoded.id);
        if (!student) {
        return res.status(404).json({ message: "Student not found" });
        }

        req.student = student;
        next();
    } catch (error) {
        res.status(401).json({ message: "Unauthorized: Invalid token" });
    }
}

module.exports = {authStudent}