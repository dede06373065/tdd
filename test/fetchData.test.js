import { fetchData, fetchTwoData, fetchThreeData, fetchFourData } from "./fetchData";

test('异步测试',(done)=>{
    fetchData((data)=>{
        expect(data).toBeDefined()
    })
    done();//有返回值以后再操作。
})

test('异步测试2',()=>{
    return fetchTwoData().then((res)=>{
        expect(res).toBeTruthy()//加return等跑完可以用await
    })
})

test('异步测试3',()=>{
    expect.assertions(1)//断言，必须执行一次expect,如何不执行一次说明通不过。
    return fetchThreeData().catch((e)=>{
        // console.log(e)//没有这句有时候取不到数
        expect(e.toString().indexOf('404')>-1).toBe(true)
    })
})

test('fetchData async', async ()=>{
    await expect(fetchFourData()).resolves.toMatchObject({
        data:{
            cod:'200'//只要有一个对象匹配，便通过。
        }
    })

})

test('fetchData async', async ()=>{
    const response = await fetchFourData()
    expect(response).toMatchObject({
        data:{
            cod:'200'//只要有一个对象匹配，便通过。
        }
    })

})