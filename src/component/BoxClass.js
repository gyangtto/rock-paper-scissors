import React, { Component } from 'react'

class BoxClass extends Component {
	render() {
		let result = this.props.result // props 에서 result 추출

		// title 이 COMPUTER 이고 result 가 TIE 가 아니며 비어있지 않을 때
		if (this.props.title === 'COMPUTER' && result !== 'TIE' && result !== '') {
			// 결과를 반대로 설정
			result = result === 'WIN' ? 'LOSE' : 'WIN'
		}

		return (
			<div className={`box ${result}`}>
				<h1>{this.props.title}</h1> {/* title 표시 */}
				<h2>{this.props.item && this.props.item.name}</h2> {/* item 의 이름 표시 */}
				<img className="item-img" src={this.props.item && this.props.item.img} />{' '}
				{/* item 이미지 표시 */}
				<h2 className="judge">{this.props.result}</h2> {/* 결과 표시 */}
			</div>
		)
	}
}

export default BoxClass
