class Greeter {
    greeting: string;
	name: string;
	
    constructor(message: string, name: string) {
        this.greeting = message;
		this.name = name;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}