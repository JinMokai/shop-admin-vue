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
    },
    /**
     * 获取店长列表
     */
    getManagerList() {
        let array = []
        for (let i = 0; i < mockjs.Random.integer(5, 10); i++) {
            array.push(mockjs.mock({
                "people": mockjs.Random.cname(),
                "weixin": mockjs.Random.string(7, 10),
                "state": mockjs.Random.boolean(),
                "income": mockjs.Random.integer(0, 50000) + "元",
                "back": mockjs.Random.integer(0, 1000) + "元",
                "backPrice": mockjs.Random.integer(0, 5000) + "元",
                "source": "站内",
                "customer": mockjs.Random.integer(0, 50),
                "time": mockjs.Random.datetime("yyyy-MM-dd HH:mm:ss")
            }))
        }
        return array
    },
    /**
     * 店长审批流程
     * @returns Array
     */
    getManagerReqList() {
        let array = [];
        for (let i = 0; i < mockjs.Random.integer(5, 10); i++) {
            array.push(mockjs.mock({
                'people': mockjs.Random.csentence(),
                'state': mockjs.Random.boolean(),
                'reqTime': mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
                'time': mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
            }))
        }
        return array;
    },
    getTradeInfo() {
        let array = [];
        for (let i = 0; i < mockjs.Random.integer(5, 10); i++) {
            array.push(mockjs.mock({
                'name': mockjs.Random.csentence(),
                'id': mockjs.Random.string(11),
                'user': mockjs.Random.cname(),
                'payType': mockjs.Random.boolean() ? '网络支付' : '线下支付',
                'time': mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
            }))
        }
        return array;
    },
    getTradeList() {
        let array = [];
        for (let i = 0; i < mockjs.Random.integer(5, 10); i++) {
            array.push(mockjs.mock({
                'info': mockjs.Random.csentence(),
                'income': mockjs.Random.integer(0, 5000) + '元',
                'expend': mockjs.Random.integer(0, 5000) + '元',
                'time': mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
            }))
        }
        return array;
    },
    /**
     * 获取Chart图
     * @returns Array
     */
    getChartsData() {
        let array = [];
        for (let i = 0; i < 6; i++) {
            array.push(mockjs.Random.integer(0, 100))
        }
        return array;
    },
    getTradeData() {
        return mockjs.mock({
            'allTra': mockjs.Random.integer(10000, 50000),
            'speTra': mockjs.Random.integer(0, 5000),
            'norTra': mockjs.Random.integer(0, 5000),
            'userCount': mockjs.Random.integer(0, 1000),
            'managerCount': mockjs.Random.integer(0, 100),
            'time': mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
        })
    },
    /**
     * 获取店长订单
     * @returns Array
     */
    getManagerOrder() {
        let array = [];
        for (let i = 0; i < mockjs.Random.integer(5,10); i ++) {
            array.push(mockjs.mock({
                'state':'店长订单',
                'name':mockjs.Random.csentence(),
                'id':mockjs.Random.string(11),
                'manager':mockjs.Random.cname(),
                'count':mockjs.Random.integer(20,500),
                'price':mockjs.Random.integer(20000,50000000) + '元',
                'coin':mockjs.Random.integer(2000,50000) + '元',
                'payTime':mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss'),
                'sendTime':mockjs.Random.datetime('yyyy-MM-dd A HH:mm:ss')
            }))
        }
        return array;
    },
}

export default Mock