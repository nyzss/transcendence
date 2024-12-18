import { isDarkMode } from "../storage.js";
import { invertColor } from "../utils.js";
import { DIRECTION, PADDLE_SIZE, PADDLE_VELOCITY } from "./constants.js";

export class Paddle {
	/**
	 *
	 * @param {'left' | 'right'} side
	 * @param {HTMLCanvasElement} canvas
	 * @param {import("./ball").Scale} scale
	 */
	constructor(side, canvas, scale, remote) {
		this.canvas = canvas;
		this.ctx = canvas.getContext("2d");
		this.scale = scale;
		this.side = side;

		this.width = PADDLE_SIZE.WIDTH * scale.x;
		this.height = PADDLE_SIZE.HEIGHT * scale.y;
		this.vy = PADDLE_VELOCITY * scale.y;
		this.color = isDarkMode() ? "white" : "black";
		this.direction = DIRECTION.IDLE;
		this.points = 0;
		this.target = 0;

		this.keysPressed = {
			up: false,
			down: false,
		};

		this.remote = remote;

		this.y = (canvas.height - this.height) / 2;
		if (side === "left") {
			this.x = 0;
			this.keys = {
				up: "KeyW",
				down: "KeyS",
				altUp: "ArrowUp",
				altDown: "ArrowDown",
			};
		} else {
			this.x = canvas.width - this.width;
			this.keys = {
				up: "ArrowUp",
				down: "ArrowDown",
				altUp: "KeyW",
				altDown: "KeyS",
			};
		}

		this.reset();
	}

	/**
	 * @returns {Paddle}
	 */
	reset() {
		this.y = (this.canvas.height - this.height) / 2;
		this.target = this.y;
		this.keysPressed.up = false;
		this.keysPressed.down = false;
		this.direction = DIRECTION.IDLE;
		return this;
	}

	updateColor(color) {
		this.color = color;
	}

	/**
	 * @returns {Paddle}
	 */
	draw() {
		this.ctx.fillStyle = this.color;
		this.ctx.fillRect(this.x, this.y, this.width, this.height);

		// ADD BORDER FOR COLOR CUSTOMIZATION
		this.ctx.strokeStyle = invertColor(this.color);
		this.ctx.lineWidth = 1;
		this.ctx.strokeRect(this.x, this.y, this.width, this.height);
		return this;
	}

	/**
	 * @param {number} deltaTime
	 * @returns {Paddle}
	 */
	move(deltaTime) {
		if (this.direction === DIRECTION.IDLE) return this;

		if (this.direction === DIRECTION.UP) {
			this.y -= this.vy * deltaTime;
			if (this.y < 0) this.y = 0;
		} else if (this.direction === DIRECTION.DOWN) {
			this.y += this.vy * deltaTime;
			if (this.y + this.height > this.canvas.height)
				this.y = this.canvas.height - this.height;
		}
		return this;
	}

	/**
	 * @param {KeyboardEvent} event
	 * @param {boolean} isKeyDown
	 * @returns {number | false}
	 */
	keyHandler(event, isKeyDown) {
		const key = event.code;

		if (key === this.keys.up || (this.remote && key === this.keys.altUp)) {
			event.preventDefault();
			this.keysPressed.up = isKeyDown;
		} else if (
			key === this.keys.down ||
			(this.remote && key === this.keys.altDown)
		) {
			event.preventDefault();
			this.keysPressed.down = isKeyDown;
		} else {
			return false;
		}

		if (this.keysPressed.up && !this.keysPressed.down) {
			this.direction = DIRECTION.UP;
		} else if (this.keysPressed.down && !this.keysPressed.up) {
			this.direction = DIRECTION.DOWN;
		} else {
			this.direction = DIRECTION.IDLE;
		}

		return this.remote ? this.direction : false;
	}
}
