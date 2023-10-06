import { Route, Routes } from "react-router-dom"
import MainRender from "./Components/MainRender"
import { ThirdwebProvider } from "@thirdweb-dev/react"
import MainPageWeb from "./Components/MainPageWeb"

function App() {

  return (
    <>
      <ThirdwebProvider>
        <Routes>
          <Route path="/" Component={MainRender} />
          <Route path="/main" Component={MainPageWeb} />
        </Routes>
      </ThirdwebProvider>
    </>
  )
}

export default App
