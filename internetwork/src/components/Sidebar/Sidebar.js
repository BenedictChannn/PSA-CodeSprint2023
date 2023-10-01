import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar({ page }) {
    return (
        <div className='yellowcontainer'>
            <div>
                <Link to="/dashboard" className='link'>
                    <div className='dashicon'>
                        {page == "dash"
                            ? <img src='../../../assets/images/dashboardp.png' alt='' />
                            : <img src='../../../assets/images/dashboardb.png' alt='' />
                        }
                    </div>
                </Link>
            </div>
            <div>
                <Link to="/findworkers" className='link'>
                    <div className='dashicon'>
                        {page == "search"
                            ? <img src='../../../assets/images/searchp.png' alt='' />
                            : <img src='../../../assets/images/searchb.png' alt='' />
                        }
                    </div>
                </Link>
            </div>
            <div>
                <Link to="/profile" className='link'>
                    <div className='dashicon'>
                        {page == "user"
                            ? <img src='../../../assets/images/userp.png' alt='' />
                            : <img src='../../../assets/images/userb.png' alt='' />
                        }
                    </div>
                </Link>
            </div>
            <div>
                <div className='dashicon'>
                    {page == "feedback"
                        ? <img src='../../../assets/images/feedbackp.png' alt='' />
                        : <img src='../../../assets/images/feedbackb.png' alt='' />
                    }
                </div>
            </div>
            <div>
                <Link to="/" className='link'>
                    <div className='dashicon'>
                        <img src='../../../assets/images/logoutb.png' alt='' />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Sidebar