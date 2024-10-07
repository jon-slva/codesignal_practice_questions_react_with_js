import Solution from "./Solution";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const PracticeFilesystemFrontendQuestion = () => {

	return (
		<>
			<header>
				<h1>
					Practice Filesystem Frontend Question
				</h1>
				<h2>
					(Clock - Incrementor & Decrementor)
				</h2>
			</header>

			{/* Fully granular MUI Accordian usage. Opted for collapsing entire instructions into one Accordian instead. */}
			<aside style={{ display: 'none' }}>
				{/* <Accordion>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Typography>Environment</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Welcome to the pre-certification practice task! This task is designed to be a playground that lets you get acquainted with the testing environment and practice the platform's functionalities before your certification.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Typography>IDE</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							To customize the editor settings and see the editor hotkeys, check out the <code>Settings</code> tab <img src="https://codesignal.s3.amazonaws.com/uploads/1631189051853/IDE_Settings.png" width="24" height="20" /> on the left sidebar.
						</Typography>
						<Typography>
							See the <code>README</code> tab for more information about the environment and test run verdicts.
						</Typography>
						<Typography>
							The IDE will automatically install the development environment and required packages from <code>package.json</code>. Feel free to modify the <code>package.json</code> file to include additional packages as needed. You can use the console to stop or restart your application whenever you want. The live preview pane will update as you work to reflect the current state of your application. If you close the console and want to restart the application, run the command <code>npm start</code>.
						</Typography>
						<Typography>
							If needed, you can hard reset the environment by clicking on the circular reset code icon (<img src="https://codesignal-assets.s3.amazonaws.com/uploads/1684257588670/reset-code.svg" width="16" height="16" />) on the top right of the IDE. Note that your progress will not be saved, so please be careful when using this.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Typography>Prettier</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Please note that <code>prettier</code> is already included in <code>package.json</code>. For formatting the code, run the command <code>npm run prettier</code> in the console.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Typography>Debugging</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							If you add debugging output to the console in your components, please check your browser's debug console for output messages.
						</Typography>
						<Typography>
							Feel free to browse the project workspace. All necessary component files have been created for you.
						</Typography>
					</AccordionDetails>
				</Accordion>
				<Accordion>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Typography>Scenario</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							You are given a page with a clock. Your task is to implement the logic for buttons to increment and decrement the hours and minutes.
						</Typography>
						<Typography>
							The time should be displayed in <code>HH:MM</code> 24-hour format. For example, <code>23:59</code>, <code>08:00</code>, <code>07:32</code>.
						</Typography>
						<Typography>
							The initial state of the clock should be <code>00:00</code>.
						</Typography>
						<Typography>
							Actions should be cycled; if you have <code>23:58</code> on the clock and press <code>up</code> for hours, the resulting time should be <code>00:58</code>.
						</Typography>
					</AccordionDetails>
				</Accordion> */}
			</aside >

			<div>
				<Accordion>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<Typography>Instructions</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<h2>Environment</h2>
						<p>
							Welcome to the pre-certification practice task! This task is designed to be a playground that lets you get acquainted with the testing environment and practice the platform's functionalities before your certification.
						</p>

						<h3>IDE</h3>
						<p>
							To customize the editor settings and see the editor hotkeys, check out the <code>Settings</code> tab <img src="https://codesignal.s3.amazonaws.com/uploads/1631189051853/IDE_Settings.png" width="24" height="20" /> on the left sidebar.
						</p>
						<p>
							See the <code>README</code> tab for more information about the environment and test run verdicts.
						</p>
						<p>
							The IDE will automatically install the development environment and required packages from <code>package.json</code>. Feel free to modify the <code>package.json</code> file to include additional packages as needed. You can use the console to stop or restart your application whenever you want. The live preview pane will update as you work to reflect the current state of your application. If you close the console and want to restart the application, run the command <code>npm start</code>.
						</p>
						<p>
							If needed, you can hard reset the environment by clicking on the circular reset code icon (<img src="https://codesignal-assets.s3.amazonaws.com/uploads/1684257588670/reset-code.svg" width="16" height="16" />) on the top right of the IDE. Note that your progress will not be saved, so please be careful when using this.
						</p>

						<h3>Prettier</h3>
						<p>
							Please note that <code>prettier</code> is already included in <code>package.json</code>. For formatting the code, run the command <code>npm run prettier</code> in the console.
						</p>

						<h3>Debugging</h3>
						<p>
							If you add debugging output to the console in your components, please check your browser's debug console for output messages.
						</p>
						<p>
							Feel free to browse the project workspace. All necessary component files have been created for you.</p>

						<h2>Scenario</h2>
						<p>
							You are given a page with a clock. Your task is to implement the logic for buttons to increment and decrement the hours and minutes.
						</p>
						<p>
							The time should be displayed in <code>HH:MM</code> 24-hour format. For example, <code>23:59</code>, <code>08:00</code>, <code>07:32</code>.
						</p>
						<p>
							The initial state of the clock should be <code>00:00</code>.
						</p>
						<p>
							Actions should be cycled; if you have <code>23:58</code> on the clock and press <code>up</code> for hours, the resulting time should be <code>00:58</code>.
						</p>
						<p>
							Minutes and hours should be changed separately.
						</p>


						<h2>Tests</h2>
						<ul>
							<li>
								Unit tests are provided in the <code>test/functionalTests.test.js</code> file. To run the tests, click the blue <code>In Terminal</code> or <code>Structured</code> button.
							</li>
							<li>
								You may use <code>test/sample.test.js</code> to write your own tests, which will also be included in the test runs.
								<ul>
									<li>
										If you would like to include debugging output to the console in your tests, use the <code>In Terminal</code> option to receive the raw test output.
									</li>
								</ul>
							</li>
						</ul>
						<p>When working on a scored certification, partial credit will be granted for each unit test passed, so press <strong>Submit</strong> often to run tests and receive partial credits for passed tests.</p>
						<ul>
							<li>
								<p><strong>[execution time limit] 55 seconds</strong></p>
							</li>
							<li>
								<p>Please note that if the question needs to run Front-End unit tests, a headless browser might be initialized for every test run, taking an average time of ~20 seconds.</p>
							</li>
							<li>
								<p><strong>[memory limit] 1 GB</strong></p>
							</li>
						</ul>
					</AccordionDetails>
				</Accordion >
			</div>

			{/* Notes 
			spent approx 2 hours because I did not understand the incrementor and decrementor logic. I thought increasing the minutes should also increase the hours at 59 minutes, and vice versa. Turns out it was only supposed to increase the minutes and hours separately. Could have saved a ton of time if I had understood the requirements properly.
			*/}

			<h2>Solution</h2>
			<Solution />
		</>
	);
};

export default PracticeFilesystemFrontendQuestion;
