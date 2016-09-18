package com.server.action;

import java.lang.reflect.Type;
import com.google.gson.reflect.TypeToken;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.server.pojo.Customer;
import com.server.pojo.Emp;
import com.server.poco.EmpPoco;
import com.system.tools.CommonConst;
import com.system.tools.base.BaseActionDao;
import com.system.tools.pojo.Fileinfo;
import com.system.tools.pojo.Queryinfo;
import com.system.tools.util.CommonUtil;
import com.system.tools.util.DateUtils;
import com.system.tools.util.FileUtil;
import com.system.tools.pojo.Pageinfo;

/**
 * 业务员 逻辑层
 *@author ZhangRuiLong
 */
public class EmpAction extends BaseActionDao {
	public String result = CommonConst.FAILURE;
	public ArrayList<Emp> cuss = null;
	public Type TYPE = new TypeToken<ArrayList<Emp>>() {}.getType();

	//新增
	public void insAll(HttpServletRequest request, HttpServletResponse response){
		String json = request.getParameter("json");
		System.out.println("json : " + json);
		json = json.replace("\"\"", "null");
		if(CommonUtil.isNotEmpty(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		for(Emp temp:cuss){
			if(CommonUtil.isNull(temp.getEmpid()))
				temp.setEmpid(CommonUtil.getNewId());
			result = insSingle(temp);
		}
		responsePW(response, result);
	}
	//删除
	public void delAll(HttpServletRequest request, HttpServletResponse response){
		String json = request.getParameter("json");
		System.out.println("json : " + json);
		if(CommonUtil.isNotEmpty(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		for(Emp temp:cuss){
			result = delSingle(temp,EmpPoco.KEYCOLUMN);
		}
		responsePW(response, result);
	}
	//修改
	public void updAll(HttpServletRequest request, HttpServletResponse response){
		String json = request.getParameter("json");
		System.out.println("json : " + json);
		if(CommonUtil.isNotEmpty(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		for(Emp temp:cuss){
			result = updSingle(temp,EmpPoco.KEYCOLUMN);
		}
		responsePW(response, result);
	}
	//导入
	public void impAll(HttpServletRequest request, HttpServletResponse response){
		Fileinfo fileinfo = FileUtil.upload(request,0,null,EmpPoco.NAME,"impAll");
		String json = FileUtil.impExcel(fileinfo.getPath(),EmpPoco.FIELDNAME); 
		if(CommonUtil.isNotEmpty(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		for(Emp temp:cuss){
			if(CommonUtil.isNull(temp.getEmpid()))
				temp.setEmpid(CommonUtil.getNewId());
			result = insSingle(temp);
		}
		responsePW(response, result);
	}
	//导出
	public void expAll(HttpServletRequest request, HttpServletResponse response) throws Exception{
		Queryinfo queryinfo = getQueryinfo(request, Emp.class, EmpPoco.QUERYFIELDNAME, EmpPoco.ORDER, TYPE);
		cuss = (ArrayList<Emp>) selAll(queryinfo);
		FileUtil.expExcel(response,cuss,EmpPoco.CHINESENAME,EmpPoco.NAME);
	}
	//查询所有
	public void selAll(HttpServletRequest request, HttpServletResponse response){
		Queryinfo queryinfo = getQueryinfo(request, Emp.class, EmpPoco.QUERYFIELDNAME, EmpPoco.ORDER, TYPE);
		Pageinfo pageinfo = new Pageinfo(0, selAll(queryinfo));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
	//分页查询
	public void selQuery(HttpServletRequest request, HttpServletResponse response){
		Queryinfo queryinfo = getQueryinfo(request, Emp.class, EmpPoco.QUERYFIELDNAME, EmpPoco.ORDER, TYPE);
		Pageinfo pageinfo = new Pageinfo(getTotal(queryinfo), selQuery(queryinfo));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
	
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


















