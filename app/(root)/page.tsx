
import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: 'Abhishek', lastName: 'Singh', email: 'c4coder3377@gmail.com'}
    return (
        <section className='home'>
            <div className='home-content '>
                <header className='home-header'>
                    <HeaderBox
                        title = 'Welcome'
                        type = 'greeting'
                        user={loggedIn?.firstName || 'Guest'}
                        subtext = 'Here are your recent transactions'
                    />

                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={9780.75}
                    />
                </header>
                Recent Transactions
            </div>
            <RightSidebar
                // these are the props that are passed to the RightSidebar component , and they have values which are needed to be passed to the component for it to work
                user={loggedIn}
                transactions={[]}
                banks={[{ currentBalance: 123.50 }, { currentBalance: 110 }]}
            />
      </section>
  )
}

export default Home