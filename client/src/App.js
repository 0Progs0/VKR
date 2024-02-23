import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {observer} from "mobx-react-lite";
import {Context} from "./index";
import {useContext, useEffect, useState} from "react";
import {check} from "./components/http/userAPI";
import {Container, Spinner} from "react-bootstrap";
import Footer from "./components/Footer";

const App = observer(() => {
    const {user} = useContext(Context)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
                check().then(data => {
                    user.setUser(true)
                    user.setIsAuth(true)
                }).finally(() => setLoading(false))
            }, 1000)
        }, [])


    if (loading) {
        return <Container className={"d-flex justify-content-center"}><Spinner animation="border" variant="primary" /></Container>
    }

    return (
    <BrowserRouter>
        <NavBar/>
        <AppRouter/>
        <Footer/>
    </BrowserRouter>
  );
})

export default App;
