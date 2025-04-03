'use server'

import { connectDB } from "../database";
import todoModel from "../models/todoModel";

 export async function createTodo(inputValue) {
    try {
       await connectDB();

       const todo = await todoModel.create({
        title:inputValue,
        complete:false
       })

       console.log('todo created!!..');
       

    } catch (error) {
        console.log(error);
        
    }
 }
 export async function alltodos() {
 }