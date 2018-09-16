package edu.nju.ise.repository.service;

import edu.nju.ise.repository.bean.ResponsePage;
import edu.nju.ise.repository.model.Paper;

import java.util.List;

/**
 * 类说明：论文服务类
 * 创建者：Zeros
 * 创建时间：2018/8/29 下午12:46
 * 包名：edu.nju.ise.repository.service
 */

public interface PaperService {

    /**
     * 提交一篇论文
     * @param paper
     * @return
     */
    Integer createPaper(Paper paper);

    /**
     * 分页查询所有论文，按时间倒序排列
     * @param type 查询类型 1-paper,2-author
     * @param keywords 关键字
     * @param currentPage 当前页数 从1开始计数
     * @param pageSize 每页数量
     * @return
     */
    ResponsePage<Paper> findPageByKeyword(Integer type, String keywords, Integer currentPage, Integer pageSize);

    /**
     * 搜索论文标题是否已存在
     * @param title 标题
     * @return
     */
    List<Paper> isExistTitle(String title);

    /**
     * 按标签搜索论文
     * @param tagId
     * @param currentPage
     * @param pageSize
     * @return
     */
    ResponsePage<Paper> findByTag(String tagId, Integer currentPage, Integer pageSize);
}
