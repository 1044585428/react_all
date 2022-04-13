import { List, Map } from "immutable";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
//Map
// export default function Immutable() {
// 	const obj = {
// 		name: "aaa",
// 		age: 100,
// 	};
// 	const oldImmuObj = Map(obj);
// 	const newImmuObj = oldImmuObj.set("name", "qwe");

// 	//获取immutable 对象的值   方法一
// 	console.log(oldImmuObj.get("name"));
// 	console.log(newImmuObj.get("name"));
// 	//方法二
// 	console.log(oldImmuObj.toJS());
// 	console.log(newImmuObj.toJS());
// 	const [info, setInfo] = useState(Map({ name: "zzz", age: 100 }));
// 	const [info2, setInfo2] = useState({ name: "zzz", age: 100 });

// 	return (
// 		<div>
// 			<div
// 				onClick={() => {
// 					setInfo(info.set("name", "xxx"));
// 				}}
// 			>
// 				{info.get("name")}
// 			</div>
// 			<div
// 				onClick={() => {
// 					setInfo2(Map(info2).set("name", "ccc").toJS());
// 				}}
// 			>
// 				{info2.name}
// 			</div>
// 			<Child></Child>
// 		</div>
// 	);
// }

// 使用Map()  包裹对象，可以在给子组件传递参数时，判断子组件依赖的参数是否改变，是否需要重新渲染
export default function Immutable() {
	const navigate = useNavigate();
	useEffect(() => {
		console.log("father");
	}, []);
	const [info, setInfo] = useState(
		Map({
			name: "aa",
			obj: Map({ text: "", up: "ok" }),
		})
	);
	const [state, setState] = useState({ name: "qqq", obj: { text: "qwe" } });
	return (
		<div>
			<div
				onClick={() => {
					const newObj = info.set("name", "bb");
					setInfo(newObj);
				}}
			>
				{info.get("name")}
				<Child obj={state.obj}></Child>
			</div>
			<div
				onClick={() => {
					const newObj = Map(state).set("name", "bbb").toJS();

					setState(newObj);
				}}
			>
				{state.name}
				<Child obj={state.obj}></Child>
			</div>
			<button
				onClick={() => {
					navigate("/immutable/mix");
				}}
			>
				混合 map list
			</button>
			<Outlet></Outlet>
		</div>
	);
}
//list
function Child(props) {
	useEffect(() => {
		console.log("child");
		console.log(props);
	}, [props]);
	return <div>fff</div>;
}

// export default function Immutable() {
// 	const [arr, setArr] = useState([1, 2, 3]);
// 	const newArr = List(arr);
// 	const a1 = newArr.push(...[4, 5]);
// 	const a2 = a1.concat(...[6, 7]);
// 	console.log(arr, a1.toJS(), a2.toJS());
// 	return <div></div>;
// }
