class Popup {

	constructor(obj) {
		this.heading = obj.heading;
		this.body = obj.body;
		this.button = obj.button;
		this.obj = {
			container: undefined,
			modal: undefined
		};
		this.init();
	}


	init() {
		this.create();
		setTimeout("popup.show();", 750);
		// this.show();
	}

	show() {
		this.obj.container.style.transitionTimingFunction = 'ease-out';
		this.obj.container.style.opacity = 1.0;
		this.obj.container.style.animationName = 'popupModalShow';

		this.obj.modal.style.transitionTimingFunction = 'ease-out';
		this.obj.modal.style.top = '0px';
		this.obj.modal.style.opacity = 1.0;
	}

	hide() {
		this.obj.container.style.transitionTimingFunction = 'ease-in';
		this.obj.container.style.opacity = 0.0;
		this.obj.container.style.animationName = 'popupModalHide';

		this.obj.modal.style.transitionTimingFunction = 'ease-in';
		this.obj.modal.style.top = '-100vh';
		this.obj.modal.style.opacity = 0.0;

	}

	create() {

		// create a stylesheet for the popup
		let obj = document.createElement('style');
		obj.innerHTML = `
			:root {
				--popupColour: hsl(200, 100%, 50%);
			}

			@keyframes popupModalShow {
				0%  {top: 0vh;}
				100% {top: 0vh;}
			}
			@keyframes popupModalHide {
				0%   {top: 0vh;}
				99%  {top: 0vh;}
				100% {top: -100vh;}
			}

			#popup {
				z-index: 1001;
				position: fixed;
				left: 0px;
				top: -100vh;

				width: 100%;
				height: 100%;
				background-color: rgba(0, 0, 0, 0.25);
				align-items: start;
				justify-content: center;

				font-family: sans-serif;

				display: flex;
				opacity: 0.0;
				transition: opacity 0.75s;

				animation-name: '';
				animation-duration: 0.75s;
				animation-fill-mode: forwards;
			}

			#popupModal {
				position: relative;
				top: -100vh;
				flex-basis: content;
				margin-top: 25px;
				width: 50vw;
				min-width: 400px;
				height: 60vh;
				min-height: 300px;

				border-radius: 15px;
				box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.4);
				background-color: #000000;
				padding: 5px;
				opacity: 0.0;

				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: space-between;

				transition: top 0.75s, opacity 0.75s;

			}

			#popupModalHeading {
				color: var(--popupColour);
				text-align: center;
				font-weight: bold;
				font-size: 2em;
				padding: 0.75em;
			}

			#popupModalBody {
				overflow-y: auto;
				margin: 10px;
				color: #FFFFFF;
			}

			#popupModalButton {
				background-color: var(--popupColour);
				color: #FFFFFF;
				border: none;
				border-radius: 6px;
				padding: 15px;
				margin: 10px;
				font-weight: bold;
				font-size: 1.25em;
				cursor: pointer;
			}

		`;

		// attach the stylesheet
		document.body.appendChild(obj);

		// create the main popup element
		obj = document.createElement('div');
		obj.id = 'popup';
		obj.innerHTML = `
			<div id="popupModal">
				<div id="popupModalHeading">
					${this.heading}
				</div>
				<div id="popupModalBody">
					${this.body.replace(/\n/g, '<br />')}
				</div>
				<div>
					<button id="popupModalButton" onclick="popup.hide();">${this.button}</button>
				</div>
			</div>
		`;

		document.body.appendChild(obj);

		// store the obj pointers for the show/hide functions
		this.obj.container = document.getElementById('popup');
		this.obj.modal = document.getElementById('popupModal');

	}

};
