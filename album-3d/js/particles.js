// 此文件中源代码 来源 并改造 于 https://gitee.com/ljcchenxuyuan123/three-d

class Particles {
    constructor(options) {
        this.parent = document.getElementById(options.parentId);
        this.context = null;

        this.ballWidth = options.ballWidth || 2;
        this.ballHeight = options.ballHeight || 2;
        this.ballColor = options.ballColor || '0, 117, 183';
        this.ballCount = options.ballCount || 200;
        this.ballPoints = [];

        this.lineColor = options.lineColor || '35, 171, 242';
        this.lineCount = options.lineCount || 10;
        this.lineDistance = options.lineDistance || 10000;

        this.mouseSpeed = options.mouseSpeed || 16000;
        this.mousePosition = undefined;

        this.initCanvas();
        this.bindMouseEventListener();
        setInterval(() => this.drawPoint(), 100);
    }


    initCanvas() {
        const canvas = document.createElement('canvas');
        canvas.width = this.parent.offsetWidth;
        canvas.height = this.parent.offsetHeight;

        this.context = canvas.getContext('2d');
        this.parent.append(canvas);

        window.onresize = () => {
            canvas.width = this.parent.offsetWidth;
            canvas.height = this.parent.offsetHeight;
        }
    }

    bindMouseEventListener() {
        this.parent.onmousemove = (e) =>
            this.mousePosition = {x: e.clientX, y: e.clientY};

        this.parent.onmouseleave = () => this.mousePosition = undefined;
    }

    drawPoint() {
        const boundary = (p) => {
            if (p.x <= 0 || p.x >= this.parent.offsetWidth) {
                p.vx = -p.vx;
                p.x += p.vx;

            } else if (p.y <= 0 || p.y >= this.parent.offsetHeight) {
                p.vy = -p.vy;
                p.y += p.vy;

            } else {
                p = {
                    x: p.x + p.vx,
                    y: p.y + p.vy,
                    vx: p.vx,
                    vy: p.vy,
                    conn: p.conn
                }
            }

            return p;
        }

        let points = {};
        this.context.clearRect(0, 0, this.parent.offsetWidth, this.parent.offsetHeight);
        this.context.beginPath();
        this.context.fillStyle = `rgb(${this.ballColor})`;

        for (let i = 0; i < this.ballCount; i++) {
            if (this.ballPoints.length < this.ballCount) {
                points = {
                    x: Math.floor(Math.random() * this.parent.offsetWidth),
                    y: Math.floor(Math.random() * this.parent.offsetHeight),
                    vx: (0.5 - Math.random()) * 4,
                    vy: (0.5 - Math.random()) * 4,
                    conn: 0,
                }
            } else {
                points = boundary(this.ballPoints[i]);
            }

            this.context.shadowColor = `rgb(${this.lineColor})`;
            this.context.shadowBlur = 12;
            this.context.fillRect(points.x, points.y, this.ballWidth, this.ballHeight);
            this.ballPoints[i] = points;
        }

        this.context.closePath();
        this.drawLines();
    }

    drawLines() {
        const distance = (i, x2, y2) => {
            const distX = this.ballPoints[i].x - x2;
            const distY = this.ballPoints[i].y - y2;
            return distX * distX + distY * distY;
        }

        let binding = (i, x2, y2) => {
            this.context.beginPath();
            this.context.moveTo(this.ballPoints[i].x, this.ballPoints[i].y);
            this.context.lineTo(x2, y2);
            this.context.stroke();

            this.context.closePath();
        }

        for (let i = 0; i < this.ballCount; i++) {

            this.ballPoints[i].conn = 0;
            for (let j = 0; j < i; j++) {
                let dist = distance(i, this.ballPoints[j].x, this.ballPoints[j].y);
                if (dist <= this.lineDistance && this.ballPoints[i].conn < this.lineCount) {
                    this.ballPoints[i].conn++;
                    this.context.lineWidth = 0.5 - dist / this.lineDistance;
                    this.context.strokeStyle = `rgba(${this.lineColor},${1 - dist / this.lineDistance})`;
                    binding(i, this.ballPoints[j].x, this.ballPoints[j].y);
                }
            }

            if (this.mousePosition) {
                let dist = distance(i, this.mousePosition.x, this.mousePosition.y);
                if (dist < this.mouseSpeed && dist > this.lineDistance) {
                    this.ballPoints[i].x += (this.mousePosition.x - this.ballPoints[i].x) / 20;
                    this.ballPoints[i].y += (this.mousePosition.y - this.ballPoints[i].y) / 20;
                }
                if (dist < this.mouseSpeed) {
                    this.context.lineWidth = 0.6;
                    this.context.strokeStyle = `rgba(${this.lineColor},0.8)`;
                    // 绘制线条
                    binding(i, this.mousePosition.x, this.mousePosition.y);
                }
            }
        }
    }
}