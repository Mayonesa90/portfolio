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

    return (
        <div className='fixed bottom-3 right-3 z-30'>
            <img className='w-12 md-custom:w-16 lg-custom:w-20' src={mailbox ? MailboxFlagDown : MailboxFlagUp} alt="Mailbox click to send mail" />
        </div>
    );
}