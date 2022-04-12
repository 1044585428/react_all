import { useSearchParams } from "react-router-dom";

export default function Detail() {
	const [searchParams, setSearchParams] = useSearchParams();
	console.log(searchParams.get("id")); //获取id参数
	console.log(searchParams.has("id")); //判断是否存在
	return (
		<div>
			detail
			<button
				onClick={() => {
					setSearchParams( { id: 1234 });
					//修改当前路径的参数并跳转
				}}
			>
				guess
			</button>
		</div>
	);
}
