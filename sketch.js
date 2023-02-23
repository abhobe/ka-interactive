var paused = false;

function genFunc(f, d, scale) {
	return p => {
		let j = 0;

		let c = p.color('red')
		p.setup = () => {
			p.createCanvas(400, 400);
			p.background(p.color('white'));
			p.stroke(255);

			
			pbut = p.createButton('Pause');
			pbut.position(500,500)
			pbut.mousePressed(() => {paused = !paused; stopped = false;})
		}

		p.draw = () => {
			p.clear();
			p.fill(c);
			p.noStroke();
			for (let i=0; i<p.width; i++) {
				p.stroke(p.color('black'));
				p.line(i,o(f(s(i))),i-1,o(f(s(i-1))));
			} 
			
			p.ellipse(j, o(f(s(j))), 5, 5);
			p.line(0, o(t(s(0),s(j))), p.width, o(t(s(p.width),s(j))));
			p.line(0,p.height/2, p.width, p.height/2)

			//Log Functions
			p.text('x: '+ j, 300, 30)
			p.text('s(x): '+ s(j), 300, 40)
			p.text('f(s(x)): '+ f(s(j)), 300, 50)
			p.text('d(s(x)): '+ d(s(j)), 300, 60)
			p.text('t(s(x)): '+ t(s(j),s(0)), 300, 70)

			if (d(s(j)) == 0) {
				paused = true;
			}
		
			if (!paused) { 
				j+=1;
				if (j>=p.width) {
					j=0;
					c = p.color('green')
				}
			}
		}

		// Flip and y-offset
		function o(x) {
			return p.height - x - p.height/2
		}

		// Scale and x-offser
		function s(x) {
			return (x-p.width/2)/scale
		}

		//Tangent Generator for point a
		function t(x,a) {
			return d(a)*(x-a)+f(a)
		}
		
	}

}

let func = genFunc(x => x**3+2*x**2, x => 3*x**2+4*x,30 )

let deriv = genFunc(x => 3*x**2+4*x, x => 6*x+4, 30)
let d2 = genFunc(x => 6*x+4, x=> NaN,30)

new p5(func, 'function');
new p5(deriv, 'derivative')
new p5(d2, 'd2')
