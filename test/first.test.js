import {add} from './first'

test('1+1=2',()=>{
    expect(add(1,1)).toBe(2)//===
});

test('1+1=2',()=>{
    expect(add(1,1)).toEqual(2)//值相等
});

// test('1+1=2',()=>{
//     expect(add(1,1)).toBeNull()
// });

test('1+1=2',()=>{
    expect(add(1,1)).toBeDefined()//toBeUndefined()
});
test('1+1=2',()=>{
    expect(add(1,1)).toBeTruthy()//toBeFalsy
});

test('1+1=2',()=>{
    expect(add(1,1)).toBeGreaterThan(1)//toBeLessThan()，toBeGreaterThanOrEqual大于等于
});

test('0.1+0.2=0.3',()=>{
    const a = 0.1
    const b = 0.2
    expect(a + b).toBeCloseTo(0.3)//对浮点数加减的操作test
});

test('toMatch',()=>{//字符串匹配
    const str = 'aabbcc'
    expect(str).toMatch('ab')//匹配一部分就好
})

test('toContain',()=>{//数组匹配**非常常用
    const arr = ['aa','bb','cc']
    expect(arr).toContain('aa')//匹配一个
})

const throwError = ()=>{
    throw new Error('this is an error.')
}
test('toThrow',()=>{//抛出异常的匹配
    expect(throwError).not.toThrow('aaaa')//函数有异常就pass
    //为空或者错误提示一致。
})

//npm i @babel/core@7.4.5 @babel/preset-env@7.4.5 --dev安装两个包 可以使用import