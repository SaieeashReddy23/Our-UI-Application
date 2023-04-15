import styled from 'styled-components'

const Details = ({ account }) => {
  const {
    ownershipStatus,
    plan,
    openDate,
    percentage,
    currency,
    blocked,
    bankStatement,
    accountType,
  } = account
  return (
    <Wrapper>
      <div>
        <div className="detail">
          <p className="detail-name">OwnerShip Status: </p>
          <p className="detail-value">{ownershipStatus}</p>
        </div>
        <div className="detail">
          <p className="detail-name">Plan: </p>
          <p className="detail-value">{plan}</p>
        </div>
        <div className="detail">
          <p className="detail-name">Open date: </p>
          <p className="detail-value">{openDate}</p>
        </div>
      </div>
      <div>
        <div className="detail">
          <p className="detail-name">Percentage: </p>
          <p className="detail-value">{percentage}</p>
        </div>
        <div className="detail">
          <p className="detail-name">Currency: </p>
          <p className="detail-value">{currency}</p>
        </div>
        <div className="detail">
          <p className="detail-name">Blocked: </p>
          <p className="detail-value">{blocked}</p>
        </div>
      </div>
      <div>
        <div className="detail">
          <p className="detail-name">Bank statement: </p>
          <p className="detail-value">{bankStatement}</p>
        </div>
        <div className="detail">
          <p className="detail-name">Account type: </p>
          <p className="detail-value">{accountType}</p>
        </div>
        <div className="detail">
          <p className="detail-name">PayU Express service: </p>
          <p className="detail-value">{openDate}</p>
        </div>
      </div>
    </Wrapper>
  )
}
export default Details

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  border-top: 1px solid var(--grey-50);
  padding-top: 1rem;

  .detail {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .detail-name {
    font-size: 0.8rem;
  }

  .detail-value {
    color: var(--grey-300);
    font-size: 0.8rem;
  }
`
