import TodoContainer from "@/components/todo/TodoContainer"
import Container from "@/components/ui/Container"


const Todo = () => {
  return (
    <Container> 
        <h1 className="text-center text-clip text-pretty text-3xl font-semibold my-10">My new to do s </h1>
        <TodoContainer/>
    </Container>
  )
}

export default Todo