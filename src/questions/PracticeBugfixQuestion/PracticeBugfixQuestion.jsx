import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Solution1 from "./Solution1";

const PracticeBugfixQuestion = () => {
	return (
		<div>
			<h1>Practice Bugfix Question</h1>
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography>Instructions</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<div>
						<div>
							<div>
								<div>
									<svg width="16" height="16" viewBox="0 0 16 16">
										<path fill-rule="evenodd" clip-rule="evenodd" d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm-1.43-3c-1.642-.344-2.462-1.136-2.462-2.376V9.612c0-.688-.37-1.032-1.108-1.032V7.42c.739 0 1.108-.346 1.108-1.037V5.31c.013-.613.225-1.11.636-1.487.414-.378 1.023-.653 1.825-.823L7 3.9c-.574.163-.873.621-.896 1.374v1.109c0 .763-.421 1.301-1.265 1.615.844.313 1.265.853 1.265 1.62v1.103c.023.753.322 1.211.896 1.374L6.57 13zm2.86 0c1.642-.344 2.462-1.136 2.462-2.376V9.612c0-.688.37-1.032 1.108-1.032V7.42c-.739 0-1.108-.346-1.108-1.037V5.31c-.013-.613-.225-1.11-.636-1.487-.414-.378-1.023-.653-1.825-.823L9 3.9c.574.163.873.621.896 1.374v1.109c0 .763.421 1.301 1.265 1.615-.844.313-1.265.853-1.265 1.62v1.103c-.023.753-.322 1.211-.896 1.374l.43.905z">

										</path>
									</svg>
								</div>
							</div>
							<p>bugfix</p>
						</div>
					</div>
					<div>
						There is a bug in one line of the code. Find it, fix it, and submit.
					</div>
					<div>
						<p>
							Given a sorted array of integers <code>a</code>, your task is to determine which element of <code>a</code> is <em>closest</em> to all other values of <code>a</code>. In other words, find the element <code>x</code> in <code>a</code>, which minimizes the following sum:
						</p>
						<pre><code>
							abs(a[0] - x) + abs(a[1] - x) + ... + abs(a[a.length - 1] - x)
						</code></pre>
						<p>
							(where <code>abs</code> denotes the absolute value)
						</p>
						<p>
							If there are several possible answers, output the <em>smallest</em> one.</p>
						<p>
							<span style={{ color: "#2b3b52", fontSize: "1.4em" }}>
								Example
							</span>
						</p>
						<ul>
							<li>
								<p>For <code>a = [2, 4, 7]</code>, the output should be <code>solution(a) = 4</code>.</p>
								<ul>
									<li>for <code>x = 2</code>, the value will be <code>abs(2 - 2) + abs(4 - 2) + abs(7 - 2) = 7</code>.</li>
									<li>for <code>x = 4</code>, the value will be <code>abs(2 - 4) + abs(4 - 4) + abs(7 - 4) = 5</code>.</li>
									<li>for <code>x = 7</code>, the value will be <code>abs(2 - 7) + abs(4 - 7) + abs(7 - 7) = 8</code>.</li>
								</ul>
								<p>
									The lowest possible value is when <code>x = 4</code>, so the answer is <code>4</code>.
								</p>
							</li>
							<li>
								<p>For <code>a = [2, 3]</code>, the output should be <code>solution(a) = 2</code>.</p>
								<ul>
									<li>for <code>x = 2</code>, the value will be <code>abs(2 - 2) + abs(3 - 2) = 1</code>.</li>
									<li>for <code>x = 3</code>, the value will be <code>abs(2 - 3) + abs(3 - 3) = 1</code>.</li>
								</ul>
								<p>
									Because there is a tie, the smallest <code>x</code> between <code>x = 2</code> and <code>x = 3</code> is the answer.
								</p>
							</li>
						</ul>
						<p>
							<span class="markdown--header" style="color:#2b3b52;font-size:1.4em">Input/Output</span>
						</p>
						<ul>
							<li>
								<p><strong>[execution time limit] 4 seconds (js)</strong></p>
							</li>
							<li>
								<p><strong>[memory limit] 1 GB</strong></p>
							</li>
							<li>
								<p><strong>[input] array.integer a</strong></p>
								<p>A non-empty array of integers, sorted in ascending order.</p>
								<p><em>Guaranteed constraints:</em><br />
									<code>1 ≤ a.length ≤ 1000</code>,<br />
									<code>-10<sup>6</sup> ≤ a[i] ≤ 10<sup>6</sup></code>.</p>
							</li>
							<li>
								<p><strong>[output] integer</strong></p>
								<p>An integer representing the element from <code>a</code> that minimizes the sum of its absolute differences with all other elements.</p>
							</li>
						</ul>
						<p>
							<strong>[JavaScript] Syntax Tips</strong>
						</p>
						<pre>
							<code>
								{
									`// Prints help message to the console
	// Returns a string
	function helloWorld(name) {
		console.log("This prints to the console when you Run Tests");
		return "Hello, " + name;
	}`
								}
							</code>
						</pre>
					</div>
				</AccordionDetails>
			</Accordion >
			<Accordion>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography>Started Code</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<pre>
						<code>
							{`
							function solution(a) {

  var indexOfMinimum = -1;
  var minimalSum = Number.MAX_VALUE;

  for (var i = 0; i < a.length; i++) {
    var sum = 0;
    for (var j = 0; j < a.length; j++) {
      sum += Math.abs(a[j] - a[j]);
    }
    if (sum < minimalSum) {
      minimalSum = sum;
      indexOfMinimum = i;
    }
  }

  return a[indexOfMinimum];
}
							`}
						</code>
					</pre>
				</AccordionDetails>
			</Accordion >

			<Solution1 />
		</div>
	)
}

export default PracticeBugfixQuestion;