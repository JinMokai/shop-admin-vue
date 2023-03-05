import mockjs from "mockjs"

const Mock = {
    // type: 订单类型 0 普通订单 1秒杀订单
    getOrder(type) {
        let array = []
        for (let i = 0; i < mockjs.Random.integer(5, 10); i++) {
            array.push(mockjs.mock({
                "name": type == 0 ? "普通订单" : "秒杀订单" + i,
                "price": mockjs.Random.integer(20, 500) + "元",
                "buyer": mockjs.Random.cname(),
                "time": mockjs.Random.datetime("yyyy-MM-dd HH:mm:ss"),
                "role": mockjs.Random.boolean(),
                "state": mockjs.Random.boolean(),
                "payType": mockjs.Random.boolean(),
                "source": mockjs.Random.url(),
                "phone": mockjs.mock(/^1[3-9]\d{9}$/)
            }))
        }
        return array
    }
}

export default Mock