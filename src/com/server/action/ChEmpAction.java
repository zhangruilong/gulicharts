package com.server.action;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.server.pojo.Customer;
import com.server.pojo.Emp;
import com.system.tools.CommonConst;
import com.system.tools.pojo.Pageinfo;
import com.system.tools.util.DateUtils;

/**
 * 业务员 逻辑层
 *@author ZhangRuiLong
 */
public class ChEmpAction extends EmpAction {
	
	//客户经理的订单数量
	@SuppressWarnings("unchecked")
	public void manaOrderNum(HttpServletRequest request, HttpServletResponse response){
		String dateStr = request.getParameter("date");
		String comid = (String) request.getSession().getAttribute("comid");
		if(null == comid){
			comid = "1";
		}
		if(null == dateStr || dateStr.equals("")){
			dateStr = DateUtils.getDate();
		}
		cuss = (ArrayList<Emp>) selAll(Emp.class, "select sum(om.ordermrightmoney) as empcode,cc.createtime as createtime from orderm om "+
									"left outer join customer c "+
									"on om.ordermcustomer = c.customerid "+
									"left outer join ccustomer cc "+
									"on cc.ccustomercustomer = c.customerid where cc.ccustomercompany='"+comid+"' and om.ordermtime like '"+dateStr+"%' "+
									"group by cc.createtime");
		Pageinfo pageinfo = new Pageinfo(0, cuss);
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
	//客户经理的订单
	@SuppressWarnings("unchecked")
	public void manaOrderm(HttpServletRequest request, HttpServletResponse response){
		String comid = (String) request.getSession().getAttribute("comid");
		String dateStr = request.getParameter("date");
		String empname = request.getParameter("empname");
		if(null == empname){
			empname="";
		} else if(empname.equals("未分配")){
			empname = " is null";
		} else {
			empname = " = '"+empname+"'";
		}
		if(null == comid){
			comid = "1";
		}
		List<Customer> cusli = (List<Customer>) selAll(Customer.class,"select distinct c.customerid as customerid, "+
                "c.customershop as customershop, "+
                "c.customername as customername, "+
                "c.customerphone as customerphone, "+
                "c.customeraddress as customeraddress, "+
                "cc.createtime as customercity, "+
                "cc.ccustomerid as ccustomerid, "+
                "count(om.ordermid) as customerxian, "+
                "sum(om.ordermrightmoney) as createtime "+
				  "from customer c "+
				  "left outer join ccustomer cc on c.customerid = cc.ccustomercustomer "+
				  "left outer join orderm om on om.ordermcustomer = c.customerid "+
				 "where cc.ccustomercompany = '"+comid+"' "+
				   "and om.ordermstatue != '已删除' "+
				   "and cc.createtime "+empname+" "+
				   "and om.ordermtime like '"+dateStr+"%' "+
				 "group by c.customerid, "+
				          "c.customershop, "+
				          "c.customername, "+
				          "c.customerphone, "+
				          "c.customeraddress, "+
				          "cc.createtime, "+
				          "cc.ccustomerid "+
				 "order by customercity, customerid desc nulls last");
		Pageinfo pageinfo = new Pageinfo(0, cusli);
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
}


















