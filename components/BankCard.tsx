import { formatAmount } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Copy from './Copy'

const BankCard = ({ account, userName, showBalance }: CreditCardProps) => {
    return (
        <div className='flex flex-col'>
            <Link href={`/transaction-history/?id=${account.appwriteItemId}`} className='bank-card min-w-56'>
                <div className='bank-card_content'>
                    <div>
                        <h1 className='text-sm font-semibold text-white'>
                            {account.name || userName}
                        </h1>
                        <p className='font-inter font-semibold text-white'>
                            {formatAmount(account.currentBalance)}
                        </p>
                    </div>

                    <article className='flex flex-col gap-2'>
                        <div className='flex justify-between'>
                            <h1 className='text-xs font-semibold text-white'>
                                {userName}
                            </h1>
                            <h1 className='text-xs font-semibold text-white'>
                                &nbsp; ●●/●●
                            </h1>
                        </div>
                        <p className='text-xs font-semibold tracking-[1.1px] text-white'>
                            ●●●● ●●●● ●●●● <span className='text-xs'>
                                {account?.mask}
                            </span>
                        </p>
                    </article>

                </div>

                <div className='bank-card_icon'>
                    <Image src={'/icons/Paypass.svg'} width={20} height={20} alt='view card' />
                    <Image src={'/icons/mastercard.svg'} width={45} height={32} alt='view card' className='' />

                </div>

                <Image
                    src={'/icons/lines.png'}
                    width={316}
                    height={190}
                    alt='lines'
                    className='absolute top-0 left-0'
                />

            </Link>

            {showBalance && (
                // @ts-ignore
                <Copy title={account.sharaebleId} />
            )}

        </div>
    )
}

export default BankCard