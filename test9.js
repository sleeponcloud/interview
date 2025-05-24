// Use React Context


const UserContext = createContext();
function ParentComponent() {
  const [name, setName] = useState("Naro");
  const [age, setAge] = useState(12);
  return (
    <UserContext.Provider value={{ name, age }}>
      <ChildComponent />
    </UserContext.Provider>
  );
}
function ChildComponent() {
  return (
    <div>
      <p>This is child</p>
      <GrandchildComponent />
    </div>
  );
}
function GrandchildComponent() {
  const { name, age } = useContext(UserContext);
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}
