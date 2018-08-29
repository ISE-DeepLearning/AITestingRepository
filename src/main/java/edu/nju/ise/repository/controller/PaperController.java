package edu.nju.ise.repository.controller;

import edu.nju.ise.repository.bean.PaperCommand;
import edu.nju.ise.repository.bean.ResponseData;
import edu.nju.ise.repository.bean.ResponsePage;
import edu.nju.ise.repository.model.Author;
import edu.nju.ise.repository.model.Paper;
import edu.nju.ise.repository.service.PaperService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.List;


/**
 * 类说明：论文Controller
 * 创建者：Zeros
 * 创建时间：2018/8/28 下午8:30
 * 包名：edu.nju.ise.repository.controller
 */

@RestController
@RequestMapping("api/paper")
public class PaperController {

    @Autowired
    private PaperService paperService;

    /**
     * 提交论文
     * @param paper
     * @param request
     * @return
     */
    @PostMapping
    @RequestMapping("create")
    public ResponseData createPaper(@RequestBody PaperCommand paperCommand, HttpServletRequest request){
        Paper paper = new Paper();
        BeanUtils.copyProperties(paperCommand, paper);
        List<Author> authorList = new ArrayList<>();
        for(String name: paperCommand.getAuthors()){
            Author author = new Author(name);
            authorList.add(author);
        }
        paper.setAuthors(authorList);
        Integer row = paperService.createPaper(paper);
        return row == 1 ? ResponseData.ok(null) : ResponseData.badRequest("提交论文失败！");
    }


    /**
     * 分页查询页数
     * @param type 查询类型 1-paper,2-author
     * @param keywords 关键字
     * @param currentPage 当前页数 从1开始计数
     * @param pageSize 每页数量
     * @return
     */
    @GetMapping
    @RequestMapping("findByKeyword")
    public ResponseData findByKeyword(@RequestParam Integer type, @RequestParam(required = false) String keywords,
                                      @RequestParam Integer currentPage, @RequestParam Integer pageSize){
        //参数判断
        currentPage = currentPage < 1 ? 1 : currentPage;
        pageSize = pageSize < 1 ? 10 : pageSize;
        //查询结果
        ResponsePage<Paper> paperList = paperService.findPageByKeyword(type, keywords, currentPage, pageSize);
        return ResponseData.ok(paperList);
    }




}
