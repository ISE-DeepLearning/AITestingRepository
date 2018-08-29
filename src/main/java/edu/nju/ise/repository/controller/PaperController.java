package edu.nju.ise.repository.controller;

import edu.nju.ise.repository.bean.ResponseData;
import edu.nju.ise.repository.model.Paper;
import edu.nju.ise.repository.service.PaperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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



}
