import React, { Component } from 'react'
import './App.css'
import BoxClass from './component/BoxClass.js'
// import Box from './component/Box.js'

// 선택 옵션 및 승패 판단을 위한 객체
const choice = {
	rock: {
		name: 'Rock',
		img: '/img/rock.png'
	},
	scissors: {
		name: 'Scissors',
		img: '/img/scissors.png'
	},
	paper: {
		name: 'Paper',
		img: '/img/paper.png'
	}
}

class App extends Component {
	constructor(props) {
		super(props)
		// 초기 상태 설정
		this.state = {
			userSelect: null, // 사용자가 선택한 항목
			computerSelect: null, // 컴퓨터가 선택한 항목
			result: '' // 게임 결과
		}
	}

	// 사용자의 선택에 따라 게임을 진행하는 메서드
	play = (userChoice) => {
		// 사용자 선택 상태 업데이트
		this.setState({ userSelect: choice[userChoice] })
		// 컴퓨터가 랜덤하게 선택
		const computerChoice = this.randomChoice()
		// 컴퓨터 선택 상태 업데이트
		this.setState({ computerSelect: computerChoice })
		// 결과 판단 및 업데이트
		this.setState({ result: this.judgement(choice[userChoice], computerChoice) })
	}

	// 승패를 판단하는 메서드
	judgement = (user, computer) => {
		if (user.name === computer.name) {
			return 'TIE' // 비긴 경우
		} else if (user.name === 'Rock') {
			return computer.name === 'Scissors' ? 'WIN' : 'LOSE' // 가위에게 이기거나 지는 경우
		} else if (user.name === 'Scissors') {
			return computer.name === 'Paper' ? 'WIN' : 'LOSE' // 보에게 이기거나 지는 경우
		} else if (user.name === 'Paper') {
			return computer.name === 'Rock' ? 'WIN' : 'LOSE' // 바위에게 이기거나 지는 경우
		}
	}

	// 컴퓨터가 랜덤하게 선택하는 메서드
	randomChoice = () => {
		const itemArray = Object.keys(choice)
		const randomItem = Math.floor(Math.random() * itemArray.length)
		const final = itemArray[randomItem]
		return choice[final]
	}

	render() {
		// 클래스의 상태(State) 및 메서드를 변수에 할당
		const { userSelect, computerSelect, result } = this.state

		return (
			<div>
				<div className="main">
					{/* 사용자와 컴퓨터의 선택을 표시하는 BoxClass 컴포넌트 */}
					<BoxClass title="YOU" item={userSelect} result={result} />
					<BoxClass title="COMPUTER" item={computerSelect} result={result} />
				</div>
				<div className="main">
					{/* 가위, 바위, 보 버튼 */}
					<button onClick={() => this.play('scissors')}>
						<img src="/img/scissors-user.png" alt="scissors" />
					</button>
					<button onClick={() => this.play('rock')}>
						<img src="/img/rock-user.png" alt="rock" />
					</button>
					<button onClick={() => this.play('paper')}>
						<img src="/img/paper-user.png" alt="paper" />
					</button>
				</div>
			</div>
		)
	}
}

export default App
