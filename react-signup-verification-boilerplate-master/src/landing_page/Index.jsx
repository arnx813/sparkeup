import React from 'react';

import { accountService } from '@/_services';

function LandingPage() {
    
    return (
        <div>
            
            <p>THIS IS A LANDING PAGE</p>
            <Link to="/account/login">
                <button type="button">
                    LOG IN
                </button>
            </Link>
        </div>
    );
}

export { LandingPage };