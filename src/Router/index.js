import { Navigate, Route, Routes, useRoutes } from "react-router-dom";
import Redirect from "../components/Redirect";
import React from "react";

export default function MRouter() {
	return useRoutes([
		{
			path: "/film/",
			element: LazyLoad("Film"),
			children: [
				{ path: "nowplaying", element: LazyLoad("Film/Nowplaying") },
				{ path: "comingsoon", element: LazyLoad("Film/ComingSoon") },
				{ path: "", element: <Redirect to="/film/nowplaying" /> },
			],
		},
		{
			path: "/center",
			element: <AuthComponent>{LazyLoad("Center")}</AuthComponent>,
		},
		{
			path: "/cinema",
			element: LazyLoad("Cinema"),
		},
		{
			path: "/login",
			element: LazyLoad("Login"),
		},
		{
			path: "/detail/:id",
			element: LazyLoad("Film/Detail_params/"),
		},
		{
			path: "antd",
			element: LazyLoad("antd/01-antdyr.js"),
		},
		{
			path: "/immutable/",
			element: LazyLoad("immutable"),
			children: [
				{
					path: "mix",
					element: LazyLoad("immutable/mix"),
				},
				{
					path: "",
					element: <Redirect to="/immutable/mix" />,
				},
			],
		},
		{
			path: "/",
			element: <Redirect to="/immutable" />,
		},
	]);
}
//路由拦截组件的封装
function AuthComponent({ children }) {
	const isLogin = localStorage.getItem("token");
	return isLogin ? children : <Redirect to="/login" />;
}
//路由懒加载的封装
const LazyLoad = (path) => {
	const OtherComponent = React.lazy(() => import(`../views/${path}`));
	return (
		<React.Suspense fallback={<>...加载中...</>}>
			<OtherComponent />
		</React.Suspense>
	);
};
