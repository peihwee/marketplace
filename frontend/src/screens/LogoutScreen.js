import { Redirect } from "react-router";

export default function LogoutScreen() 
{
    localStorage.removeItem('user');
    return (
      <Redirect to="/" />
    );
}