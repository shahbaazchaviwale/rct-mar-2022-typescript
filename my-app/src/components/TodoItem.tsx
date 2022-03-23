const TodoItem: React.FC<{ text: string; status: boolean }> = (props) => {
  return (
    <li>
      <p><b>Task Name : </b>{props.text}</p>
      <p><b>Task Status : </b>{props.status ? "completed" : "In Progress"}</p>
    </li>
  );
};

export default TodoItem;
