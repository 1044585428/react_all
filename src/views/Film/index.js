import { Outlet } from "react-router-dom";
import style from "./film.module.css";
export default function Film() {
	return (
		<div>
			<div className={style.swiper}>asdasd</div>
			<Outlet></Outlet>
		</div>
	);
}
