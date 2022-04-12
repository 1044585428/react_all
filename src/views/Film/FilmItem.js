import { useNavigate } from "react-router-dom";
export default function FilmItem(item) {
	const navigate = useNavigate();
	const handleChangePage = (id) => {
		// navigate(`/detail?id=${id}`);
		// 路由传参
		console.log(123);
		navigate(`/detail/${id}`);
	};
	return (
		<li
			onClick={() => {
				handleChangePage(item.filmId);
			}}
		>
			{item.filmId}
			{item.name}
		</li>
	);
}
