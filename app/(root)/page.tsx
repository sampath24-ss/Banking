import HeaderBox from '@/components/HeaderBox'
import Rightsidebar from '@/components/Rightsidebar';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react'

const Home = () => {
  const loggedIn = {firstName: 'Sampath',lastName: 'M',email: 'sampath@gmail.com'};
  return (
   
    <section className='home'>
      <div className='home-content'>
        <header className='home-header'>Welcome Sam,
          <HeaderBox 
          type='greeting'
          title='Welcome'
          user={loggedIn.firstName || 'Guest'}
          subtext='Feel free to explore our services and your transaction'
          ></HeaderBox>
          <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1250}>

          </TotalBalanceBox>
        </header>
        Recent Transcation
      </div>
      <Rightsidebar user={loggedIn} trabsaction={[]} banks={[]}></Rightsidebar>
    </section>
  )
}

export default Home