import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaExternalLinkAlt } from 'react-icons/fa';

interface User {
    fullName: string;
    job: string;
    image: string;
    link: string;
    link1: string;
    link2: string;
    link3: string;
    link4: string;
}

interface ExpandableUsersProps {
    users: User[];
    initialCount?: number;
}

const ExpandableUsers: React.FC<ExpandableUsersProps> = ({ users = [], initialCount = 3 }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    const displayedUsers = isExpanded ? users : users.slice(0, initialCount);

    return (
        <div>
            <div className="flex flex-wrap gap-5 justify-center">
                {displayedUsers.map((user, index) => (
                    <div key={index} className="flex flex-col items-center text-center transform transition duration-300 hover:scale-105 cursor-pointer ml-0 lg:ml-10">
                        <img
                            src={user.image}
                            alt={user.fullName}
                            className="h-32 w-32 rounded-full object-cover"
                        />



                        <div className="mt-4">
                            <p className="font-semibold">{user.fullName}</p>
                            <p className="text-sm">{user.job}</p>
                        </div>





                        <div className="flex mt-4 gap-2 rounded-full bg-white p-2">
                            <a href={user.link} target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={20} color='gray' />
                            </a>
                            <a href={user.link1} target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={20} color='gray' />
                            </a>
                            <a href={user.link2} target="_blank" rel="noopener noreferrer">
                                <FaTwitter size={20} color='gray' />
                            </a>
                            <a href={user.link3} target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={20} color='gray' />
                            </a>
                            <a href={user.link4} target="_blank" rel="noopener noreferrer">
                                <FaExternalLinkAlt size={20} color='gray' />
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            {users.length > initialCount && (
                <div className='flex justify-center mt-10'>
                    <button
                        onClick={handleToggle}
                        className="border border-white text-white hover:bg-white hover:text-[#291D5D] py-1 px-4 rounded-full"
                    >
                        {isExpanded ? 'Voir moins' : 'Voir tous les intervenants'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default ExpandableUsers;
