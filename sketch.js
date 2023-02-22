let func = p =>  {
	let scale = 30;
	let j = 0;

	let c = p.color('red')
	p.setup = () => {
		p.createCanvas(400, 400);
		p.background(p.color('white'));
		p.stroke(255);

		for (let i=0; i<p.width; i++) {
			p.stroke(p.color('black'));
			p.line(i,o(f(s(i))),i-1,o(f(s(i-1))));
		} 
		
		checkbox = p.createCheckbox('Pause', false);
		checkbox.position(500,500)
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

		//Log Functions
		p.text('x: '+ j, 300, 30)
		p.text('s(x): '+ s(j), 300, 40)
		p.text('f(s(x)): '+ f(s(j)), 300, 50)
		p.text('d(s(x)): '+ d(s(j)), 300, 60)
		p.text('t(s(x)): '+ t(s(j),s(0)), 300, 70)

	
		if (!checkbox.checked()) { 
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

	//Function
	function f(x){
		return x**3+2*x**2;       
	}

	//Derivative
	function d(x){
		return 3*(x**2)+4*x;   
		     
	}

	//Tangent Generator for point a
	function t(x,a) {
		return d(a)*(x-a)+f(a)
	}
}

let deriv = p =>  {
	let scale = 30;
	let j = 0;
	let c = p.color('red')
	p.setup = () => {
		p.createCanvas(400, 400);
		p.background(p.color('white'));
		p.stroke(255);
		
		
		checkbox = p.createCheckbox('Pause', false);
		checkbox.position(500,500)
	}

	p.draw = () => {
		p.clear();
		p.fill(c);
        p.noStroke();
		for (let i=0; i<p.width; i++) {
			p.stroke(p.color('black'));
			p.line(i,f((i-(p.width/2))/scale),i-1,f((i-(p.width/2+1))/scale));
		}    
		p.ellipse(j, f((j-(p.width/2))/scale), 5, 5);
		if (!checkbox.checked()) { 
			j+=1;
			if (j>=p.width) {
				j=0;
				c = p.color('green')
			}
		}
	}

	function f(x){
		return p.width-(3*x**2+4*x)-p.height/2;   
		     
	}
}

new p5(func, 'function');
//new p5(deriv, 'derivative')

