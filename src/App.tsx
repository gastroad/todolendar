import { FC } from "react"
import { Outlet } from "react-router";


const App: FC = () => {
    return (
        <>
            <Outlet />
            App
        </>
    );
};

export default App;
