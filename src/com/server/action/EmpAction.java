package com.server.action;

import java.lang.reflect.Type;
import com.google.gson.reflect.TypeToken;
import java.util.ArrayList;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.server.pojo.Emp;
import com.server.poco.EmpPoco;
import com.system.tools.CommonConst;
import com.system.tools.base.BaseActionDao;
import com.system.tools.pojo.Fileinfo;
import com.system.tools.pojo.Queryinfo;
import com.system.tools.util.CommonUtil;
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
	
	/**
    * 模糊查询语句
    * @param query
    * @return "filedname like '%query%' or ..."
    */
    public String getQuerysql(String query) {
    	if(CommonUtil.isEmpty(query)) return null;
    	String querysql = "";
    	String queryfieldname[] = EmpPoco.QUERYFIELDNAME;
    	for(int i=0;i<queryfieldname.length;i++){
    		querysql += queryfieldname[i] + " like '%" + query + "%' or ";
    	}
		return querysql.substring(0, querysql.length() - 4);
	};
	//将json转换成cuss
	public void json2cuss(HttpServletRequest request){
		String json = request.getParameter("json");
		System.out.println("json : " + json);
		if(CommonUtil.isNotEmpty(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
	}
	//新增
	public void insAll(HttpServletRequest request, HttpServletResponse response){
		json2cuss(request);
		for(Emp temp:cuss){
			if(CommonUtil.isNull(temp.getEmpid()))
				temp.setEmpid(CommonUtil.getNewId());
			result = insSingle(temp);
		}
		responsePW(response, result);
	}
	//删除
	public void delAll(HttpServletRequest request, HttpServletResponse response){
		json2cuss(request);
		for(Emp temp:cuss){
			result = delSingle(temp,EmpPoco.KEYCOLUMN);
		}
		responsePW(response, result);
	}
	//修改
	public void updAll(HttpServletRequest request, HttpServletResponse response){
		json2cuss(request);
		for(Emp temp:cuss){
			result = updSingle(temp,EmpPoco.KEYCOLUMN);
		}
		responsePW(response, result);
	}
	//导出
	public void expAll(HttpServletRequest request, HttpServletResponse response) throws Exception{
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Emp.class);
		queryinfo.setQuery(getQuerysql(queryinfo.getQuery()));
		if(CommonUtil.isNull(queryinfo.getOrder())) queryinfo.setOrder(EmpPoco.ORDER);
		cuss = (ArrayList<Emp>) selAll(queryinfo);
		FileUtil.expExcel(response,cuss,EmpPoco.CHINESENAME,EmpPoco.NAME);
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
	//查询所有
	public void selAll(HttpServletRequest request, HttpServletResponse response){
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Emp.class);
		queryinfo.setQuery(getQuerysql(queryinfo.getQuery()));
		if(CommonUtil.isNull(queryinfo.getOrder())) queryinfo.setOrder(EmpPoco.ORDER);
		Pageinfo pageinfo = new Pageinfo(0, selAll(queryinfo));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
	//分页查询
	public void selQuery(HttpServletRequest request, HttpServletResponse response){
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Emp.class);
		queryinfo.setQuery(getQuerysql(queryinfo.getQuery()));
		if(CommonUtil.isNull(queryinfo.getOrder())) queryinfo.setOrder(EmpPoco.ORDER);
		Pageinfo pageinfo = new Pageinfo(getTotal(queryinfo), selQuery(queryinfo));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
}
