# DataStreamReader
Sample Angular 7 app to read a real-time data  stream

### Things you need to run this app ###
<ol>
	<li>Node.js</li>
	<li>VS code</li>
	<li>Angular</li>
	<li>Twitter Dev Account</li>
</ol>

### Instructions for running the app ###
<ol>
	<li>Check out the project "DataStreamReader" into a local directory of your choosing</li>
	<li>Within a command prompt(open in administrator mode)
		<ul>
			<li>Path to the DataStreamReader directory and type <b>code .</b> to open VS Code</li>
		</ul>
	</li>
	<li>When VS Code opens, Click the top menu <b>Terminal --> Split Terminal</b></li>
	<li>Within the right terminal, path to the <b>StreamReader/server</b> directory
		<ul>
			<li>In the VS Code file explorer, Open the DataStreamReader/server/.env file
				<ul>
					<li>You will need to paste in your twitter credentials so that the variable name matches the value expected in <b>server.ts</b></li>
				</ul>
			</li>
			<li>In the right terminal, Type <b>node -v</b> to confirm you have node installed
				<ul>
					<li>If you do not get back a node version, you need to install node.js before continuing</li>
				</ul>
			</li>
			<li>In the right terminal, Type <b>npm install</b>
				<ul>
					<li>This will install the needed node modules specified by the project's package.json file</li>
				</ul>
			</li>
			<li>In the right terminal, Type <b>node server.js</b>
				<ul>
					<li>YOu should see a console message saying: <b>Listening on port 3000</b></li>
					<li>This means the node server is up and running</li>
				</ul>
			</li>
		</ul>
	</li>
	<li>Within the left terminal, path to the <b>DataStreamReader/client</b> directory
		<ul>
			<li>Within the left terminal, type <b>npm install </b> to install necessary node modules</li>
			<li>After the npm install completes, type <b>ng --version</b> to ensure you have angular installed
				<ul>
					<li>If console says the <b>ng</b> command is not recognized, run <b>npm install -g @angular/cli</b></li>
				</ul>
			</li>
			<li>With Angular and the node project dependencies installed, you should now be good to start the app with <b>ng serve -o</b></li>
			<li>Your default browser should open with the app in a new window</li>
		</ul>
	</li>
	<li>Once on the app, enter a term to engage the twitter filter API for matching tweets
		<ul>
			<li>As tweets are received, they should be added to the left hand table
				<ul>
					<li>This table can be filtered on All tweets, Original tweets only, or Retweets only using the top right buttons of the table</li>
				</ul>
			</li>
			<li>The counter totals should update automatically to display the aggregate totals of each tweet type as well as the overall count.</li>
			<li>Clicking a tweet in the left-hand table will populate a card on the right-hand side with more details for the specific tweet clicked</li>
		</ul>
	</li>
</ol>