function eval(eq,x) {
    let p1;
    let p2;
    if (typeof(eq[0]) == 'object') {
        p1 = eval(eq[0],x)
    } else if (eq[0] == 'x') {
        p1 = x; 
    } else {
        p1 = Number(eq[0])
    } 

    if (typeof(eq[2]) == 'object') {
        p2 = eval(eq[2],x)
    } else if (eq[2] == 'x') {
        p2 = x; 
    } else {
        p2 = Number(eq[2])
    } 

    if (eq[1] == '+') {
        return p1 + p2
    } else if (eq[1] == '-') {
        return p1 - p2
    } else if (eq[1] == '*') {
        return p1*p2
    } else if (eq[1] == '/') {
        return p1/p2
    } else if (eq[1] == '^') {
        return p1**p2
    }

}	

class Expression {
    constructor(exp) {
        this.exp = exp
        this.eval = x => eval(this.exp, x)
    }
}