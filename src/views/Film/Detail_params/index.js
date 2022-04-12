import { useNavigate, useParams } from "react-router-dom";

export default function DetailParams() {
	const navigate = useNavigate();
	const params = useParams();
	console.log(111, params);
	return (
		<div>
			Detail
			<button
				onClick={() => {
					navigate("/detail/1000");
				}}
			>
				guess
			</button>
		</div>
	);
}
