package com.server.pojo;

import java.sql.Date;
/**
 * 大客户关系 实体类
 *@author ZhangRuiLong
 */
public class Largecusprice
{
   /**
    * ID,主键
    */
   private String id; 
   /**
    * 供应商
    */
   private String largecuspricecompany;   
   /**
    * 客户
    */
   private String largecuspricecustomer;   
   /**
    * 商品
    */
   private String largecuspricegoods;   
   /**
    * 单品价
    */
   private String largecuspriceprice;   
   /**
    * 描述
    */
   private String largecuspricedetail;   
   /**
    * 创建时间
    */
   private String largecuspricecreatetime;   
   /**
    * 创建人
    */
   private String largecuspricecreator;   
   /**
    * 套装价
    */
   private String largecuspriceprice2;   
   /**
    * 单品价单位
    */
   private String largecuspriceunit;   
   /**
    * 套装价单位
    */
   private String largecuspriceunit2;   
    //属性方法	    
     /**
	 *设置主键"ID"属性
	 *@param id 实体的Id属性
	 */
	public void setId(String id)
	{
		this.id = id;
	}
	
	/**
	 *获取主键"ID"属性
	 */
	public String getId()
	{
		return this.id;
	}

	/**
	 *设置"供应商"属性
	 *@param largecuspricecompany 实体的Largecuspricecompany属性
	 */
	public void setLargecuspricecompany(String largecuspricecompany)
	{
		this.largecuspricecompany = largecuspricecompany;
	}
	
	/**
	 *获取"供应商"属性
	 */
	public String getLargecuspricecompany()
	{
		return this.largecuspricecompany;
	}	   

	/**
	 *设置"客户"属性
	 *@param largecuspricecustomer 实体的Largecuspricecustomer属性
	 */
	public void setLargecuspricecustomer(String largecuspricecustomer)
	{
		this.largecuspricecustomer = largecuspricecustomer;
	}
	
	/**
	 *获取"客户"属性
	 */
	public String getLargecuspricecustomer()
	{
		return this.largecuspricecustomer;
	}	   

	/**
	 *设置"商品"属性
	 *@param largecuspricegoods 实体的Largecuspricegoods属性
	 */
	public void setLargecuspricegoods(String largecuspricegoods)
	{
		this.largecuspricegoods = largecuspricegoods;
	}
	
	/**
	 *获取"商品"属性
	 */
	public String getLargecuspricegoods()
	{
		return this.largecuspricegoods;
	}	   

	/**
	 *设置"单品价"属性
	 *@param largecuspriceprice 实体的Largecuspriceprice属性
	 */
	public void setLargecuspriceprice(String largecuspriceprice)
	{
		this.largecuspriceprice = largecuspriceprice;
	}
	
	/**
	 *获取"单品价"属性
	 */
	public String getLargecuspriceprice()
	{
		return this.largecuspriceprice;
	}	   

	/**
	 *设置"描述"属性
	 *@param largecuspricedetail 实体的Largecuspricedetail属性
	 */
	public void setLargecuspricedetail(String largecuspricedetail)
	{
		this.largecuspricedetail = largecuspricedetail;
	}
	
	/**
	 *获取"描述"属性
	 */
	public String getLargecuspricedetail()
	{
		return this.largecuspricedetail;
	}	   

	/**
	 *设置"创建时间"属性
	 *@param largecuspricecreatetime 实体的Largecuspricecreatetime属性
	 */
	public void setLargecuspricecreatetime(String largecuspricecreatetime)
	{
		this.largecuspricecreatetime = largecuspricecreatetime;
	}
	
	/**
	 *获取"创建时间"属性
	 */
	public String getLargecuspricecreatetime()
	{
		return this.largecuspricecreatetime;
	}	   

	/**
	 *设置"创建人"属性
	 *@param largecuspricecreator 实体的Largecuspricecreator属性
	 */
	public void setLargecuspricecreator(String largecuspricecreator)
	{
		this.largecuspricecreator = largecuspricecreator;
	}
	
	/**
	 *获取"创建人"属性
	 */
	public String getLargecuspricecreator()
	{
		return this.largecuspricecreator;
	}	   

	/**
	 *设置"套装价"属性
	 *@param largecuspriceprice2 实体的Largecuspriceprice2属性
	 */
	public void setLargecuspriceprice2(String largecuspriceprice2)
	{
		this.largecuspriceprice2 = largecuspriceprice2;
	}
	
	/**
	 *获取"套装价"属性
	 */
	public String getLargecuspriceprice2()
	{
		return this.largecuspriceprice2;
	}	   

	/**
	 *设置"单品价单位"属性
	 *@param largecuspriceunit 实体的Largecuspriceunit属性
	 */
	public void setLargecuspriceunit(String largecuspriceunit)
	{
		this.largecuspriceunit = largecuspriceunit;
	}
	
	/**
	 *获取"单品价单位"属性
	 */
	public String getLargecuspriceunit()
	{
		return this.largecuspriceunit;
	}	   

	/**
	 *设置"套装价单位"属性
	 *@param largecuspriceunit2 实体的Largecuspriceunit2属性
	 */
	public void setLargecuspriceunit2(String largecuspriceunit2)
	{
		this.largecuspriceunit2 = largecuspriceunit2;
	}
	
	/**
	 *获取"套装价单位"属性
	 */
	public String getLargecuspriceunit2()
	{
		return this.largecuspriceunit2;
	}	   
	public Largecusprice() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Largecusprice(
		String id
	 	,String largecuspricecompany
	 	,String largecuspricecustomer
	 	,String largecuspricegoods
	 	,String largecuspriceprice
	 	,String largecuspricedetail
	 	,String largecuspricecreatetime
	 	,String largecuspricecreator
	 	,String largecuspriceprice2
	 	,String largecuspriceunit
	 	,String largecuspriceunit2
		 ){
		super();
		this.id = id;
	 	this.largecuspricecompany = largecuspricecompany;
	 	this.largecuspricecustomer = largecuspricecustomer;
	 	this.largecuspricegoods = largecuspricegoods;
	 	this.largecuspriceprice = largecuspriceprice;
	 	this.largecuspricedetail = largecuspricedetail;
	 	this.largecuspricecreatetime = largecuspricecreatetime;
	 	this.largecuspricecreator = largecuspricecreator;
	 	this.largecuspriceprice2 = largecuspriceprice2;
	 	this.largecuspriceunit = largecuspriceunit;
	 	this.largecuspriceunit2 = largecuspriceunit2;
	}
}

