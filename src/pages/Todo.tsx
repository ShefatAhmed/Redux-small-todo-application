import TodoContainer from "@/components/todo/todoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
  return (
    <Container>
        <h1 className="text-center text-3xl font-semibold my-10">My Todo</h1>
      <TodoContainer />
    </Container>
  );
};

export default Todo;
