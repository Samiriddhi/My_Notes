import "./App.css";
import Axios from "./FetchData/Axios";
import NavForm from "./MyForm/NavForm";
import CallingProp from "./PropsReact/CallingProp";
import UseCallbackHook from "./ReactHooks/useCallback/UseCallbackHook";
import UseEffect from "./ReactHooks/UseEffect";
import UseMemoHook from "./ReactHooks/UseMemoHook";
import UseReducerCounter from "./ReactHooks/UseReducer";
import UseRefHook from "./ReactHooks/UseRefHook";
import UseState from "./ReactHooks/UseState";
import MyRouter from "./RoutingComponents/MyRouter";
import ToDoReact from "./ToDoReactApp/ToDoReact";

function App() {
  return (
    <>
      {/* <UseState />
      <UseEffect />
      <UseReducerCounter />
      <CallingProp />
      <UseRefHook /> */}
      {/* <ToDoReact/> */}
      {/* <UseMemoHook/> */}
      <UseCallbackHook/>
    </>
  );
}

export default App;
