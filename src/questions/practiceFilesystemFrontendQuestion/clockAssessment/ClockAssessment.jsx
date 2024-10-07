import { useState } from 'react';
import './index.scss';

const App = () => {
	const [hours, setHours] = useState('00');
	const [minutes, setMinutes] = useState('00');


	const hourIncrement = () => {
		setHours((prev) =>
			String(parseInt(prev) + 1)
				.padStart(2, "0")
		)
	}

	const hourDecrement = () => {
		setHours((prev) =>
			String(parseInt(prev) - 1)
				.padStart(2, "0")
		)
	}

	const minIncrement = () => {
		setMinutes((prev) =>
			String(parseInt(prev) + 1)
				.padStart(2, "0")
		)
	}

	const minDecrement = () => {
		setMinutes((prev) =>
			String(parseInt(prev) - 1)
				.padStart(2, "0")
		)
	}


	function handleHoursUpButtonClick() {
		//TODO: implement this
		hours === '23' ? setHours('00') : hourIncrement();
	}

	function handleHoursDownButtonClick() {
		//TODO: implement this
		hours === '00' ? setHours('23') : hourDecrement();
	}

	function handleMinutesUpButtonClick() {
		//TODO: implement this
		minutes === '59' ? setMinutes('00') : minIncrement();
	}

	function handleMinutesDownButtonClick() {
		//TODO: implement this
		minutes === '00' ? setMinutes('59') : minDecrement();
	}

	return (
		<div id="ClockUpdater" className="container">
			<div className="row">
				<button
					id="hours-up-button"
					onClick={handleHoursUpButtonClick}
					className="btn btn-outline-primary col"
				>
					&uarr;
				</button>

				<button
					id="minutes-up-button"
					className="btn btn-outline-primary col"
					onClick={handleMinutesUpButtonClick}
				>
					&uarr;
				</button>
			</div>

			<div className="row">
				<div id="clock" className="badge badge-primary col">
					{`${hours}:${minutes}`}
				</div>
			</div>

			<div className="row">
				<button
					id="hours-down-button"
					onClick={handleHoursDownButtonClick}
					className="btn btn-outline-primary col"
				>
					&darr;
				</button>

				<button
					id="minutes-down-button"
					className="btn btn-outline-primary col"
					onClick={handleMinutesDownButtonClick}
				>
					&darr;
				</button>
			</div>
		</div>
	);
};

export default App;
