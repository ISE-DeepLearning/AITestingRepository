package edu.nju.ise.repository.service;

import edu.nju.ise.repository.model.Tag;

import java.util.List;

/**
 * 类说明：标签服务类
 * 创建者：Zeros
 * 创建时间：2018/8/29 下午12:46
 * 包名：edu.nju.ise.repository.service
 */

public interface TagService {

    /**
     * 创建标签
     * @param name
     * @return
     */
    Integer createTag(String name);

    /**
     * 搜索标签是否已存在
     * @param name 标签名
     * @return
     */
    List<Tag> isExistTag(String name);

    /**
     * 查询所有标签
     * @return
     */
    List<Tag> findAll();
}
