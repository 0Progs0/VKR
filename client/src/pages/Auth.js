import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, InputGroup} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, MAIN_ROUTE, MATERIAL_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {login, registration} from "../components/http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const access = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(name, email, password);
            }
            user.setUser(data)
            user.setIsAuth(true)
            navigate(MAIN_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    return (
        <Container
            className={"d-flex justify-content-center align-items-center"}
            style={{height: window.innerHeight - 54}}
        >
            <Card
                className={"p-5"}
                style={{width: 600}}
            >
                <h2 className={"m-auto"}>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                {isLogin ?
                    <Form className={"d-flex flex-column"}>
                        <Form.Control className={"mt-4"} placeholder="Введите email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <Form.Control className={"mt-2"} placeholder="Введите пароль" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </Form>
                    :
                    <Form className={"d-flex flex-column"}>
                        <Form.Control className={"mt-4"} placeholder="Введите имя"  value={name} onChange={(e) => setName(e.target.value)}/>
                        <Form.Control className={"mt-2"} placeholder="Введите email"  value={email} onChange={(e) => setEmail(e.target.value)}/>
                        <Form.Control className={"mt-2"} placeholder="Введите пароль" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </Form>
                }

                <Container className={"d-flex justify-content-between mt-3 p-0"}>
                    {isLogin ?
                        <div>
                            Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Создать</NavLink>
                        </div>
                        :
                        <div>
                            Уже есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войти</NavLink>
                        </div>
                    }
                    <Button variant={"primary"} onClick={access}>{isLogin ? 'Войти' : 'Зарегистрироваться'}</Button>
                </Container>
            </Card>
        </Container>
    );
});

export default Auth;
