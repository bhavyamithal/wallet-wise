import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import BankCard from './BankCard'

const RightSideBar = ({ user, banks, transactions }: RightSidebarProps) => {
    return (
        <aside className='right-sidebar'> {/* Added pb-4 for bottom padding */}
            <section className='flex flex-col pb-8'>
                <div className='profile-banner' />
                <div className='profile'>
                    <div className='profile-img'>
                        <span className='text-5xl font-bold text-bankGradient'>
                            {user.firstName[0]}
                        </span>
                    </div>

                    <div className='profile-details'>
                        <h1 className='profile-name'>
                            {user.firstName} {user.lastName}
                        </h1>
                        <p className='profile-email'>
                            {user.email}
                        </p>
                    </div>
                </div>
            </section>

            <section className='banks'>
                <div className='flex w-full justify-between'>
                    <h2 className='header-2'>
                        My Banks
                    </h2>
                    <Link href={'/'} className='flex items-center'>
                        <Image
                            src={'/icons/plus.svg'}
                            width={20}
                            height={20}
                            alt='Add Bank'
                        />
                        <h2 className='text-14 font-semibold text-gray-600'>
                            Add Bank
                        </h2>
                    </Link>
                </div>

                {banks?.length > 0 && (
                    <div className='relative'>
                        {banks.slice(0, 2).map((bank, index) => (
                            <div
                                key={bank.$id}
                                className={`absolute ${index === 1 ? 'right-0 top-8' : ''}`}
                                style={{ zIndex: index + 1 }}
                            >
                                <BankCard
                                    account={bank}
                                    userName={`${user.firstName} ${user.lastName}`}
                                    showBalance={false}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </section>
            
        </aside>
    )
}

export default RightSideBar
