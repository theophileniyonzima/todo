import { Trash2 } from "lucide-react";
import React from "react";

const ListTodos = async({ todos }) => {
const todo = await alltodos();
  return (
    <div className="flex gap-2 flex-col   p-2">
      {todos !== "" && (
        <div className="  w-full flex items-center justify-between gap-5 py-2 overflow-x-hidden">
          <div className="flex gap-2 items-center flex-1 cursor-pointer">
            <div className="h-4 w-4 border-2 rounded-full" />
            <p className="text-nowrap">{todos}</p>
          </div>
          <div>
            <button className="cursor-pointer">
              <Trash2 className="text-red-500 h-4 w-4" />
            </button>
          </div>
        </div>
      )}
      {/* <div className="cursor-pointer w-full flex items-center gap-3 py-2 overflow-x-hidden">
        <div className="h-4 w-4 border-2 rounded-full" />
        <p className="text-nowrap">Walk today</p>
      </div> */}
    </div>
  );
};

export default ListTodos;
