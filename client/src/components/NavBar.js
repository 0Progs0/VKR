import React, { useContext } from 'react'
import { Context } from "../index"
import { Button, Container, Nav, Dropdown, Navbar, DropdownButton } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { ADMIN_ROUTE, FAVORITES, LOGIN_ROUTE, MAIN_ROUTE, PROFILE_ROUTE, USER_MATERIALS } from "../utils/consts"
import { observer } from "mobx-react-lite"
import { useNavigate } from "react-router-dom"

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const logOut = () => {
        user.setUser(false)
        user.setIsAuth(false)
    }

    return (
        <Navbar bg="primary" data-bs-theme="light">
            <Container>
                <NavLink style={{color: 'white', textDecoration:"none"}} to={MAIN_ROUTE}>SimpleEd</NavLink>
                {user.isAuth && user.user.roleId === 1
                    ?
                    <DropdownButton className="ml-auto" variant='outline-light' title="Меню">
                        
                        <Dropdown.Item variant={"outline-light"} onClick={() => navigate(ADMIN_ROUTE)}>Панель администратора</Dropdown.Item>
                        <Dropdown.Item variant={"outline-light"} onClick={() => navigate(USER_MATERIALS)}>Мои материалы</Dropdown.Item>
                        <Dropdown.Item variant={"outline-light"} onClick={() => navigate(FAVORITES)}>Избранное</Dropdown.Item>
                        <Dropdown.Item variant={"outline-light"} onClick={() => navigate(PROFILE_ROUTE)}>Профиль</Dropdown.Item>
                        <Dropdown.Item variant={"outline-light"} onClick={() => logOut()}>Выйти</Dropdown.Item>
                    </DropdownButton>
                    : user.isAuth
                        ? <DropdownButton className="ml-auto" style={{color: 'white'}} variant='outline-light'>
                            <Dropdown.Item variant={"outline-light"} onClick={() => navigate(USER_MATERIALS)}>Мои материалы</Dropdown.Item>
                            <Dropdown.Item variant={"outline-light"} onClick={() => navigate(FAVORITES)}>Избранное</Dropdown.Item>
                            <Dropdown.Item variant={"outline-light"} onClick={() => navigate(PROFILE_ROUTE)}>Профиль</Dropdown.Item>
                            <Dropdown.Item variant={"outline-light"} onClick={() => logOut()}>Выйти</Dropdown.Item>
                        </DropdownButton>
                        :
                        <Nav className="ml-auto" style={{color: 'white'}}>
                            <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Войти</Button>
                        </Nav>

                }
            </Container>
        </Navbar>
    );
});

export default NavBar;