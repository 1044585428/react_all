import { Link, NavLink } from "react-router-dom";
import style from "./tabbar.module.css";
export default function Tabbar() {
	return (
		<div className={style.tabbar}>
			<ul>
				{/* Link 组件，不方便添加样式 */}
				<li>
					<Link to="/film">film</Link>
				</li>
				<li>
					<Link to="/cinema">cinema</Link>
				</li>
				<li>
					<Link to="/center">center</Link>
				</li>
				{/* Link 组件，不方便添加样式 */}
				<li>
					<NavLink
						to="/film"
						className={({ isActive }) => (isActive ? style.active : "")}
					>
						film
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/cinema"
						className={({ isActive }) => (isActive ? style.active : "")}
					>
						cinema
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/center"
						className={({ isActive }) => (isActive ? style.active : "")}
					>
						center
					</NavLink>
				</li>
			</ul>
		</div>
	);
}
