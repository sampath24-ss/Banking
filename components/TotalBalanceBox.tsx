import React from 'react'
import AnimatedCounter from './AnimatedCounter'
import Donut from './Donut'


const TotalBalanceBox = ({
    accounts=[] , totalBanks,totalCurrentBalance
}: TotlaBalanceBoxProps) => {
  return (
    <section className='total-balance mb-4'>
        <div className='total-balance-chart '>
            <Donut accounts={accounts}></Donut>
        </div>
        
        <div className='flex flex-col gap-6'>
            <h2 className='header-2'> Bank Accounts: {totalBanks}</h2>
            <div className='flex flex-col gap-2'>
                <p className='total-balance-label'>
                    Total Current Balance
                </p>
                <div className='total-balance-amount flex-center gap-2'>
                        <AnimatedCounter amount={totalCurrentBalance}></AnimatedCounter>
                   </div>
            </div>
        </div>

    </section>
  )
}

export default TotalBalanceBox