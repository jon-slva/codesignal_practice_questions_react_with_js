import React from 'react'
import QuestionsList from '../../components/QuestionsList/QuestionsList'


const Home = () => {
	return (
		<div>
			<h1>
				CodeSignal Practice Questions (React w/ JS)
			</h1>
			<h2>
				Select a question from the list to get started
			</h2>

			<QuestionsList />

		</div>
	)
}

export default Home
