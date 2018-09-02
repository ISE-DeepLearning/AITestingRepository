package edu.nju.ise.repository.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.List;

/**
 * 类说明：论文类
 * 创建者：Zeros
 * 创建时间：2018/8/28 下午3:21
 * 包名：edu.nju.ise.repository.model
 */

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "paper_data")
public class Paper {

    @Id
    private String id;

    //标题
    private String title;

    //搜索标题
    @Field("search_title")
    private String searchTitle;

    //作者
    private List<Author> authors;

    //论文链接
    private String url;

    //发表时间
    @Field("publish_time")
    private String publishTime;

    //发表刊物
    @Field("publish_journal")
    private String publishJournal;

    //摘要
    @Field("paper_abstract")
    private String paperAbstract;

    //标签(暂不启用）
//    private List<Label> labels;

}
