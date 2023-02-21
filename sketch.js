let func = p =>  {
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
			p.line(i,off(f, i),i-1,off(f,i-1));
		}    
		p.ellipse(j, off(f,j), 5, 5);
		p.line(j, off(f,j), 0, off(g,j));
		if (!checkbox.checked()) { 
			j+=1;
			if (j>=p.width) {
				j=0;
				c = p.color('green')
			}
		}
	}

	function off(inp, x) {
		return p.height - (inp((x-p.width/2)/scale) + p.height/2)
	}

	function f(x){
		return x**3+2*x**2;       
	}

	function fpr(x){
		return 3*x**2+4*x;   
		     
	}

	function g(x) {
		return fpr(x)*(0-x)+f(x)
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
new p5(deriv, 'derivative')

