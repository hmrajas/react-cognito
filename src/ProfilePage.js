/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
    Container,
    Row,
    Col,
} from "reactstrap";
import ProfilePageHeader from "./components/ProfilePageHeader";
import {Alignment, Navbar, NavbarGroup} from "@blueprintjs/core";
import {AuthenticatedUserButtons, GuestButtons} from "./UserButtons";


function ProfilePage({authStore}) {
    const [user, setUser] = React.useState({});

    React.useEffect(() => {
        authStore.getUserInfo().then((r) => {
            console.log('r', r)
            setUser(r)
        })
    }, [authStore])

    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
        document.body.classList.add("landing-page");
        return function cleanup() {
            document.body.classList.remove("landing-page");
        };
    });

    return (
        <dev>
            <ProfilePageHeader/>
            <div className="section profile-content">
                <Container>
                    {authStore.isAuthenticated() && (
                        <div className="owner" style={{"textAlignLast": "center"}}>
                            <div className="avatar">
                                <img
                                    style={{width: 100}}
                                    alt="..."
                                    src={"https://cdn.shopify.com/s/files/1/0457/8122/1536/files/DishServe-Logo-web_1200x1200.png?v=1599198063"}
                                    className="img-circle img-no-padding img-responsive"
                                />
                            </div>
                            <div className="name">
                                <h4 className="title">
                                    Welcome {user?.family_name} {user?.given_name} <br/>
                                </h4>
                                <h7 className="description">{user?.email}</h7>
                                <br/>
                                <h7 className="description">{user?.phone_number}</h7>
                            </div>
                        </div>
                    )}
                    <Row>
                        <Col className="ml-auto mr-auto text-center" md="6">
                            <NavbarGroup align={Alignment.CENTER} style={{placeContent: "center"}}>
                                {authStore.isAuthenticated() && (
                                    <AuthenticatedUserButtons
                                        signOut={authStore.signOut}
                                    />
                                )}
                                {!authStore.isAuthenticated() && (
                                    <GuestButtons signIn={authStore.signIn}/>
                                )}
                            </NavbarGroup>
                        </Col>
                    </Row>
                </Container>
            </div>
        </dev>
    );
}

export default ProfilePage;
