import HeaderBox from '@/components/HeaderBox'
import RightSideBar from '@/components/RightSideBar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {

  const loggedIn = {firstName: "Bhavya", lastName: "Mithal", email: "bm820@snu.edu.in"};

  return (
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>
          <HeaderBox 
            type="greeting"  
            title="Welcome" 
            user={loggedIn?.firstName || "Guest"} 
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