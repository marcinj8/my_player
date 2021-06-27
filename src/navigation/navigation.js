import React, { useContext } from 'react';

import {
    NavLink,
} from "react-router-dom";
import AuthContext from '../auth/authentication/authContext';

import { StyledNavigation, StyledNavigationList, StyledNavigationItem } from './navigation.scss';

const Navigation = () => {

    const auth = useContext(AuthContext);
    const isMember = auth.accountType === 'MAIN' ? true : false;

    return (
        <StyledNavigation>
            <StyledNavigationList>
                {
                    !isMember && <StyledNavigationItem>
                        <NavLink to="/login/member">login</NavLink>
                    </StyledNavigationItem>
                }
                {
                    auth.token && isMember && <StyledNavigationItem
                        onClick={auth.logout}
                    >
                        logout
                    </StyledNavigationItem>
                }
                <StyledNavigationItem>
                    <NavLink to="/playlists">playlists</NavLink>
                </StyledNavigationItem>
            </StyledNavigationList>
        </StyledNavigation>
    )
}

export default Navigation;