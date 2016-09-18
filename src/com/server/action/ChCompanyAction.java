package com.server.action;

import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.server.pojo.IndexPageInfo;
import com.system.tools.CommonConst;
import com.system.tools.pojo.Pageinfo;
import com.system.tools.util.CommonUtil;
import com.system.tools.util.DateUtils;

/**
 * 经销商 逻辑层
 *@author ZhangRuiLong
 */
public class ChCompanyAction extends CompanyAction {
	//供应商index页信息
	@SuppressWarnings("unchecked")
	public void comIndexInfo(HttpServletRequest request, HttpServletResponse response){
		String comid = (String) request.getSession().getAttribute("comid");
		if(CommonUtil.isEmpty(comid)){
			comid = "1";
		}
		IndexPageInfo info = new IndexPageInfo();
		String strDate = DateUtils.getDate();
		//客户
		String sql1 = "select count(*) cusTotal from ccustomerview ccv where ccv.ccustomercompany='"+comid+"' and ccv.customerstatue='启用'";
		List<IndexPageInfo> nowinfo = selAll(IndexPageInfo.class, sql1);
		info.setCusTotal(nowinfo.get(0).getCusTotal());										//总客户数
		nowinfo = selAll(IndexPageInfo.class, sql1+" and ccv.cuscreatetime like '"+strDate+"%'");
		info.setTodayCusTo(nowinfo.get(0).getCusTotal());									//今天的总客户数
		//订单商品
		String sql2 = "select sum(od.orderdnum) cusTotal from orderm om left outer join orderd od on od.orderdorderm = om.ordermid where om.ordermcompany = '"+
					comid+"' and om.ordermstatue != '已删除'";
		nowinfo = selAll(IndexPageInfo.class, sql2);
		info.setOdGoodsTotal(nowinfo.get(0).getCusTotal() == null?"0":nowinfo.get(0).getCusTotal());									//订单商品数
		nowinfo = selAll(IndexPageInfo.class, sql2+" and om.ordermtime like '"+strDate+"%'");
		info.setTodayOdGTo(nowinfo.get(0).getCusTotal() == null?"0":nowinfo.get(0).getCusTotal());									//今日订单商品数
		//营业额
		String sql3 = "select sum(od.orderdrightmoney) as cusTotal from orderm om "+
				"left join orderd od on od.orderdorderm = om.ordermid "+
				"where om.ordermcompany = '"+comid+"' and om.ordermstatue != '已删除'";
		nowinfo = selAll(IndexPageInfo.class, sql3);
		info.setTurnoverTotal("￥"+(nowinfo.get(0).getCusTotal() == null?"0":nowinfo.get(0).getCusTotal()));								//总营业额
		nowinfo = selAll(IndexPageInfo.class, sql3+" and om.ordermtime like '"+strDate+"%'");
		info.setTodayTurnTo("￥"+(nowinfo.get(0).getCusTotal() == null?"0":nowinfo.get(0).getCusTotal()));									//今日营业额
		//订单数
		String sql4 = "select count(*) cusTotal from orderm om where om.ordermcompany='"+comid+"' and om.ordermstatue != '已删除'";
		nowinfo = selAll(IndexPageInfo.class, sql4);
		info.setOrdersTotal(nowinfo.get(0).getCusTotal());									//订单总数
		nowinfo = selAll(IndexPageInfo.class, sql4+" and om.ordermtime like '"+strDate+"%'");
		info.setTodayOrdersTo(nowinfo.get(0).getCusTotal());								//今日订单总数
		
		nowinfo.set(0, info);
		Pageinfo pageinfo = new Pageinfo(0, nowinfo);
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
}



















