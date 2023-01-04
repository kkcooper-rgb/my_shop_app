<template>
	<view>
		<!-- 轮播图区域 -->
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000" :circular="true">
			<swiper-item v-for="(item, i) in goods_info&&goods_info.pics.length&&goods_info.pics" :key="i">
				<!-- 把当前点击的图片的索引，传递到 preview() 处理函数中 -->
				<image :src="item.pics_big" @click="preview(i)"></image>
			</swiper-item>
		</swiper>
		<!-- 商品信息区域 -->
		<view class="goods-info-box">
			<!-- 商品价格 -->
			<view><text class="price">￥{{goods_info.goods_price}}</text></view>
			<!-- 信息主体区域 -->
			<view class="goods-info-body">
				<!-- 商品名称 -->
				<view><text class="goods-name">{{goods_info.goods_name}}</text></view>
				<!-- 收藏 -->
				<view>
					<uni-icons type="star" size="18" color="gray"></uni-icons>
					<text class="favi">收藏</text>
				</view>
			</view>
			<!-- 运费 -->
			<view><text class="yf">快递：免运费-- {{cart.length}}</text></view>
		</view>
		<!-- 商品详情信息 -->
		<rich-text :nodes="goods_info.goods_introduce"></rich-text>
		<view class="goods-carts">
			<uni-goods-nav :options="options" :fill="true" :button-group="buttonGroup" @click="onClick"
				@buttonClick="buttonClick" />
		</view>
	</view>
</template>

<script>
	import api from '@/config/api.js';
	import {
		request
	} from '@/utils/util.js'
	import {
		mapState,
		mapMutations,
		mapGetters
	} from 'vuex'
	export default {
		data() {
			return {
				goods_info: {
					pics: [],
					goods_price: '',
					goods_name: '',
					goods_introduce: ''
				},
				options: [{
					icon: 'headphones',
					text: '客服'
				}, {
					icon: 'shop',
					text: '店铺',
					info: 0,
					infoBackgroundColor: '#ff0000',
					infoColor: "#fff"
				}, {
					icon: 'cart',
					text: '购物车',
					info: 0
				}],
				buttonGroup: [{
						text: '加入购物车',
						backgroundColor: '#ff0000',
						color: '#fff'
					},
					{
						text: '立即购买',
						backgroundColor: '#ffa200',
						color: '#fff'
					}
				]
			};
		},
		// onLoad(options) {
		// 	this.getGoodsDetail(options.goods_id)
		// },
		created() {
			console.log(uni.getStorageSync('goods_id'),"uni.getStorageSync('goods_id')");
			this.getGoodsDetail(uni.getStorageSync('goods_id'))
		},
		watch: {
			total:{
				handler(newVal) {
					const findResult = this.options.find((x) => x.text === '购物车')
					if (findResult) {
						// 3. 动态为购物车按钮的 info 属性赋值
						findResult.info = newVal
					}
				},
				// immediate 属性用来声明此侦听器，是否在页面初次加载完毕后立即调用
				immediate: true
			}
			
		},
		computed: {
			...mapState('m_cart', ['cart']),
			...mapGetters('m_cart', ['total'])
		},
		methods: {
			...mapMutations('m_cart', ['addToCart']),
			getGoodsDetail(goods_id) {
				request(api.getGoodsDetail, {
					goods_id
				}).then(res => {
					this.goods_info = res.data.message
					uni.setNavigationBarTitle({
						title: res.data.message.goods_name
					});
				})
			},
			onClick(e) {
				uni.showToast({
					title: `点击${e.content.text}`,
					icon: 'none'
				})
			},
			// 右侧按钮的点击事件处理函数
			buttonClick(e) {
				// 1. 判断是否点击了 加入购物车 按钮
				if (e.content.text === '加入购物车') {

					// 2. 组织一个商品的信息对象
					const goods = {
						goods_id: this.goods_info.goods_id, // 商品的Id
						goods_name: this.goods_info.goods_name, // 商品的名称
						goods_price: this.goods_info.goods_price, // 商品的价格
						goods_count: 1, // 商品的数量
						goods_small_logo: this.goods_info.goods_small_logo, // 商品的图片
						goods_state: true // 商品的勾选状态
					}

					// 3. 通过 this 调用映射过来的 addToCart 方法，把商品信息对象存储到购物车中
					this.addToCart(goods)

				}
			},
			// 实现轮播图的预览效果
			preview(i) {

				let urls = this.goods_info.pics.map(x => x.pics_big)
				// #ifdef MP-WEIXIN
				wx.previewImage({
					current: urls[i], // 当前显示图片的 http 链接
					urls // 需要预览的图片 http 链接列表
				})
				// #endif
				// 调用 uni.previewImage() 方法预览图片
				uni.previewImage({
					// 预览时，默认显示图片的索引
					current: i,
					// 所有图片 url 地址的数组
					urls
				})
			}
		}
	}
</script>

<style lang="less">
	.goods-carts {
		/* #ifndef APP-NVUE */
		display: flex;
		/* #endif */
		flex-direction: column;
		position: fixed;
		left: 0;
		right: 0;
		/* #ifdef H5 */
		left: var(--window-left);
		right: var(--window-right);
		/* #endif */
		bottom: 0;
	}

	swiper {
		height: 750rpx;
		width: 750rpx;

		image {
			width: 750rpx;
			height: 750rpx;
		}
	}

	// 商品信息区域的样式
	.goods-info-box {
		padding: 10px;
		padding-right: 0;

		.price {
			color: #c00000;
			font-size: 18px;
			margin: 10px 0;
		}

		.goods-info-body {
			display: flex;
			justify-content: space-between;

			.goods-name {
				font-size: 13px;
				padding-right: 10px;
			}

			// 收藏区域
			.favi {
				width: 120px;
				font-size: 12px;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				border-left: 1px solid #efefef;
				color: gray;
			}
		}

		// 运费
		.yf {
			margin: 10px 0;
			font-size: 12px;
			color: gray;
		}
	}
</style>
