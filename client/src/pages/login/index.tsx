import { useEffect } from "react";
import { useAuthContext } from "../../services/AuthProvider";
import { useNavigate } from "react-router-dom";

function Login() {
  const { auth } = useAuthContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (auth.accessToken) {
      navigate("/", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const LoginURL = import.meta.env.DEV
    ? "http://localhost:3001/v1/auth/login"
    : "https://spotistatsserver.onrender.com/v1/auth/login";

  return (
    <div className="flex flex-col items-center gap-16 font-display">
      <h3 className="text-gray-500 text-4xl font-medium">Now Playr</h3>
      <a
        href={LoginURL}
        className="flex items-center justify-center bg-gray-800 h-11 w-[150px] uppercase hover:shadow-tesla-sm hover:-translate-y-0.5 hover:outline outline-1 active:translate-y-0.5 shadow-gray-800 text-gray-500 hover:text-gray-400 font-medium px-4 py-2 rounded-lg duration-200"
      >
        Login
      </a>
    </div>
  );
}

export default Login;
