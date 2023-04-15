import { useState } from 'react'
import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri'
import Details from './Details'
import styled from 'styled-components'

const AccountCard = ({ account }) => {
  const { accountNumber, accountingBalance, availableBalance } = account
  const [details, setDetails] = useState(false)

  return (
    <Wrapper>
      <div className="card-container">
        <div className="saving-account-number">
          <p>Savings Account Number</p>
          <h4>{accountNumber}</h4>
        </div>

        <div className="balances-container">
          <div className="accounting-balance">
            <p>Accounting balance</p>
            <h4>
              <span className="dot"></span> {accountingBalance}
              <span className="curr">PLN</span>
            </h4>
          </div>
          <div className="available-balance">
            <p>Available balance</p>
            <h4>{availableBalance}</h4>
          </div>
        </div>

        <div className="btns-container">
          <button className="account-btn">Statement</button>
          <button className="account-btn">History</button>
          <button
            className="account-btn details-btn"
            onClick={() => setDetails(!details)}
          >
            Details
            {details ? (
              <span className="details-icon">
                <RiArrowDropUpLine />
              </span>
            ) : (
              <span className="details-icon">
                <RiArrowDropDownLine />
              </span>
            )}
          </button>
        </div>
      </div>

      {details && <Details account={account} />}
    </Wrapper>
  )
}
export default AccountCard

const Wrapper = styled.div`
  background-color: var(--white);
  border-radius: var(--borderRadius);
  padding: 1.5rem 3rem;

  .card-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .balances-container {
    display: flex;
    align-items: center;
    gap: 4rem;
  }

  .saving-account-number p {
    font-size: 1rem;
    color: var(--grey-400);
    margin-bottom: 0;
  }

  .saving-account-number h4 {
    font-size: 1.3rem;
  }

  .accounting-balance p {
    font-size: 1rem;
    color: var(--grey-400);
    margin-bottom: 0;
  }

  .accounting-balance h4 {
    font-size: 1.3rem;
  }

  .available-balance p {
    font-size: 1rem;
    color: var(--grey-400);
    margin-bottom: 0;
  }

  .available-balance h4 {
    font-size: 1.3rem;
  }

  .dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: var(--primary-600);
  }

  .curr {
    font-size: 0.9rem;
    padding-left: 0.3rem;
  }

  .btns-container {
    display: flex;
    gap: 1rem;
  }

  .account-btn {
    background: transparent;
    border: transparent;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    text-transform: uppercase;
    font-size: 0.7rem;
    box-shadow: var(--shadow-2);
    letter-spacing: 0.1rem;
    color: var(--grey-700);
  }

  .details-btn {
    background-color: var(--primary-700);
    color: var(--white);
    display: flex;
    align-items: center;
    font-size: 0.7rem;
    padding: 0.3rem 1rem;
  }

  .details-icon {
    color: var(--white);
    font-size: 1.3rem;
  }
`
