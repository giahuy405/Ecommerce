import useRouteElement from "./useRouteElement"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import ButtonDarkMode from "./components/ButtonDarkMode";
function App() {
  const routeElement = useRouteElement();
  return (
    <>
     {routeElement}
     <ToastContainer />
     <ButtonDarkMode/>
    </>
  )
}

export default App
