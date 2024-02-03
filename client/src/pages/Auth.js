import React from 'react';
import {Button, Card, Container, Form} from "react-bootstrap";
import {NavLink, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location)
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
                <Form className={"d-flex flex-column"}>
                    <Form.Control className={"mt-4"} placeholder="Введите email"/>
                    <Form.Control className={"mt-2"} placeholder="Введите пароль"/>
                </Form>
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
                    <Button variant={"primary"}>{isLogin ? 'Войти' : 'Зарегистрироваться'}</Button>
                </Container>
            </Card>
        </Container>
    );
};

export default Auth;