package edu.nju.ise.repository.bean;

import edu.nju.ise.repository.model.Tag;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

/**
 * 类说明：提交的论文信息
 * 创建者：Zeros
 * 创建时间：2018/8/29 下午5:47
 * 包名：edu.nju.ise.repository.bean
 */

@Data
@NoArgsConstructor
@AllArgsConstructor
public class PaperCommand {

    //标题
    private String title;

    //作者
    private List<String> authors;

    //论文链接
    private String url;

    //发表时间
    private String publishTime;

    //发表刊物
    private String publishJournal;

    //摘要
    private String paperAbstract;

    //标签
    private List<Tag> tags;
}
