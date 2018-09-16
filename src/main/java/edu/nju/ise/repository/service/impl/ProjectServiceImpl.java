package edu.nju.ise.repository.service.impl;

import edu.nju.ise.repository.bean.ResponsePage;
import edu.nju.ise.repository.dao.ProjectDao;
import edu.nju.ise.repository.model.Project;
import edu.nju.ise.repository.service.ProjectService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * 类说明：项目Service实现类
 * 创建者：Zeros
 * 创建时间：2018/8/29 下午12:48
 * 包名：edu.nju.ise.repository.service.impl
 */

@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private ProjectDao projectDao;

    @Override
    public Integer createProject(Project Project) {
        Project result =  projectDao.insert(Project);
        return result != null ? 1 : 0;
    }

    /**
     * 分页查询所有项目，按时间倒序排列
     */
    @Override
    public ResponsePage<Project> findPageByKeyword(String keywords, Integer currentPage, Integer pageSize) {
        Sort sort = new Sort(Sort.Direction.ASC, "title");
        PageRequest pageable = PageRequest.of(currentPage - 1, pageSize, sort);
        ResponsePage<Project> responsePage = new ResponsePage<>(currentPage, pageSize);
        if(keywords == null || "".equals(keywords)){
            Page<Project> result = projectDao.findAll(pageable);
            BeanUtils.copyProperties(result, responsePage);
            return responsePage;
        }else{
            //不区分大小写
            Page<Project> result =  projectDao.findBySearchTitleLike(keywords.toLowerCase(), pageable);
            BeanUtils.copyProperties(result, responsePage);
            return responsePage;
        }
    }

    /**
     * 搜索项目标题是否已存在
     */
    @Override
    public List<Project> isExistTitle(String title) {
        title = title.trim();
        return projectDao.findBySearchTitle(title);
    }

}
