import { useState, useEffect } from 'react';
import MailboxFlagDown from '../assets/mailbox-flagdown.svg';
import MailboxFlagUp from '../assets/mailbox-flagup.svg';

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
        <div className='fixed bottom-3 right-3 z-30'>
            <img 
                className='w-12 md-custom:w-16 lg-custom:w-20' 
                src={mailbox ? MailboxFlagDown : MailboxFlagUp} 
                alt="Mailbox click to send mail" 
                onClick={handleMailboxClick}
            />
        </div>
    );
}