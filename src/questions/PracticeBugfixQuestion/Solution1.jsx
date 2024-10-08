import React from 'react'

const Solution1 = () => {
	return (
		<div>
			<pre>
				<code>
					{`
function solution(a) {
    var indexOfMinimum = -1;
    var minimalSum = Number.MAX_VALUE;

    for (var i = 0; i < a.length; i++) {
        var sum = 0;
        for (var j = 0; j < a.length; j++) {
            sum += Math.abs(a[i] - a[j]);
        }
        if (sum < minimalSum) {
            minimalSum = sum;
            indexOfMinimum = i;
        }
    }
}
                    `}
				</code>
			</pre>

			<h3>Completion Time</h3>
			<p>
				40:40
			</p>
		</div>
	)
}

export default Solution1
