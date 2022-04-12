import { Navigate, Route, Routes } from "react-router-dom";
import Film from "../views/Film";
// import Cinema from "../views/Cinema";
import Center from "../views/Center";
import Redirect from "../components/Redirect";
import NotFound from "../views/notFound";
import NowPlaying from "../views/Film/Nowplaying";
// import ComingSoon from "../views/Film/ComingSoon";
// import Detail from "../views/Film/Detail";
import DetailParams from "../views/Film/Detail_params/Detail_Params";
// import Login from "../views/Login";
import React from "react";

export default function MRouter() {
	return (
		<Routes>
			<Route
				path="/center"
				element={
					<AuthComponent>
						<Center />
					</AuthComponent>
				}
			/>
			{/* 与V5版本的render不同，render每次改变都会重新执行一次，element在初始化
			后就不会再改变了，因此需要传入动态组件，实现页面的及时改变 */}

			{/* <Route
				path="/center"
				element={isAuth() ? <Center /> : <Redirect to="/login" />}
			/> */}

			<Route path="/login" element={LazyLoad("Login")} />
			<Route path="/cinema" element={LazyLoad("Cinema")} />
			{/* <Route path="/detail" element={<DetailParams />} /> */}
			{/* <Route path="/detailparams" element={<DetailParams />} /> */}
			<Route path="/film" element={<Film />}>
				{/* 当路由中没有匹配嵌套中的路由时，默认匹配index */}
				<Route index element={<NowPlaying />} />
				<Route path="/film/nowplaying" element={LazyLoad("Film/Nowplaying")} />
				<Route path="/film/comingsoon" element={LazyLoad("Film/ComingSoon")} />
			</Route>
			{/* <Route path="*" element={<Redirect to="/film" />} /> */}
			<Route path="/" element={<Navigate to="/film" />} />
			<Route path="*" element={<NotFound />} />
			{/* 动态路由 */}
			<Route path="/detail/:id" element={<DetailParams />} />
			{/* <Route index element={<Film />} /> */}
			{/* 只有当路径为  /  时进入film */}
			{/* <Route path="/" element={<Navigate to="/film" />} /> */}
			{/* 当以上其他路径都不匹配时，  进入film */}
			{/* <Route path="*" element={<Navigate to="/film" />} /> */}
			{/* 实现路由重定向，方法一 */}
			{/* <Route path="*" element={<Navigate to="/film" />} /> */}
			{/* 方法二   自定 义Redirect组件*/}
			{/* <Route path="*" element={<Redirect to="/film" />} /> */}
		</Routes>
	);
}
//路由拦截组件的封装
function AuthComponent({ children }) {
	const isLogin = localStorage.getItem("token");
	return isLogin ? children : <Redirect to="/login" />;
}
//路由懒加载的封装
const LazyLoad = (path) => {
	console.log(path);
	// const OtherComponent = React.lazy(() => import(`../views/${path}`));
	console.log(`../views/${path}`);
	const OtherComponent = React.lazy(() => import(`../views/${path}`));
	// const OtherComponent = React.lazy(() => import(''));

	// const Comp = React.lazy(() => import(path));
	return (
		<React.Suspense fallback={<>...加载中...</>}>
			<OtherComponent />
		</React.Suspense>
	);
};
