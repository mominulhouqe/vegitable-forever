import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { InputAdornment, Typography } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email'; // Import the Email icon
import SendIcon from '@mui/icons-material/Send'; // Import the Send icon

const Subscribe = () => {
    const [email, setEmail] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // You can add code here to handle the subscription, e.g., send the email to a server.

        // For the example, let's simulate a successful subscription.
        setSubscribed(true);
    };

    const handleSendClick = () => {
        if (email) {
            handleSubmit({ preventDefault: () => { } });
        }
    };

    return (
        <div className="">
            <Typography variant="h6" className="mb-4
            ">
                Subscribe Now
            </Typography>
            <p className="text-xs mb-4">Subscribe your email for newsletters and featured news based on your interests.</p>
            {subscribed ? (
                <p className="text-xl mb-4 text-green-600">You are subscribed! Thank you.</p>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4 ">
                    <TextField
                        type="email"
                        label="Write your email here"
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={handleEmailChange}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <p
                                        onClick={handleSendClick}
                                        color="secondary" 

                                        className='btn btn-ghost btn-sm'
                                    >
                                        <SendIcon/>
                                    </p>
                                </InputAdornment>
                            ),
                        }}
                        className="text-white"
                    />
                </form>
            )}
        </div>
    );
};

export default Subscribe;
