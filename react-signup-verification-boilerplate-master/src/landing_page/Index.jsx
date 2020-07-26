import React from 'react';
import { Link } from 'react-router-dom'

import { accountService } from '@/_services';

function LandingPage() {
    
    return (
        <div>
            <p>THIS IS A LANDING PAGE</p>

            <Link to='/account/login'>
                <button>
                    Log In
                </button>
            </Link>

        </div>
    );
}

export { LandingPage };