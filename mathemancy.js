function number(n) {
	function clearAndAppend(m) {
		Number.prototype.clear();
		return n.append(m);
	}
	
	return {
		get zero()  { return clearAndAppend(0); },
		get one()   { return clearAndAppend(1); },
		get two()   { return clearAndAppend(2); },
		get three() { return clearAndAppend(3); },
		get four()  { return clearAndAppend(4); },
		get five()  { return clearAndAppend(5); },
		get six()   { return clearAndAppend(6); },
		get seven() { return clearAndAppend(7); },
		get eight() { return clearAndAppend(8); },
		get nine()  { return clearAndAppend(9); },
		get plus()  { return clearAndAppend('+'); },
		get minus() { return clearAndAppend('-'); },
		get times() { return clearAndAppend('*'); },
		get dividedBy() { return clearAndAppend('/'); } 
	};
}

Object.defineProperties(
	Number.prototype,
	{
		clear:     { value: function() { Number.prototype.expr = ''; } },
		append:    { value: function(n) {
			this.expr = (this.expr == '' ? this.toString() : this.expr) + n;
			var newthis = typeof n === 'number' ? eval(this.expr) : this;
			Number.prototype.expr = this.expr;
			return newthis;
		} },
		zero:      { get() { return this.append(0); } },
		one:       { get() { return this.append(1); } },
		two:       { get() { return this.append(2); } },
		three:     { get() { return this.append(3); } },
		four:      { get() { return this.append(4); } },
		five:      { get() { return this.append(5); } },
		six:       { get() { return this.append(6); } },
		seven:     { get() { return this.append(7); } },
		eight:     { get() { return this.append(8); } },
		nine:      { get() { return this.append(9); } },
		plus:      { get() { return this.append('+'); } },
		minus:     { get() { return this.append('-'); } },
		times:     { get() { return this.append('*'); } },
		dividedBy: { get() { return this.append('/'); } },
	}
);
var zero = number(0), one = number(1), two = number(2), three = number(3), four = number(4), five = number(5), six = number(6), seven = number(7), eight = number(8), nine = number(9);

