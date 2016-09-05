package com.server.pojo;
/**
 * 首页数据
 */
public class IndexPageInfo {

	private String cusTotal;			//客户总数

	private String todayCusTo;			//今日客户总数

	private String odGoodsTotal;		//订单商品总数

	private String todayOdGTo;			//今日订单商品总数

	private String turnoverTotal;		//营业额

	private String todayTurnTo;			//今日营业额

	private String ordersTotal;		//订单数

	private String todayOrdersTo;		//今日订单数

	public String getCusTotal() {
		return cusTotal;
	}

	public void setCusTotal(String cusTotal) {
		this.cusTotal = cusTotal;
	}

	public String getTodayCusTo() {
		return todayCusTo;
	}

	public void setTodayCusTo(String todayCusTo) {
		this.todayCusTo = todayCusTo;
	}

	public String getOdGoodsTotal() {
		return odGoodsTotal;
	}

	public void setOdGoodsTotal(String odGoodsTotal) {
		this.odGoodsTotal = odGoodsTotal;
	}

	public String getTodayOdGTo() {
		return todayOdGTo;
	}

	public void setTodayOdGTo(String todayOdGTo) {
		this.todayOdGTo = todayOdGTo;
	}

	public String getTurnoverTotal() {
		return turnoverTotal;
	}

	public void setTurnoverTotal(String turnoverTotal) {
		this.turnoverTotal = turnoverTotal;
	}

	public String getTodayTurnTo() {
		return todayTurnTo;
	}

	public void setTodayTurnTo(String todayTurnTo) {
		this.todayTurnTo = todayTurnTo;
	}

	public String getOrdersTotal() {
		return ordersTotal;
	}

	public void setOrdersTotal(String ordersTotal) {
		this.ordersTotal = ordersTotal;
	}

	public String getTodayOrdersTo() {
		return todayOrdersTo;
	}

	public void setTodayOrdersTo(String todayOrdersTo) {
		this.todayOrdersTo = todayOrdersTo;
	}

}
