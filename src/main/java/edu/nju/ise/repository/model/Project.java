package edu.nju.ise.repository.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;


/**
 * 类说明：项目类
 * 创建者：Zeros
 * 创建时间：2018/8/28 下午3:21
 * 包名：edu.nju.ise.repository.model
 */

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "project_data")
public class Project {

    @Id
    private String id;

    //标题
    private String title;

    //搜索标题
    @Field("search_title")
    private String searchTitle;

    //项目链接
    private String url;

    //项目介绍
    private String introduction;



}
