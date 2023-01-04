const baseUrl = 'https://api-hmugo-web.itheima.net/api/public/v1'
module.exports = {
	// 轮播图
	getBanner: baseUrl + '/home/swiperdata',
	// 导航菜单
	getCatitems: baseUrl + '/home/catitems',
	// 楼层
	getFloordata: baseUrl + '/home/floordata',
	// 商品详情
	getGoodsDetail: baseUrl + '/goods/detail',
	// 商品分类
	getCategories: baseUrl + '/categories',
	// 商品列表搜索
	getGoodsList: baseUrl + '/goods/search',
}