import logo from '../../assets/images/logo-undraw.svg'
import profilePic from '../../assets/images/dummy-profile-pic.jpg'
import Styled from 'styled-components'
import { SlMagnifier } from 'react-icons/sl'
import { IoIosArrowDropdownCircle } from 'react-icons/io'
import { BiMessage } from 'react-icons/bi'
import { AiOutlinePoweroff } from 'react-icons/ai'
const Navbar = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <Wrapper>
      <div className="logo-search-container">
        <img src={logo} alt="logo" className="img logo-img" />
        <form className="search-form">
          <button type="submit" className="search-btn" onSubmit={handleSubmit}>
            <SlMagnifier />
          </button>
          <input
            type="search"
            placeholder="Search.."
            className="search-input"
          />
        </form>
      </div>

      <div className="user-info-container">
        <button className="transfer-btn">Money transfer</button>

        <div className="user-name">
          <span> Hello , </span> Timok
        </div>
        <div className="img-container">
          <img
            src={profilePic}
            alt="profile pic"
            className="img pic-img
            "
          />
          <span>
            <IoIosArrowDropdownCircle />
          </span>
        </div>

        <div className="msg-container">
          <span className="msg-icon">
            <BiMessage />
          </span>
          <span className="msg-count"> 2</span>
        </div>

        <button className="logout-btn">
          <span className="logout-btn-text"> Logout</span>

          <span className="logout-btn-icon">
            <AiOutlinePoweroff />
          </span>
        </button>
      </div>
    </Wrapper>
  )
}
export default Navbar

const Wrapper = Styled.div`

  width: 90vw;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8rem;
  border-bottom: 1px solid var(--grey-50);


.logo-search-container {
  display: flex;
  align-items: center;
  gap: 3rem;
}

.logo-img {
  width: 5rem;
}

.search-form {
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 15px;
  padding: 0.5rem 1rem;
  box-shadow: var(--shadow-1);
}

.search-btn {
  background: transparent;
  border: transparent;
  color:var(--grey-500)
}

.search-input {
  border: transparent;
}

.user-info-container {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.transfer-btn {
  margin-right: 2rem;
  text-transform: uppercase;
  font-size: 0.8rem;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  background-color: #392D70;
  color: var(--grey-100);
  border: transparent;
}

.user-info {
  display: flex;
}

.user-name {
  color: var(--grey-700);
}

.user-name span {
  color: var(--grey-400);
}

.img-container {
  position: relative;
}

.pic-img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.img-container span {
  position: absolute;
  right: -5px;
  bottom: -10px;
  font-size: 1.2rem;
}

.msg-container {
  position: relative;
}

.msg-icon {
  font-size: 2rem;
  color: var(--grey-600);
  display: grid;
  place-items: center;
}

.msg-count {
  font-size: 0.7rem;
  position: absolute;
  top: -5px;
  right: 0;
  background-color: var(--primary-600);
  height: 20px;
  width: 17px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: var(--grey-200);
}

.logout-btn {
  color: var(--grey-400);
  border: transparent;
  background: transparent;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logout-btn-text {
  font-size: 1rem;
}

.logout-btn-icon {
  font-size: 1.7rem;
}
`
