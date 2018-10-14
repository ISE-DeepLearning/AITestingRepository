package edu.nju.ise.repository.dao;

import edu.nju.ise.repository.model.Paper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

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
     * @param type 研究方向
     * @param searchTitle 标题关键字
     * @param pageable 分页
     * @return
     */
    Page<Paper> findByTypeAndSearchTitleLike(Integer type, String searchTitle, Pageable pageable);

    /**
     * 搜索论文标题是否已存在
     *
     * @param type
     * @param searchTitle
     * @return
     */
    List<Paper> findByTypeAndSearchTitle(Integer type, String searchTitle);

    /**
     * 按标签搜索论文集
     *
     * @param tagId
     * @param pageable
     * @return
     */
    Page<Paper> findByTypeAndTagsIdIn(Integer type, String tagId, Pageable pageable);

    /**
     * 根据研究方向类型分页查找论文
     * @param type     研究方向
     * @param pageable
     * @return
     */
    Page<Paper> findByType(Integer type, Pageable pageable);

    List<Paper> findByType(Integer type);
}
