"use client";
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import Footer from './Footer';
import PlaidLink from './PlaidLink';

const Sidebar = ({ user }: SiderbarProps) => {

    const pathname = usePathname();

    return (
        <section className='sidebar z-10'>
            <nav className='flex flex-col gap-4'>
                <Link href={'/'} className='flex mb-12 cursor-pointer items-center gap-2'>
                    <Image src={'/icons/logo.svg'} width={40} height={40} alt='WalletWise' className=' max-xl:size-14' />
                    <h1 className='sidebar-logo'>WalletWise</h1>
                </Link>



                {sidebarLinks.map((item) => {

                    const isActive = (
                        pathname === item.route || pathname.startsWith(`${item.route}/`)
                    );

                    return (
                        <Link
                            href={item.route}
                            key={item.label}
                            className={
                                cn('sidebar-link', { 'bg-bank-gradient': isActive })
                            }>
                            <div className='relative '>
                                <Image src={item.imgURL} alt={item.label} width={24} height={24} className={cn({ 'brightness-[3] invert-0': isActive })} />
                            </div>
                            <p className={cn('sidebar-label whitespace-nowrap', { '!text-white': isActive })}>
                                {item.label}
                            </p>
                        </Link>
                    )
                })}

                <PlaidLink user={user} />
            </nav>

            <Footer user={user} />
        </section>
    )
}

export default Sidebar