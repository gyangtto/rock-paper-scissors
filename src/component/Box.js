import React from 'react'

const Box = (props) => {
	let result = props.result

	if (props.title === 'COMPUTER' && result !== 'TIE' && result !== '') {
		// 타이틀이 컴퓨터이고 결과가 tie가 아니며, 값이 비어있지 않으면
		result = result === 'WIN' ? 'LOSE' : 'WIN' // 결과를 반대로 설정
	}

	return (
		<div className={`box ${result}`}>
			<h1>{props.title}</h1>
			<h2>{props.item && props.item.name}</h2>
			<img className="item-img" src={props.item && props.item.img} />
			<h2 className="judge">{props.result}</h2>
		</div>
	)
}

export default Box
