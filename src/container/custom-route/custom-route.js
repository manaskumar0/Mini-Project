import React, { Component } from 'react';
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

class CRoute extends Component {
    getExtractedJson({ component, cprivate, crole, actions, auth, ...rest }) {
        return rest;
    }
    render() {
        const rest = this.getExtractedJson(this.props);
        const isUserLoggedIn = this.props.auth.token ? this.props.auth.token !== "" : false;        
        const userCurrentRole = this.props.auth.role;
        const { component, cprivate, crole } = this.props;
        const Component = component;

        let redirectTo = undefined;
        if (isUserLoggedIn && rest.path === "/login")
            redirectTo = "/";
        else if (!isUserLoggedIn && cprivate)
            redirectTo = "/login";
        else if (isUserLoggedIn && cprivate && crole && crole.filter((item) => item === userCurrentRole).length === 0)
            redirectTo = "/unauthorized-access";
        

        return (
            <Route
                {...rest}
                render={props => (
                    (redirectTo)
                        ? <Redirect to={{ pathname: redirectTo, state: { from: props.location } }} />
                        : <Component {...props} />
                )}
            />
        );
    }
}

const mapStateToProps = (state) => {
    const { auth, reg } = state;
    return {
        auth: auth,
        reg: reg
    }
};

const mapDispatchToProps = dispatch => ({
    actions: {
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CRoute)
