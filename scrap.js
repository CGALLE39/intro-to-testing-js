describe('minusOne', function() {
    it('should be defined a function', function() {
        expect(typeof minusOne).toBe("function");
    });
    it('should return a number', function () {
        expect(typeof minusOne()).toBe("number");
    });
    it('should return 3 when passed 4', function() {
        expect(minusOne(4)).toBe(3);
    });
    it('should return 6 when passed 5', function() {
        expect(minusOne(6)).toBe(5);
    });
})




function minusOne (num) {
    if (typeof num === "number") {
        return num - 1;
    }
    return 0;
}
})