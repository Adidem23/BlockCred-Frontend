import { Route, Routes } from "react-router-dom"
import MainRender from "./Components/MainRender"
import { ThirdwebProvider } from "@thirdweb-dev/react"
import MainPageWeb from "./Components/MainPageWeb"
import Addorganization from "./Components/Addorganization"
import Request from "./Components/Request"
import Adduser from "./Components/Adduser"
import CheckRequests from './Components/CheckRequests';
import RequestedStats from "./Components/RequestedStats"

function App() {

  return (
    <>
      <ThirdwebProvider>
        <Routes>
          <Route path="/" Component={MainRender} />
          <Route path="/main" Component={MainPageWeb} />
          <Route path="/addorgi" Component={Addorganization} />
          <Route path="/request" Component={Request} />
          <Route path="/adduser" Component={Adduser} />
          <Route path="/checkreq" Component={CheckRequests} />
          <Route path="/reqstats" Component={RequestedStats} />
        </Routes>
      </ThirdwebProvider>
    </>
  )
}

export default App
