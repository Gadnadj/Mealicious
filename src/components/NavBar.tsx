import React from 'react';
import { FaCaretDown, FaUser } from 'react-icons/fa';

type Props = {}

const NavBar = (props: Props) => {

    const NavLinks = [
        {
            id: 1,
            name: 'Home',
            link: '/#'
        },
        {
            id: 2,
            name: 'About',
            link: '/#'
        },
        {
            id: 3,
            name: 'Contact',
            link: '/#'
        }
    ];

    const DropdownLinks = [
        {
            id: 1,
            name: 'Vegetables',
            link: '/#'
        },
        {
            id: 2,
            name: 'Fruits',
            link: '/#'
        },
        {
            id: 3,
            name: 'Grains',
            link: '/#'
        }
    ];


    return (
        <div className='bg-white'>
            <div className='container flex justify-between py-4 sm:py-3'>
                {/* Logo Container */}
                <div className='font-bold text-3xl'>
                    Logo
                </div>

                <div>
                    <ul className='flex items-center gap-10'>
                        {NavLinks.map(({ id, name, link }) => (
                            <li key={id}>
                                <a href={link} className='inline-block hover:text-primary text-xl font-semibold'>
                                    {name}
                                </a>
                            </li>
                        ))}

                        {/* simple dropdown and links */}
                        <li className='cursor-pointer group'>
                            <a href="/#"
                                className='inline-block hover:text-primary text-xl font-semibold'>
                                <div className='flex items-center gap-[2px] py-2'>
                                    Dropdown
                                    <span>
                                        <FaCaretDown className='group-hover:rotate-180 duration-300' />
                                    </span>
                                </div>
                            </a>

                            {/* Dropdown section */}
                            <div className='absolute z-[9999] hidden group-hover:block shadow-xl shadow-red-100 w-[200px]'>
                                <ul>
                                    {
                                        DropdownLinks.map((data) => (
                                            <li key={data.id}>
                                                <a href={data.link}
                                                    className='inline-block hover:bg-primary/20 text-xl font-semibold rounded-md p-2 w-full'
                                                >
                                                    {data.name}
                                                </a>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </li>

                        {/* Login button section */}
                        <li>
                            <button className='flex items-center gap-2 bg-secondary rounded-full text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration-200'>
                                <FaUser />
                                My Account
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;