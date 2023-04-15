import accounts from '../../assets/data/accounts'
import AccountCard from './AccountCard'
import styled from 'styled-components'

const AccountsList = () => {
  return (
    <Wrapper>
      {accounts.map((account, index) => {
        return <AccountCard key={index} account={account} />
      })}
    </Wrapper>
  )
}
export default AccountsList

const Wrapper = styled.div`
  display: grid;
  gap: 1rem;
`
