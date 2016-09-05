package com.server.action;

import java.lang.reflect.Type;

import com.google.gson.internal.bind.SqlDateTypeAdapter;
import com.google.gson.reflect.TypeToken;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.server.pojo.Company;
import com.server.pojo.IndexPageInfo;
import com.server.poco.CompanyPoco;
import com.system.tools.CommonConst;
import com.system.tools.base.BaseActionDao;
import com.system.tools.pojo.Fileinfo;
import com.system.tools.pojo.Queryinfo;
import com.system.tools.util.CommonUtil;
import com.system.tools.util.DateUtils;
import com.system.tools.util.FileUtil;
import com.system.tools.pojo.Pageinfo;

/**
 * 经销商 逻辑层
 *@author ZhangRuiLong
 */
public class CompanyAction extends BaseActionDao {
	public String result = CommonConst.FAILURE;
	public ArrayList<Company> cuss = null;
	public Type TYPE = new TypeToken<ArrayList<Company>>() {}.getType();

	//新增
	public void insAll(HttpServletRequest request, HttpServletResponse response){
		String json = request.getParameter("json");
		System.out.println("json : " + json);
		json = json.replace("\"\"", "null");
		if(CommonUtil.isNotEmpty(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		for(Company temp:cuss){
			if(CommonUtil.isNull(temp.getCompanyid()))
				temp.setCompanyid(CommonUtil.getNewId());
			result = insSingle(temp);
		}
		responsePW(response, result);
	}
	//删除
	public void delAll(HttpServletRequest request, HttpServletResponse response){
		String json = request.getParameter("json");
		System.out.println("json : " + json);
		if(CommonUtil.isNotEmpty(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		for(Company temp:cuss){
			result = delSingle(temp,CompanyPoco.KEYCOLUMN);
		}
		responsePW(response, result);
	}
	//修改
	public void updAll(HttpServletRequest request, HttpServletResponse response){
		String json = request.getParameter("json");
		System.out.println("json : " + json);
		if(CommonUtil.isNotEmpty(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		for(Company temp:cuss){
			result = updSingle(temp,CompanyPoco.KEYCOLUMN);
		}
		responsePW(response, result);
	}
	//导入
	public void impAll(HttpServletRequest request, HttpServletResponse response){
		Fileinfo fileinfo = FileUtil.upload(request,0,null,CompanyPoco.NAME,"impAll");
		String json = FileUtil.impExcel(fileinfo.getPath(),CompanyPoco.FIELDNAME); 
		if(CommonUtil.isNotEmpty(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		for(Company temp:cuss){
			if(CommonUtil.isNull(temp.getCompanyid()))
				temp.setCompanyid(CommonUtil.getNewId());
			result = insSingle(temp);
		}
		responsePW(response, result);
	}
	//导出
	public void expAll(HttpServletRequest request, HttpServletResponse response) throws Exception{
		Queryinfo queryinfo = getQueryinfo(request, Company.class, CompanyPoco.QUERYFIELDNAME, CompanyPoco.ORDER, TYPE);
		cuss = (ArrayList<Company>) selAll(queryinfo);
		FileUtil.expExcel(response,cuss,CompanyPoco.CHINESENAME,CompanyPoco.NAME);
	}
	//查询所有
	public void selAll(HttpServletRequest request, HttpServletResponse response){
		Queryinfo queryinfo = getQueryinfo(request, Company.class, CompanyPoco.QUERYFIELDNAME, CompanyPoco.ORDER, TYPE);
		Pageinfo pageinfo = new Pageinfo(0, selAll(queryinfo));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
	//分页查询
	public void selQuery(HttpServletRequest request, HttpServletResponse response){
		Queryinfo queryinfo = getQueryinfo(request, Company.class, CompanyPoco.QUERYFIELDNAME, CompanyPoco.ORDER, TYPE);
		Pageinfo pageinfo = new Pageinfo(getTotal(queryinfo), selQuery(queryinfo));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
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
		String sql2 = "select sum(od.orderdnum) cusTotal from orderm om left outer join orderd od on od.orderdorderm = om.ordermid where om.ordermcompany = '"+comid+"'";
		nowinfo = selAll(IndexPageInfo.class, sql2);
		info.setOdGoodsTotal(nowinfo.get(0).getCusTotal() == null?"0":nowinfo.get(0).getCusTotal());									//订单商品数
		nowinfo = selAll(IndexPageInfo.class, sql2+" and om.ordermtime like '"+strDate+"%'");
		info.setTodayOdGTo(nowinfo.get(0).getCusTotal() == null?"0":nowinfo.get(0).getCusTotal());									//今日订单商品数
		//营业额
		String sql3 = "select sum(om.ordermrightmoney) cusTotal from orderm om where om.ordermcompany='"+comid+"'";
		nowinfo = selAll(IndexPageInfo.class, sql3);
		info.setTurnoverTotal("￥"+(nowinfo.get(0).getCusTotal() == null?"0":nowinfo.get(0).getCusTotal()));								//总营业额
		nowinfo = selAll(IndexPageInfo.class, sql3+" and om.ordermtime like '"+strDate+"%'");
		info.setTodayTurnTo("￥"+(nowinfo.get(0).getCusTotal() == null?"0":nowinfo.get(0).getCusTotal()));									//今日营业额
		//订单数
		String sql4 = "select count(*) cusTotal from orderm om where om.ordermcompany='"+comid+"'";
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



















