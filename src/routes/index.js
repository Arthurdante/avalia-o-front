import { BrowserRouter, Route, Routes } from "react-router-dom";
import Body from "../components/Body";
import FlorScreen from "../screens/FlorScreen";
import HomeScreen from "../screens/HomeScreen";
import SobreScreen from "../screens/SobreScreen";




export default function RouterRoot() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Body />} path="/" >
                    <Route element={<HomeScreen />} path="/" />
                    <Route element={<FlorScreen />} path="Flor/:id"/>
                    <Route element={<SobreScreen />} path="Sobre" />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}