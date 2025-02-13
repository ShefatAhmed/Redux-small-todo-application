import { Button } from "../ui/button";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  return (
    <div>
      <div className="flex justify-between ">
        <Button>Add todo</Button>
        <Button>Filter</Button>
      </div>
      <div className="bg-red-500 w-full h-full rounded-xl p-5 space-y-5">
        {/* {<div className="bg-white p-5 text-2xl font-bold flex justify-center items-center">
          <p>There is no task pending</p>
        </div>} */}
        {/* <TodoCard /> */}
      </div>
    </div>
  );
};

export default TodoContainer;
