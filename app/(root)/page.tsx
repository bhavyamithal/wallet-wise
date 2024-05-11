import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Home = async () => {

  const loggedIn = await getLoggedInUser();

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"  
            title="Welcome" 
            user={loggedIn?.name || "Guest"} 
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox
            accounts={[]} 
            totalBanks={1} 
            totalCurrentBalance={1200.50}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSideBar 
        user={loggedIn} 
        banks={[{currentBalance: 125}, {currentBalance: 250}]} 
        transactions={[]}
      />
    </section>
  )
}

export default Home