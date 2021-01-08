import React, {useState} from 'react';

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIseLoggedIn] = useState(false);

    const logIn = (email, password) => {
        if(email === 'test@test.com' && password === "123123") {
            setIseLoggedIn(true);
            return true;
        }
        return false;
    };

    const logOut = () => {
        setIseLoggedIn(false);
    }

    const context = {logIn, logOut, isLoggedIn};

    return (
        <AuthContext.Provider value={context}>
            {children}
        </AuthContext.Provider>
    );
};

const withAuth = (WrappedComponent) => {
    return class extends React.Component {
        render() {
            return (
                <AuthContext.Consumer>
                    {
                        context => {
                            return <WrappedComponent {...context} {...this.props}/>
                        }
                    }
                </AuthContext.Consumer>
            )
        }
    }
}

export default withAuth;