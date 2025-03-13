import { useState, useEffect } from 'react';
import MailboxFlagDown from '../assets/mailbox-flagdown.svg';
import MailboxFlagUp from '../assets/mailbox-flagup.svg';
import GitHubLogo from '../assets/github-mark.svg';
import LinkedInLogo from '../assets/iconmonstr-linkedin-3-240.png';

export function Mailbox(){

    const [mailbox, setMailbox] = useState(false)

    useEffect(() => {
        const interval = setInterval(() => {
            setMailbox((prev) => !prev);
        }, 2000); // Switch every 2 seconds for better visibility
        return () => clearInterval(interval);
    }, []);

    // Handle mailbox click event to open default email client
    const handleMailboxClick = () => {
        // Trigger a mailto link
        window.location.href = 'mailto:mayarzapalo@icloud.com?subject=Mail from Mailbox&body=Hello!';
    };


    return (
        <div className='fixed bottom-0 left-0 right-0 py-1 z-30 flex justify-between px-5 bg-[#fbfbfb] min-w-full'>
            <div className='flex space-x-2 items-center content-center'>
                <a href='https://github.com/Mayonesa90' target='_blank' rel='noreferrer'>
                    <img className='w-7 md-custom:w-10 lg-custom:w-14' src={GitHubLogo} alt="Link to Github account" />
                </a>
                <a href="https://www.linkedin.com/in/maya-arzapalo-bj%C3%B6rklund/" target='_blank' rel='noreferrer'>
                    <img className='w-7 md-custom:w-10 lg-custom:w-14' src={LinkedInLogo} alt="Link to LinkedIn account" />
                </a>
            </div>
            <img 
                className='w-12 md-custom:w-16 lg-custom:w-20 hover:cursor-pointer' 
                src={mailbox ? MailboxFlagDown : MailboxFlagUp} 
                alt="Mailbox click to send mail" 
                onClick={handleMailboxClick}
            />
        </div>
    );
}