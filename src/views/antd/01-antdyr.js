import { Button, Col, Row } from "antd";

export default function Antd() {
	return (
		<div>
			<Button loading={true} type="primary">
				123
			</Button>
			<Row>
				<Col span={6}>123</Col>
				<Col span={6}>123</Col>
			</Row>
		</div>
	);
}
