import tks from '../dist/js-toolkits'

// trim
test('trim 1', () => {
  expect(tks.trim(' abc ')).toBe('abc')
})
test('trim 2', () => {
  expect(tks.trim(' a b c ',true)).toBe('abc')
})

// get
test('get 1', () => {
  expect(tks.get('www.baidu.com?aa=1&bb=2&cc=3','aa')).toBe('1')
})
test('get 2', () => {
  expect(tks.get('www.baidu.com?aa=1&bb=2&cc=3',true)).toEqual({aa: "1", bb: "2", cc: "3"})
})

// param
test('param', () => {
  expect(tks.param({name:'li', age:18})).toBe('name=li&age=18')
})

// sort
test('sort', () => {
  expect(tks.sort([1,5,7,9,2])).toEqual([1,2,5,7,9])
})