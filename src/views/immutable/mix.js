import { fromJS } from "immutable";
import { useState } from "react";
export default function Mix() {
	const [userinfo, setUserinfo] = useState(
		fromJS({
			name: "aaaa",
			location: {
				province: "江苏",
				city: "南京",
			},
			favor: ["book", "read", "coding"],
		})
	);
	//setIn(['key1','key2],newValue) 操作对象
	//updateIn(['key'],(list)=>{...... return newList}) 操作数组
	return (
		<div>
			<p
				onClick={() => {
					setUserinfo(
						userinfo.setIn(["location", "city"], "无锡").setIn(["name"], "bbbb")
					);
				}}
			>
				{userinfo.get("name")}
			</p>
			<p>{userinfo.get("location").get("province")}</p>
			<p>{userinfo.get("location").get("city")}</p>
			<div>
				{userinfo.get("favor").map((item, i) => {
					return (
						<li
							onClick={() => {
								console.log(i);
								setUserinfo(
									userinfo.updateIn(["favor"], (list) => list.splice(i, 1))
								);
							}}
							key={item}
						>
							{item}
						</li>
					);
				})}
			</div>
		</div>
	);
}
