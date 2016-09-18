package com.server.action;

import java.util.ArrayList;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.server.pojo.Orderm;
import com.system.tools.CommonConst;
import com.system.tools.pojo.Pageinfo;
import com.system.tools.util.CommonUtil;
import com.system.tools.util.DateUtils;

/**
 * 订单 逻辑层
 *@author ZhangRuiLong
 */
public class ChOrdermAction extends OrdermAction {
	//查看供应商的今日订单
	@SuppressWarnings("unchecked")
	public void comTodayOrder(HttpServletRequest request, HttpServletResponse response){
		String comid = (String) request.getSession().getAttribute("comid");
		if(CommonUtil.isEmpty(comid)){
			comid = "1";
		}
		//今天的订单
		cuss = (ArrayList<Orderm>) selAll(Orderm.class, 
				"select * from orderm om where om.ordermcompany='"+comid+"' and om.ordermstatue != '已删除' and om.ordermtime like '"+
				DateUtils.getDate()+"%' order by om.ordermtime desc");
		for (Orderm om : cuss) {
			if(om.getOrdermstatue().equals("已下单")){
				om.setOrdermcompany("+label-danger");
			} else if(om.getOrdermstatue().equals("已确认")){
				om.setOrdermcompany("+label-success");
			}
		}
		Pageinfo pageinfo = new Pageinfo(0, cuss);
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
}

















