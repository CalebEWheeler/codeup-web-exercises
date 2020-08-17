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

//Unit tests for the sayHello function
//Exercise #1
describe('sayHello', function() {
    // it("should be a defined function", function() {
    //     expect(typeof sayHello).toBe('function');
    // });
    // // Exercise #2
    // it('should return a string when called', function() {
    //     expect(typeof sayHello()).toBe("string");
    // });
    // // Exercise #3
    // it('function sayHello("Jane") should return the string "Hello, Jane!" when executed', function() {
    //    expect(sayHello("Jane")).toBe("Hello, Jane!");
    // });
    // // Exercise #4
    // it('function sayHello("Alex") should return the string "Hello, Alex! when executed', function() {
    //     expect(sayHello("Alex")).toBe("Hello, Alex!");
    // });
    // //Exercise #5
    // it('function sayHello("Pat") should return the string "Hello, Pat!" when executed', function() {
    //     expect(sayHello("Pat")).toBe("Hello, Pat!");
    // });
    // Exercise #6 refactor
    // Exercise #7 add,commit,push
    // Exercise #8
    it('function sayHello() should return the string "Hello, World!" when executed', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('function sayHello(true) should return the string "Hello, World!" when executed', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('function sayHello(false) should return the string "Hello, World!" when executed', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });

});
// Exercise #9 add/commit/push
// Exercise #10 isFive()
describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean', function() {
        expect(typeof isFive()).toBe('boolean');
    });
    it('should return true when passed 5', function() {
        expect(isFive(input === 5)).toBe(true);
    });
    // it('should return true when passed "5"', function() {
    //     expect(isFive(input === 5)).toBe(true);
    // });
})