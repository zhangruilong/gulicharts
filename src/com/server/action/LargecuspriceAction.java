package com.server.action;

import java.lang.reflect.Type;
import com.google.gson.reflect.TypeToken;
import java.util.ArrayList;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.server.pojo.Largecusprice;
import com.server.poco.LargecuspricePoco;
import com.system.tools.CommonConst;
import com.system.tools.base.BaseActionDao;
import com.system.tools.pojo.Fileinfo;
import com.system.tools.pojo.Queryinfo;
import com.system.tools.util.CommonUtil;
import com.system.tools.util.FileUtil;
import com.system.tools.pojo.Pageinfo;

/**
 * 大客户关系 逻辑层
 *@author ZhangRuiLong
 */
public class LargecuspriceAction extends BaseActionDao {
	public String result = CommonConst.FAILURE;
	public ArrayList<Largecusprice> cuss = null;
	public Type TYPE = new TypeToken<ArrayList<Largecusprice>>() {}.getType();
	
	/**
    * 模糊查询语句
    * @param query
    * @return "filedname like '%query%' or ..."
    */
    public String getQuerysql(String query) {
    	if(CommonUtil.isEmpty(query)) return null;
    	String querysql = "";
    	String queryfieldname[] = LargecuspricePoco.QUERYFIELDNAME;
    	for(int i=0;i<queryfieldname.length;i++){
    		querysql += queryfieldname[i] + " like '%" + query + "%' or ";
    	}
		return querysql.substring(0, querysql.length() - 4);
	};
	//新增
	public void insAll(HttpServletRequest request, HttpServletResponse response){
		String json = request.getParameter("json");
		System.out.println("json : " + json);
		json = json.replace("\"\"", "null");
		if(CommonUtil.isNotEmpty(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		for(Largecusprice temp:cuss){
			if(CommonUtil.isNull(temp.getId()))
				temp.setId(CommonUtil.getNewId());
			result = insSingle(temp);
		}
		responsePW(response, result);
	}
	//删除
	public void delAll(HttpServletRequest request, HttpServletResponse response){
		String json = request.getParameter("json");
		System.out.println("json : " + json);
		if(CommonUtil.isNotEmpty(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		for(Largecusprice temp:cuss){
			result = delSingle(temp,LargecuspricePoco.KEYCOLUMN);
		}
		responsePW(response, result);
	}
	//修改
	public void updAll(HttpServletRequest request, HttpServletResponse response){
		String json = request.getParameter("json");
		System.out.println("json : " + json);
		if(CommonUtil.isNotEmpty(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		for(Largecusprice temp:cuss){
			result = updSingle(temp,LargecuspricePoco.KEYCOLUMN);
		}
		responsePW(response, result);
	}
	//导出
	public void expAll(HttpServletRequest request, HttpServletResponse response) throws Exception{
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Largecusprice.class);
		queryinfo.setQuery(getQuerysql(queryinfo.getQuery()));
		if(CommonUtil.isNull(queryinfo.getOrder())) queryinfo.setOrder(LargecuspricePoco.ORDER);
		cuss = (ArrayList<Largecusprice>) selAll(queryinfo);
		FileUtil.expExcel(response,cuss,LargecuspricePoco.CHINESENAME,LargecuspricePoco.NAME);
	}
	//导入
	public void impAll(HttpServletRequest request, HttpServletResponse response){
		Fileinfo fileinfo = FileUtil.upload(request,0,null,LargecuspricePoco.NAME,"impAll");
		String json = FileUtil.impExcel(fileinfo.getPath(),LargecuspricePoco.FIELDNAME); 
		if(CommonUtil.isNotEmpty(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
		for(Largecusprice temp:cuss){
			if(CommonUtil.isNull(temp.getId()))
				temp.setId(CommonUtil.getNewId());
			result = insSingle(temp);
		}
		responsePW(response, result);
	}
	//查询所有
	public void selAll(HttpServletRequest request, HttpServletResponse response){
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Largecusprice.class);
		queryinfo.setQuery(getQuerysql(queryinfo.getQuery()));
		if(CommonUtil.isNull(queryinfo.getOrder())) queryinfo.setOrder(LargecuspricePoco.ORDER);
		String json = request.getParameter("json");
		if(CommonUtil.isNotEmpty(json)){
			System.out.println("json : " + json);
			json = json.replace("\"\"", "null");
			if(CommonUtil.isNotEmpty(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
			queryinfo.setJson(cuss.get(0));
		}
		Pageinfo pageinfo = new Pageinfo(0, selAll(queryinfo));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
	//分页查询
	public void selQuery(HttpServletRequest request, HttpServletResponse response){
		Queryinfo queryinfo = getQueryinfo(request);
		queryinfo.setType(Largecusprice.class);
		queryinfo.setQuery(getQuerysql(queryinfo.getQuery()));
		if(CommonUtil.isNull(queryinfo.getOrder())) queryinfo.setOrder(LargecuspricePoco.ORDER);
		String json = request.getParameter("json");
		if(CommonUtil.isNotEmpty(json)){
			System.out.println("json : " + json);
			json = json.replace("\"\"", "null");
			if(CommonUtil.isNotEmpty(json)) cuss = CommonConst.GSON.fromJson(json, TYPE);
			queryinfo.setJson(cuss.get(0));
		}
		Pageinfo pageinfo = new Pageinfo(getTotal(queryinfo), selQuery(queryinfo));
		result = CommonConst.GSON.toJson(pageinfo);
		responsePW(response, result);
	}
}
