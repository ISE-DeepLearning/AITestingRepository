package edu.nju.ise.repository.service;

import edu.nju.ise.repository.bean.ResponsePage;
import edu.nju.ise.repository.model.Project;

import java.util.List;

/**
 * 类说明：项目服务类
 * 创建者：Zeros
 * 创建时间：2018/8/29 下午12:46
 * 包名：edu.nju.ise.repository.service
 */

public interface ProjectService {

    /**
     * 提交一篇项目
     * @param paper
     * @param project
     * @return
     */
    Integer createProject(Project project);

    /**
     * 分页查询所有项目，按时间倒序排列
     * @param keywords 关键字
     * @param currentPage 当前页数 从1开始计数
     * @param pageSize 每页数量
     * @return
     */
    ResponsePage<Project> findPageByKeyword(String keywords, Integer currentPage, Integer pageSize);

    /**
     * 搜索项目标题是否已存在
     * @param title 标题
     * @return
     */
    List<Project> isExistTitle(String title);
}
