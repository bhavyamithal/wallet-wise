
import { logoutAccout } from '@/lib/actions/user.actions'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const Footer = ({ user, type = 'desktop' }: FooterProps) => {

    const router = useRouter();

    const handleLogout = async () => {
        const response = await logoutAccout();

        if (response) router.push('/sign-in');
    }

    return (
        <footer className='footer'>
            <div className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name'}>
                <p className='text-xs font-bold text-gray-700'>
                    {user?.firstName[0]}
                </p>
            </div>

            <div className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email'}>
                <h1 className='text-xs truncate font-semibold text-gray-700'>
                    {`${user?.firstName} ${user?.lastName}`}
                </h1>
                <p className='text-xs truncate font-normal text-gray-600'>
                    {user?.email}
                </p>
            </div>

            <div className='footer_image' onClick={handleLogout} >
                <Image src={'/icons/logout.svg'} width={16} height={16} alt='logout' />
            </div>

        </footer>
    )
}

export default Footer