import { useAppSelector } from "@/redux/hook";
import AddTodoFilter from "./AddTodoFilter";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  return (
    <div>
      <div className="flex justify-between  my-4">
        <AddTodoModal />
        <AddTodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-2xl p-[8px]">
        <div className="bg-[#f2e7ea] p-5 w-full h-full rounded-lg space-y-4">
          {todos.map((item) => (
            <TodoCard {...item} />
          ))}
        </div>
        {/* <div className="bg-cyan-200 p-6 rounded-md font-extrabold text-3xl flex justify-center items-center ">
            <p>There is no Task pending</p>
        </div> */}
      </div>
    </div>
  );
};

export default TodoContainer;
