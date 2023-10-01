import { Menu, Transition } from '@headlessui/react'
import React, { Fragment, useState } from 'react'

interface  TrainerMenuButtonProps {
    imgSrc: string;
    altText: string;
    trainerName: string;
    trainerEmail: string;
    trainerPhone: string;
  }

export const Avatar: React.FC<TrainerMenuButtonProps> = ({ imgSrc, altText, trainerName, trainerEmail, trainerPhone }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <Menu as="div" className="relative ml-3" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <div>
                <Menu.Button
                    className={`relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 hover:bg-gray-900 ${isHovered ? 'hover:shadow-lg' : ''}`}
                    >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Open user menu</span>
                        <img
                            className="h-12 w-12 rounded-full"
                            src={imgSrc}
                            alt={altText}
                        />
                </Menu.Button>
            </div>
            <Transition
                as={React.Fragment}
                show={isHovered}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute left-0 z-10 mt-2 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <p>{trainerName}</p>
                    <p>{trainerEmail}</p>
                    <p>{trainerPhone}</p>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
