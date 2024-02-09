import React, {useState} from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {login, registration} from "../components/http/userAPI";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const access = async () => {
        if (isLogin) {
            const response = await login();
        } else {
            const response = await registration(name, email, password);
            console.log(response)
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
};

export default Auth;