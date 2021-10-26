import newTest from "./thirdnew";
const newService = new newTest();

beforeAll(()=>{
    console.log('beforeAll.')
})//最前

beforeEach(()=>{
    console.log('beforeEach')
})//每个测试用例执行之前都执行一次

afterEach(()=>{
    console.log('afterEach.')
})//每个测试用例执行以后都执行一次

describe('aa relative',()=>{
    test('User f1',()=>{
        newService.f1(1)
        newService.f2()
        console.log(newService.service)
        expect (newService.service).toEqual('aa'+'m')
    })
    test('User f1',()=>{
        newService.f1(1)
        newService.service1()
        console.log(newService.service1)
        expect (newService.service).toEqual('aa'+'x')
    })
})//进行不同的分组

describe('bb relative',()=>{
    test('User f1',()=>{
        newService.f1(2)
        newService.f3()
        console.log(newService.service)
        expect (newService.service).toEqual('bb'+'n')
    })
    test('User f1',()=>{
        newService.f1(2)
        newService.service1()
        console.log(newService.service2)
        expect (newService.service).toEqual('bb'+'x')
    })
})

afterAll(()=>{
    console.log('afterAll')
})//最后



