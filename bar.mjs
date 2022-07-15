import Foo, { foo, FOO, Foo2 } from './foo.mjs';

export default class Bar {
	static foo;
	static foo2;
	static FOO;

	foo;
	foo2;
	FOO;

	static {
		foo();

		this.foo = new Foo();
		this.foo2 = new Foo2();
		this.FOO = FOO;
	}

	constructor() {
		this.foo = new Foo();
		this.foo2 = new Foo2();
		this.FOO = FOO;
	}
}
