// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });


    it('it should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    })

    it('should return the string "Hello, Jane!" when sayHello("Jane") is executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });

    it('should return the string "Hello, Alex!" when sayHello("Alex") is executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });

    it('should return the string "Hello, Pat!" when sayHello("Pat") is executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });

    it('should return the string "Hello, World!" when sayHello() is executed', function () {
        expect(sayHello()).toBe("Hello, World!");
    });
});
describe ('isFive', function() {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
});

