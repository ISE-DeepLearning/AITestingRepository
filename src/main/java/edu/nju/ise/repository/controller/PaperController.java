package edu.nju.ise.repository.controller;

import edu.nju.ise.repository.bean.ResponseData;
import edu.nju.ise.repository.model.Paper;
import edu.nju.ise.repository.service.PaperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;
import javax.servlet.http.HttpServletRequest;


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
    public ResponseData createPaper(@RequestBody Paper paper, HttpServletRequest request){
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
    public ResponseData findByKeyword(@RequestParam Integer type, String keywords,
                                      @RequestParam Integer currentPage, @RequestParam Integer pageSize){
        Page<Paper> paperList = paperService.findPageByKeyword(type, keywords, currentPage, pageSize);
        return ResponseData.ok(paperList);
    }




}
