package edu.nju.ise.repository.dao;

import edu.nju.ise.repository.model.Paper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

/**
 * 类说明：论文Dao
 * 创建者：Zeros
 * 创建时间：2018/8/29 下午1:11
 * 包名：edu.nju.ise.repository.dao
 */

@Repository
public interface PaperDao extends MongoRepository<Paper, String> {

    /**
     * 根据标题模糊匹配
     * @param title 标题关键字
     * @param pageable 分页
     * @return
     */
    Page<Paper> findByTitleLike(String title, Pageable pageable);

}
