import { App } from "pages";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
    return (
        <Routes>
            <Route index element={<App />} />
        </Routes>
    )
}
export default AppRouter;