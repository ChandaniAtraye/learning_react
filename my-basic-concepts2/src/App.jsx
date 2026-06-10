import AxiosExampleCreateNewUser from "./components/AxiosExampleCreateNewUser"
import AxiosFetchDataExample from "./components/AxiosFetchDataExample"
import Child from "./components2/Child"
import CookiesExample from "./components/CookiesExample"
import CrudAxios from "./components/CrudAxios"
import SessionDemo from "./components/SessionDemo"
import SessionLogout from "./components/SessionLogout"
import TodoArrayLocalStorage from "./components/TodoArrayLocalStorage"
import TodoCrud from "./components/TodoCrud"
import CounterUseReducer from "./components/UseReducer"
import WithoutUseMemo from "./components/WithoutUseMemo"
import WithUseMemo from "./components/WithUseMemo"
import MessageProvider from "./components2/MessageProvider"


function App() {
 
  return (
    <>
     {/* <h1> Hello its React </h1> */}
     {/* <TodoArrayLocalStorage/> */}
     {/* <TodoCrud/> */}
     {/* <SessionDemo/> */}
     {/* <SessionLogout/> */}
     {/* <CookiesExample/> */}
     {/* <AxiosFetchDataExample/> */}
     {/* <AxiosExampleCreateNewUser/> */}
     {/* <CrudAxios/> */}
     {/* <WithoutUseMemo/> */}
     {/* <WithUseMemo/> */}
     {/* <CounterUseReducer/> */}
     {/* <h1>Using Prop drilling</h1> */}
     {/* <Child message = "Hello " /> */}
     <MessageProvider>
      <Child/>
     </MessageProvider>
    </>
  )
}

export default App
