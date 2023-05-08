import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../../../pages/home/home"));
const Login = lazy(() => import("../../../pages/login/login"));
const Register = lazy(() => import("../../../pages/register/register"));
const Add = lazy(() => import("../../../pages/add/add"));
const PlantList = lazy(() => import("../../../pages/plantList/plantList"));
const Edit = lazy(() => import("../../../pages/edit/edit"));

export function AppRouter() {
  return (
    <Suspense>
      <Routes>
        <Route path={"/"} element={<Home></Home>}></Route>
        <Route path={"/login"} element={<Login></Login>}></Route>
        <Route path={"/register"} element={<Register></Register>}></Route>
        <Route path={"/plants"} element={<PlantList></PlantList>}></Route>
        <Route path={"/add"} element={<Add></Add>}></Route>
        <Route path={"/edit"} element={<Edit></Edit>}></Route>
      </Routes>
    </Suspense>
  );
}
