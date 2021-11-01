import React from "react";
import { Redirect } from "react-router";

class StrictAccess extends React.Component {
    constructor(props) {
        super(props);
        this.handleRedirect = this.handleRedirect.bind(this);
    }

    handleRedirect(){
        const redirect = <Redirect to='/' />
        alert('Acces Denied')
        return (redirect)
    }
    render() {
        const {user, password} = this.props;
        const validUser = user === 'joao';
        const validPassword = password === '1234';
        return (
            <>
            {(validUser && validPassword)
            ? <p>Welcome {user}</p> : this.handleRedirect()}
            </>
        )
    }
}

export default StrictAccess;