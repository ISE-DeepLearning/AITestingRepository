package edu.nju.ise.repository.controller;

import edu.nju.ise.repository.bean.LatexCommand;
import edu.nju.ise.repository.bean.PaperCommand;
import edu.nju.ise.repository.bean.ResponseData;
import edu.nju.ise.repository.bean.ResponsePage;
import edu.nju.ise.repository.model.Author;
import edu.nju.ise.repository.model.Paper;
import edu.nju.ise.repository.model.Project;
import edu.nju.ise.repository.service.PaperService;
import edu.nju.ise.repository.service.ProjectService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;


/**
 * 类说明：项目Controller
 * 创建者：Zeros
 * 创建时间：2018/9/8 下午8:30
 * 包名：edu.nju.ise.repository.controller
 */

@RestController
@RequestMapping("api/project")
@CrossOrigin(origins = { "http://etp.kikbug.net:49080/", "null" })
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    /**
     * 提交项目
     * @param project
     * @param request
     * @return
     */
    @PostMapping
    @RequestMapping("create")
    public ResponseData createProject(@RequestBody Project project, HttpServletRequest request){
        project.setSearchTitle(project.getTitle().toLowerCase());

        //判断项目是否存在
        List<Project> projectList = projectService.isExistTitle(project.getSearchTitle());
        if(!CollectionUtils.isEmpty(projectList)){
            return ResponseData.badRequest("项目已存在");
        }
        Integer row = projectService.createProject(project);
        return row == 1 ? ResponseData.ok(null) : ResponseData.badRequest("提交项目失败！");
    }


    /**
     * 分页查询页数
     * @param keywords 关键字
     * @param currentPage 当前页数 从1开始计数
     * @param pageSize 每页数量
     * @return
     */
    @GetMapping
    @RequestMapping("findByKeyword")
    public ResponseData findByKeyword(
            @RequestParam(required = false) String keywords,
            @RequestParam Integer currentPage,
            @RequestParam Integer pageSize){
        //参数判断
        currentPage = currentPage < 1 ? 1 : currentPage;
        pageSize = pageSize < 1 ? 10 : pageSize;
        //查询结果
        ResponsePage<Project> projectList = projectService.findPageByKeyword(keywords, currentPage, pageSize);
        return ResponseData.ok(projectList);
    }


    /**
     * 搜索项目标题是否已存在
     * @param title 标题
     * @return
     */
    @GetMapping
    @RequestMapping("isExistTitle")
    public ResponseData isExistTitle(@RequestParam String title){
        List<Project> projectList = projectService.isExistTitle(title);
        return CollectionUtils.isEmpty(projectList) ? ResponseData.ok(0) : ResponseData.ok(projectList.size());
    }

}
