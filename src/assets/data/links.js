import { TfiHome } from 'react-icons/tfi'
import { IoWalletSharp } from 'react-icons/io5'
import { FaCoins } from 'react-icons/fa'
import { CiCreditCard2 } from 'react-icons/ci'
export const links = [
  {
    id: 1,
    icon: <TfiHome />,
    name: 'Dashboard',
    path: '/',
  },
  {
    id: 2,
    icon: <IoWalletSharp />,
    name: 'Accounts',
    path: '/accounts',
  },
  {
    id: 3,
    icon: <FaCoins />,
    name: 'Savings',
    path: '/savings',
  },
  {
    id: 4,
    icon: <CiCreditCard2 />,
    name: 'Cards',
    path: '/cards',
  },
]
