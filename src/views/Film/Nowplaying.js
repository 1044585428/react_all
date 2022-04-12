import axiox from "axios";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import FilmItem from "./FilmItem";

export default function NowPlaying() {
	const [filmList, setFilmList] = useState([]);
	useEffect(() => {
		axiox({
			url: "https://m.maizuo.com/gateway?cityId=320100&pageNum=1&pageSize=10&type=1&k=8992012",
			headers: {
				"X-Client-Info":
					'{"a":"3000","ch":"1002","v":"5.2.0","e":"16478301611309123211689985","bc":"220100"}',
				"X-Host": "mall.film-ticket.film.list",
			},
		}).then((res) => {
			setFilmList(res.data.data.films);
		});
	}, []);
	// const navigate = useNavigate();
	// const handleChangePage = (id) => {
	// 	// navigate(`/detail?id=${id}`);
	// 	// 路由传参
	// 	navigate(`/detail/${id}`);
	// };
	return (
		<div>
			<ul>
				{/* {filmList.map((e) => (
					<li key={e.filmId} onClick={() => handleChangePage(e.filmId)}>
						{e.filmId}--{e.name}
					</li>
				))} */}
				{filmList.map((e) => (
					<FilmItem key={e.filmId} {...e} />
				))}
			</ul>
		</div>
	);
}
