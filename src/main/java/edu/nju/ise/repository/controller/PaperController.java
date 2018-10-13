package edu.nju.ise.repository.controller;

import com.alibaba.fastjson.JSON;
import edu.nju.ise.repository.bean.LatexCommand;
import edu.nju.ise.repository.bean.ResponseData;
import edu.nju.ise.repository.bean.ResponsePage;
import edu.nju.ise.repository.model.Paper;
import edu.nju.ise.repository.service.PaperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;
import java.util.List;


/**
 * 类说明：论文Controller
 * 创建者：Zeros
 * 创建时间：2018/8/28 下午8:30
 * 包名：edu.nju.ise.repository.controller
 */

@RestController
@RequestMapping("api/paper")
@CrossOrigin(origins = { "http://etp.kikbug.net:49080/", "null" })
public class PaperController {

    @Autowired
    private PaperService paperService;

//    /**
//     * 提交论文
//     * @param paperCommand
//     * @param request
//     * @return
//     */
//    @PostMapping
//    @RequestMapping("create")
//    public ResponseData createPaper(@RequestBody PaperCommand paperCommand, HttpServletRequest request){
//        Paper paper = new Paper();
//        BeanUtils.copyProperties(paperCommand, paper);
//        List<Author> authorList = new ArrayList<>();
//        for(String name: paperCommand.getAuthors()){
//            Author author = new Author(name);
//            authorList.add(author);
//        }
//        paper.setAuthors(authorList);
//        paper.setSearchTitle(paperCommand.getTitle().toLowerCase());
//        Integer row = paperService.createPaper(paper);
//        return row == 1 ? ResponseData.ok(null) : ResponseData.badRequest("提交论文失败！");
//    }

    /**
     * 提交BibTex格式的论文
     * @param latexCommand
     * @param request
     * @return
     */
    @PostMapping
    @RequestMapping("latexcreate")
    public ResponseData latexCreate(@RequestBody LatexCommand latexCommand, HttpServletRequest request) {
        System.out.println(JSON.toJSONString(latexCommand));
        if(latexCommand == null){
            return ResponseData.badRequest("参数不能为空。");
        }
        Paper paper = latexCommand.parsePaper();
        System.out.println(JSON.toJSONString(paper));
        //判断论文是否存在
        List<Paper> paperList = paperService.isExistTitle(paper.getType(), paper.getSearchTitle());
        if(!CollectionUtils.isEmpty(paperList)){
            return ResponseData.badRequest("论文已存在");
        }
        Integer row = paperService.createPaper(paper);
        return row == 1 ? ResponseData.ok(null) : ResponseData.badRequest("提交论文失败！");
    }


    /**
     * 分页查询页数
     * @param searchType 查询类型 1-paper,2-author
     * @param researchType 研究方向类型
     * @param keywords 关键字
     * @param currentPage 当前页数 从1开始计数
     * @param pageSize 每页数量
     * @return
     */
    @GetMapping
    @RequestMapping("findByKeyword")
    public ResponseData findByKeyword(@RequestParam Integer researchType, @RequestParam Integer searchType, @RequestParam(required = false) String keywords,
                                      @RequestParam Integer currentPage, @RequestParam Integer pageSize){
        //参数判断
        currentPage = currentPage < 1 ? 1 : currentPage;
        pageSize = pageSize < 1 ? 10 : pageSize;
        //查询结果
        ResponsePage<Paper> paperList = paperService.findPageByKeyword(researchType, searchType, keywords, currentPage, pageSize);
        return ResponseData.ok(paperList);
    }

    /**
     * 按标签分页查询页数
     * @param currentPage 当前页数 从1开始计数
     * @param pageSize 每页数量
     * @return
     */
    @GetMapping
    @RequestMapping("findByTag")
    public ResponseData findByTag( @RequestParam Integer researchType, @RequestParam String tagId, @RequestParam Integer currentPage, @RequestParam Integer pageSize){
        //参数判断
        currentPage = currentPage < 1 ? 1 : currentPage;
        pageSize = pageSize < 1 ? 10 : pageSize;
        //查询结果
        ResponsePage<Paper> paperList = paperService.findByTypeAndTag(researchType, tagId, currentPage, pageSize);
        return ResponseData.ok(paperList);
    }


    /**
     * 搜索论文标题是否已存在
     * @param researchType 研究方向类型
     * @param title 标题
     * @return
     */
    @GetMapping
    @RequestMapping("isExistTitle")
    public ResponseData isExistTitle(@RequestParam Integer researchType, @RequestParam String title){
        List<Paper> paperList = paperService.isExistTitle(researchType, title);
        return CollectionUtils.isEmpty(paperList) ? ResponseData.ok(0) : ResponseData.ok(paperList.size());
    }

}
