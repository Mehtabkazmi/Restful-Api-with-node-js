const express = require("express");
const router = new express.Router();
const Student = require("../models/students");

router.post("/student", async(req, res) => {
        try{
        const user = new Student(req.body);
        const createuser = await user.save();
        res.status(201).send(createuser);
    
} catch (e) {res.status(400).send(e);}
})

// read data through api

router.get("/student", async (req,res) => {
    try {
        const getstudentdata = await Student.find();
        res.send(getstudentdata);
    } catch(e) {
        res.send(e);
    }
})

// get individual data ....

router.get('/student/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const studentdata = await Student.findById(_id);
        res.status(201).send(studentdata);
    } catch(e) {
        res.status(400).send(e);
    }
})

// update data ..... 

router.patch('/student/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const updatestudents = await Student.findByIdAndUpdate(_id, req.body, {
            new : true,
        });
        res.status(201).send(updatestudents);

    } catch (error) {
        res.status(500).send(error);
    }
})

// detele data ....

router.delete('/student/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const deletestudent = await Student.findByIdAndDelete(_id);
        res.status(201).send(deletestudent);
    } catch (error) {
        res.status(500).send(error);
    }
})
module.exports = router;