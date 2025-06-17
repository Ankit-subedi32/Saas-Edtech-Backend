import React from 'react';
import instituteNumber from '../../services/generateRandomInstituteNumber';

import { Request, Response } from 'express';
import Course from '../../database/connection';
import sequelize from '../../database/connection';
import generateRandomInstituteNumber from '../../services/generateRandomInstituteNumber';

exports.createCourse = async (req: Request, res: Response) => {
  const { coursePrice, courseName, courseDescription, courseDuration, courseLevel } = req.body;

  if (!coursePrice || !courseName || !courseDescription || !courseDuration || !courseLevel) {
    res.status(400).json({
      message: "Please provide all the required fields"
    });
    return;
  }
  const courseThumbnail = req.body.courseThumbnail || "https://ankitsubedi.com.np/images/ankit.jpg";
  const returnedData = await sequelize.query(`INSERT INTO course_${instituteNumber} (coursePrice, courseName, courseDescription, courseDuration, courseLevel,courseThumbnail) VALUES (?, ?, ?, ?, ?)`, {
    replacements: [coursePrice, courseName, courseDescription, courseDuration, courseLevel || "https//:ankitsubedi.com.np/images/ankit.jpg"]
  })
  console.log(returnedData)
  res.status(200).json({
    message: "Course created successfully"
  })
}