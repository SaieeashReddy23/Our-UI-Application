import styled from 'styled-components'
import { links } from '../../assets/data/links'
import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <Wrapper>
      <ul className="sidebar-links">
        {links.map(({ id, icon, path }) => {
          return (
            <NavLink
              key={id}
              to={path}
              className={({ isActive }) =>
                isActive ? 'sidebar-nav-link selected' : 'sidebar-nav-link'
              }
            >
              <span to={path}>{icon}</span>
            </NavLink>
          )
        })}
      </ul>
    </Wrapper>
  )
}
export default Sidebar

const Wrapper = styled.div`
  width: 7rem;
  min-height: calc(100vh - 8rem);
  border-right: 1px solid var(--grey-50);

  .sidebar-links {
    display: flex;
    flex-direction: column;
  }

  .sidebar-nav-link {
    color: var(--grey-500);
    font-size: 2rem;
    display: block;
    padding: 2rem;
  }

  .sidebar-nav-link:hover {
    border-right: 4px solid var(--primary-500);
    color: var(--primary-500);
  }

  .selected {
    border-right: 4px solid var(--primary-500);
    color: var(--primary-500);
  }
`
