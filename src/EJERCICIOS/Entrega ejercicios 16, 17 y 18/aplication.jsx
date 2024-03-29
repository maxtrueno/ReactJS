import { Route, Routes, Navigate } from "react-router-dom";
import LoginForm from "./login";
import RegisterForm from "./registrer";
import TaskForm from "./task";
import "./aplication.css"


/* Checking if the user is logged in. If they are, it will return the child component. If not, it will
redirect them to the login page. */
const requireAuth = (child) => {
  const storedEmail = localStorage.getItem('email');
  const storedPassword = localStorage.getItem('password');
  if (storedEmail && storedPassword) {
    <Navigate to="/Login-Register-Tasks/#/tasks"/>
    return child;
  }
  return <Navigate to="/" replace />;
};

function Aplication() {

  return (
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/tasks" element={requireAuth(<TaskForm />)} />
      </Routes>
  );
}

export default Aplication;