import { useState } from 'react'
import './App.css'
// import Box from './component/Box'
import BoxClass from './component/BoxClass.js'

// 1. 박스 2개 (타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 됨
// 5. 승패 확인
// 6. 승패 결과에 따라 테두리 색이 바뀜 (이기면 초록, 지면 빨강, 비기면 검정)

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

function App() {
	const [userSelect, setUserSelect] = useState(null)
	const [computerSelect, setComputerSelect] = useState(null)
	const [result, setResult] = useState('')
	const play = (userChoice) => {
		// console.log('선택됨', userChoice)
		setUserSelect(choice[userChoice])
		let computerChoice = randomChoice()
		setComputerSelect(computerChoice)
		setResult(judgement(choice[userChoice], computerChoice))
	}

	const judgement = (user, computer) => {
		console.log('user: ', user, 'computer: ', computer)

		if (user.name === computer.name) {
			return 'TIE'
		} else if (user.name === 'Rock') {
			return computer.name === 'Scissors' ? 'WIN' : 'LOSE'
		} else if (user.name === 'Scissors') {
			return computer.name === 'Paper' ? 'WIN' : 'LOSE'
		} else if (user.name === 'Paper') {
			return computer.name === 'Rock' ? 'WIN' : 'LOSE'
		}
	}

	const randomChoice = () => {
		let itemArray = Object.keys(choice)
		// console.log('item array : ', itemArray)
		let randomItem = Math.floor(Math.random() * itemArray.length)
		console.log('random idx: ', randomItem)
		let final = itemArray[randomItem]
		console.log('final :', final)
		return choice[final]
	}

	return (
		<div>
			<div className="main">
				<BoxClass title="YOU" item={userSelect} result={result} />
				<BoxClass title="COMPUTER" item={computerSelect} result={result} />
			</div>
			<div className="main">
				<button onClick={() => play('scissors')}>
					<img src="/img/scissors-user.png" alt="scissors" />
				</button>
				<button onClick={() => play('rock')}>
					<img src="/img/rock-user.png" alt="rock" />
				</button>
				<button onClick={() => play('paper')}>
					<img src="/img/paper-user.png" alt="paper" />
				</button>
			</div>
		</div>
	)
}

export default App
