import mockjs from "mockjs"

const Mock = {
    /**
     * 模拟订单信息
     * @param {Number} type type: 订单类型 0 普通订单 1秒杀订单
     * @returns Array
     */
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
    },
    /**
     * 模拟商品数据
     * @param {Number} type type商品类型 1为普通订单 2为秒杀订单 3为金融推荐
     * @returns Array
     */
    getGoods(type) {
        let array = []
        for (let i = 0; i < mockjs.Random.integer(5, 10); i++) {
            array.push(mockjs.mock({
                "name": (type == 0 ? "普通商品" : type == 1 ? "秒杀商品" : "今日推荐"),
                "img": mockjs.Random.dataImage("60x100", "商品示例图"),
                "price": mockjs.Random.integer(20, 500) + "元",
                "sellCount": mockjs.Random.integer(10, 100),
                "count": mockjs.Random.integer(10, 100),
                "back": mockjs.Random.integer(10, 100),
                "backPrice": mockjs.Random.integer(0, 5000) + "元",
                "owner": mockjs.Random.cname(),
                "time": mockjs.Random.datetime("yyyy-MM-dd HH:mm:ss"),
                "state": mockjs.Random.boolean()
            }))
        }
        return array
    }
}

export default Mock