package edu.nju.ise.repository.dao;

import edu.nju.ise.repository.model.Project;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * 类说明：项目Dao
 * 创建者：Zeros
 * 创建时间：2018/8/29 下午1:11
 * 包名：edu.nju.ise.repository.dao
 */

@Repository
public interface ProjectDao extends MongoRepository<Project, String> {

    /**
     * 根据标题模糊匹配
     * @param type 研究方向
     * @param searchTitle 标题关键字
     * @param pageable 分页
     * @return
     */
    Page<Project> findByTypeAndSearchTitleLike(Integer type, String searchTitle, Pageable pageable);

    /**
     * 搜索项目标题是否已存在
     * @param searchTitle
     * @return
     */
    List<Project> findByTypeAndSearchTitle(Integer type, String searchTitle);

    /**
     * 根据类型查找所有项目
     * @param type 研究方向
     * @param pageable
     * @return
     */
    Page<Project> findByType(Integer type, Pageable pageable);

}
