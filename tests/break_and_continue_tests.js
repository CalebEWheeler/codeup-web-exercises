// describe('breaking', function() {
//     it('breaking should be a defined function', function() {
//         expect(typeof breaking).toBe('function');
//     })
//     it('breaking should return a string', function(){
//         expect(typeof breaking()).toBe('string')
//     })
//     var expectedOutput = "Here is an odd number: 1\n" +
//     "Here is an odd number: 3\n" +
//     "Here is an odd number: 5\n" +
//     "Here is an odd number: 7\n" +
//     "Here is an odd number: 9\n" +
//     "Here is an odd number: 11\n" +
//     "Here is an odd number: 13\n" +
//     "Here is an odd number: 15\n" +
//     "Here is an odd number: 17\n" +
//     "Here is an odd number: 19\n" +
//     "Here is an odd number: 21\n" +
//     "Here is an odd number: 23\n" +
//     "Here is an odd number: 25\n" +
//     "Yikes! Skipping number: 27\n" +
//     "Here is an odd number: 29\n" +
//     "Here is an odd number: 31\n" +
//     "Here is an odd number: 33\n" +
//     "Here is an odd number: 35\n" +
//     "Here is an odd number: 37\n" +
//     "Here is an odd number: 39\n" +
//     "Here is an odd number: 41\n" +
//     "Here is an odd number: 43\n" +
//     "Here is an odd number: 45\n" +
//     "Here is an odd number: 47\n" +
//     "Here is an odd number: 49";
//     it('breaking should match expectedOutput', function(){
//         expect(breaking()).toEqual(expectedOutput)
//     })
// })

describe("queryUser", function() {
    it('function queryUser should be defined', function() {
        expect(typeof queryUser).toBe('function')
    })
    it('queryUser should return undefined ', function() {
        expect(queryUser()).toBe(undefined)
    })
})