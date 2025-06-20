import { Response } from "express";
import { IExtendedRequest } from "../../../middleware/types";
import sequelize from "../../../database/connection";
import { Query } from "mysql2/typings/mysql/lib/protocol/sequences/Query";
import { QueryTypes } from "sequelize";



const createCategory = async(req:IExtendedRequest,res:Response)=>{
    const instituteNumber = req.user?.currentInstituteNumber
    const {categoryName,categoryDescription} = req.body 
    if(!categoryName || !categoryDescription){
        return res.status(400).json({
            message : "Please provide categoryName, categoryDescription"
        })
    }
    await sequelize.query(`INSERT INTO category_${instituteNumber}(categoryName,categoryDescription) VALUES(?,?)`,{
        replacements : [categoryName,categoryDescription],
        type : QueryTypes.INSERT
    })
    res.status(200).json({
        message : "Category added successfully"
    })
}

const getCategories = async(req:IExtendedRequest,res:Response)=>{
    const instituteNumber = req.user?.currentInstituteNumber
    const categories = await sequelize.query(`SELECT * FROM category_${instituteNumber}`, {
        type : QueryTypes.SELECT
    })
    res.status(200).json({
        message : "Categories fetched successfully", 
        data : categories
    })
}

const deleteCategory = async(req:IExtendedRequest,res:Response)=>{
    const instituteNumber = req.user?.currentInstituteNumber
    const id = req.params.id 
    await sequelize.query(`DELETE FROM category_${instituteNumber} WHERE id = ?`,{
        replacements : [id],
        type : QueryTypes.DELETE
    })
    res.status(200).json({
        message : "Category deleted successfully"
    })
}

export {createCategory,getCategories,deleteCategory}