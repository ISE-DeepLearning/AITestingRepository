package edu.nju.ise.repository.dao;

import edu.nju.ise.repository.bean.ResponsePage;
import edu.nju.ise.repository.model.Paper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 类说明：论文DaoTemplatee
 * 创建者：Zeros
 * 创建时间：2018/8/29 下午4:46
 * 包名：edu.nju.ise.repository.dao
 */

@Repository
public class PaperTemplateDao {

    @Autowired
    private MongoTemplate mongoTemplate;

    /**
     * 根据作者模糊匹配
     * @param authors 作者关键字
     * @param pageable 分页
     * @return
     */
    public ResponsePage<Paper> findByAuthorsLike(String authors, Pageable pageable) {
        ResponsePage<Paper> responsePage = new ResponsePage<>(pageable.getPageNumber()+1, pageable.getPageSize());

        Query query = new Query();
        //不区分大小写
        Criteria criteria = Criteria.where("authors").elemMatch(Criteria.where("name").regex(".*" +authors+ ".*", "i"));
        query.addCriteria(criteria);

        //计算总数
        long total = mongoTemplate.count(query, Paper.class);
        int pageTotal = (int) (total / pageable.getPageSize());
        List<Paper> items = mongoTemplate.find(query.with(pageable), Paper.class);
        responsePage.setContent(items);
        responsePage.setTotalElements(total);
        responsePage.setTotalPages(pageTotal);
        return responsePage;
    }
}
