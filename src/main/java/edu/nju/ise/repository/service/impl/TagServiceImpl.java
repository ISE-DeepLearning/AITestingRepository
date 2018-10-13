package edu.nju.ise.repository.service.impl;

import edu.nju.ise.repository.dao.TagDao;
import edu.nju.ise.repository.model.Tag;
import edu.nju.ise.repository.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 类说明：项目Service实现类
 * 创建者：Zeros
 * 创建时间：2018/8/29 下午12:48
 * 包名：edu.nju.ise.repository.service.impl
 */

@Service
public class TagServiceImpl implements TagService {

    @Autowired
    private TagDao tagDao;

    /**
     * 创建标签
     *
     * @param type
     * @param name
     * @return
     */
    @Override
    public Integer createTag(Integer type, String name) {
        Tag tag = new Tag();
        tag.setName(name);
        tag.setType(type);
        return tagDao.insert(tag) != null ? 1 : 0;
    }

    /**
     * 搜索标签是否已存在
     *
     * @param type
     * @param name 标签名
     * @return
     */
    @Override
    public List<Tag> isExistTag(Integer type, String name) {
        name = name.trim();
        return tagDao.findByTypeAndName(type, name);
    }

    /**
     * 查询所有标签
     * @return
     */
    @Override
    public List<Tag> findAll() {
        return tagDao.findAll();
    }

    /**
     * 按类型查询
     * @param type
     * @return
     */
    @Override
    public List<Tag> findByType(Integer type) {
        return tagDao.findByType(type);
    }


}
