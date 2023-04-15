import styled from 'styled-components'

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useState } from 'react'
import {
  AccountsHistory,
  AccountsList,
  BankStatements,
  TransferSalary,
} from '../../components/accounts'

const Accounts = () => {
  const [index, setIndex] = useState(0)

  return (
    <Wrapper>
      <h4 className="header">Accounts</h4>
      <p className="sub-header">You are in accounts panel</p>
      <Tabs defaultIndex={0} onSelect={(index) => setIndex(index)}>
        <TabList className="account-tabs">
          <Tab selectedClassName="selected-tab">Accounts list</Tab>
          <Tab selectedClassName="selected-tab">Accounts History</Tab>
          <Tab selectedClassName="selected-tab">Bank Statements</Tab>
          <Tab selectedClassName="selected-tab">Transfer salary</Tab>
        </TabList>
        <TabPanel>
          <AccountsList />
        </TabPanel>
        <TabPanel>
          <AccountsHistory />
        </TabPanel>
        <TabPanel>
          <BankStatements />
        </TabPanel>
        <TabPanel>
          <TransferSalary />
        </TabPanel>
      </Tabs>
    </Wrapper>
  )
}
export default Accounts

const Wrapper = styled.div`
  padding: 1rem 2rem;

  .account-tabs {
    display: flex;
    gap: 2rem;
    color: var(--grey-500);
    margin-bottom: 2rem;
  }

  .selected-tab {
    color: var(--primary-500);
    border-bottom: 2px solid var(--primary-500);
  }

  .header {
    margin-bottom: 0;
    color: var(--primary-700);
  }

  .sub-header {
    color: var(--grey-400);
    font-size: 0.9rem;
  }
`
