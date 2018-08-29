package edu.nju.ise.repository.controller;

import edu.nju.ise.repository.bean.ResponseData;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * 类说明：
 * 创建者：Zeros
 * 创建时间：2018/8/28 下午8:30
 * 包名：edu.nju.ise.repository.controller
 */

@RestController
@RequestMapping("api/paper")
public class PaperController {

    @PostMapping
    @RequestMapping("submit")
    public ResponseData submitPaper(){
        return ResponseData.ok(null);
    }



}
