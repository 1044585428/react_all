import { useNavigate } from "react-router-dom";

export default function Login() {
	const navigate = useNavigate();
	return (
		<div
			onClick={() => {
				localStorage.setItem("token", "123");
				navigate("/center");
			}}
		>
			login
		</div>
	);
}
