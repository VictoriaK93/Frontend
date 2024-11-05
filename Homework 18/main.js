
function TodoList() {
    const [todos, setTodos] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('YOUR_API_ENDPOINT'); // Replace with your actual API endpoint
          const data = await response.json();
          setTodos(data.slice(0, 15)); // Slice the data to the first 15 items
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      fetchData();
    }, []);
  
    return (
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title} - {todo.completed ? 'Completed' : 'Incomplete'}
          </li>
        ))}
      </ul>
    );
  }
  
  