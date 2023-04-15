import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ErrorPage, LoginPage } from './pages'
import { Accounts, Home, Cards, Savings, SharedLayout } from './pages/dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="accounts" element={<Accounts />} />
          <Route path="savings" element={<Savings />} />
          <Route path="cards" element={<Cards />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
