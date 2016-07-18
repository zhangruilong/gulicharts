package com.server.poco;

/**
 * 大客户关系 实体类的常量
 *@author ZhangRuiLong
 */
public class LargecuspricePoco
{
   /**
    * 实体中文名
    */
   public static String NAME = "大客户关系";
   /**
    * 实体表名
    */
   public static String TABLE = "Largecusprice";
   /**
    * 实体主键
    */
   public static String[] KEYCOLUMN = {"id"};
   /**
    * 实体中文字段
    */
   public static String[] CHINESENAME = {
   		"ID",
	 	"供应商",
	 	"客户",
	 	"商品",
	 	"单品价",
	 	"描述",
	 	"创建时间",
	 	"创建人",
	 	"套装价",
	 	"单品价单位",
	 	"套装价单位",
	};
	/**
	 * 实体英文字段
	 */
   public static final String[] FIELDNAME = {
   		"id",
	 	"largecuspricecompany",
	 	"largecuspricecustomer",
	 	"largecuspricegoods",
	 	"largecuspriceprice",
	 	"largecuspricedetail",
	 	"largecuspricecreatetime",
	 	"largecuspricecreator",
	 	"largecuspriceprice2",
	 	"largecuspriceunit",
	 	"largecuspriceunit2",
   };
   /**
    * 实体排序
    */
   public static final String ORDER = " id desc ";
   /**
	 * 要模糊查询字段
	 */
   public static final String[] QUERYFIELDNAME = {
   		"id",
	 	"largecuspricecompany",
	 	"largecuspricecustomer",
	 	"largecuspricegoods",
	 	"largecuspriceprice",
	 	"largecuspricedetail",
	 	"largecuspricecreatetime",
	 	"largecuspricecreator",
	 	"largecuspriceprice2",
	 	"largecuspriceunit",
	 	"largecuspriceunit2",
   };
}

