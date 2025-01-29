
import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

const Home = () => {
    const loggedIn = { firstName: 'Abhishek', lastName: 'Singh' }
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
            </div>
      </section>
  )
}

export default Home