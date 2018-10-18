package edu.nju.ise.repository.bean;

import edu.nju.ise.repository.model.Author;
import edu.nju.ise.repository.model.Paper;
import edu.nju.ise.repository.model.Tag;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.util.StringUtils;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LatexCommand {

    // latex信息
    /*
    @article{levine2018learning,
            title={Learning hand-eye coordination for robotic grasping with deep learning and large-scale data collection},
            author={Levine, Sergey and Pastor, Peter and Krizhevsky, Alex and Ibarz, Julian and Quillen, Deirdre},
            journal={The International Journal of Robotics Research},
            booktitle={2018 IEEE International Conference on Software Quality, Reliability and Security Companion (QRS-C)},
            pages={108--115},
            volume={37},
            number={4-5},
            pages={421--436},
            year={2018},
            publisher={SAGE Publications Sage UK: London, England}
    }
    */
    private String info;

    //研究方向类型
    private Integer researchType;

    //cite的内容
    private String citeKey;

    // 摘要
    private String paperAbstract;

    //链接
    private String url;

    //标签
    private List<Tag> tags;

    //bibTex
    private String bibString;


    public Paper parsePaper(){
        Paper paper = new Paper();
        String title = getProperty("title", info);
        String authorStr = getProperty("author", info).replace(",", "").trim();
        String journal = getProperty("journal", info);
        String bookTitle = getProperty("booktitle", info);
        String year = getProperty("year", info);
        String cite = info.substring(info.indexOf('{')+1, info.indexOf(','));

        String[] authors = authorStr.split("and");
        List<Author> authorList = new ArrayList<>();
        for(String name: authors){
            Author author = new Author(name.trim());
            authorList.add(author);
        }

        paper.setCiteKey(cite);
        paper.setType(researchType);
        paper.setAuthors(authorList);
        paper.setPublishTime(year);
        paper.setPublishJournal(StringUtils.isEmpty(journal) ? bookTitle : journal);
        paper.setTitle(title);
        paper.setSearchTitle(title.toLowerCase());
        paper.setPaperAbstract(paperAbstract);
        paper.setUrl(url);
        paper.setTags(tags);
        paper.setBibString(info);
        return paper;
    }


    private String getProperty(String property, String source){
        if(StringUtils.isEmpty(property) || StringUtils.isEmpty(source)){
            return "";
        }
        int index = source.indexOf(property);
        if(index < 0){
            return "";
        }
        //+2为 '={'
        index = index + property.length() + 2;
        int endIndex = source.indexOf("}", index);
        if(endIndex < 0){
            return "";
        }
        return source.substring(index, endIndex);
    }

}
