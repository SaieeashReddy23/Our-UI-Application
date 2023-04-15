import { Outlet } from 'react-router-dom'
import { Navbar } from '../../components/navbar'
import { Sidebar } from '../../components/sidebar'

import styled from 'styled-components'

const SharedLayout = () => {
  return (
    <div>
      <Navbar />
      <Wrapper>
        <Sidebar />
        <div className="page-container">
          <Outlet />
        </div>
      </Wrapper>
    </div>
  )
}
export default SharedLayout

const Wrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 1fr;

  .page-container {
    background-color: var(--grey-100);
  }
`
