//qui metteremo il nostro outltet per mantenere header e footer uguali anche se passiamo ad un'altra pagini, cambierà solo il main
//dovremmo esportarlo e impostarlo nell'app.jsx come contenitore di tutti i componenti (per passarli a cascata alle Route)
import { Outlet } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import AppBody from "../components/AppBody"
import AppFooter from "../components/AppFooter"



export default function LayoutOutlet() {

    return (
        <>
            <AppHeader />
            <AppBody>
                <Outlet />
            </AppBody>
            <AppFooter />
        </>

    )

}