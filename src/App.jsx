import { useEffect, useState } from 'react';
import Header from './Components/Header';
import { Outlet } from 'react-router-dom';
import LoginPopUp from './Components/LoginPopUp';
function App() {
  const [login, setLogin] = useState(true);
  return (
    <>
      { login ? <LoginPopUp setLogin={setLogin} /> : <></> }
      <Header setLogin={setLogin} />
      <Outlet />
    </>
  )
}
export default App;
