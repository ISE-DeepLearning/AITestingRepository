package edu.nju.ise.repository.dao;

import edu.nju.ise.repository.model.Tag;
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
public interface TagDao extends MongoRepository<Tag, String> {

    /**
     * 搜索标签是否已存在
     * @param name 名称
     * @param type 研究方向类型
     * @return
     */
    List<Tag> findByTypeAndName(Integer type, String name);

    /**
     * @param type 研究方向类型
     * @return
     */
    List<Tag> findByType(Integer type);
}
