'use server'

import connectDB from "../database";
import todoModel from "../models/todoModel";

 export async function createTodo() {
    try {
       await connectDB();

       const todo = await todoModel.insert({
        title:'today finnish this work',
        complete:false
       })

       console.log('todo created!!..');
       

    } catch (error) {
        console.log(error);
        
    }
 }