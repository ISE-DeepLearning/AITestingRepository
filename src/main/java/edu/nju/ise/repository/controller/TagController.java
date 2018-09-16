package edu.nju.ise.repository.controller;

import edu.nju.ise.repository.bean.ResponseData;
import edu.nju.ise.repository.model.Tag;
import edu.nju.ise.repository.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * 类说明：tag管理Controller
 * 创建者：Zeros
 * 创建时间：2018/9/16 下午3:51
 * 包名：edu.nju.ise.repository.controller
 */

@RestController
@RequestMapping("api/tag")
@CrossOrigin(origins = { "http://etp.kikbug.net:49080/", "null" })
public class TagController {

    @Autowired
    private TagService tagService;


    /**
     * 提交标签
     * @param name
     * @param request
     * @return
     */
    @PostMapping
    @RequestMapping("create")
    public ResponseData createTag(@RequestParam String name, HttpServletRequest request){
        //判断标签是否存在
        List<Tag> tagList = tagService.isExistTag(name);
        if(!CollectionUtils.isEmpty(tagList)){
            return ResponseData.badRequest("标签已存在");
        }
        Integer row = tagService.createTag(name);
        return row == 1 ? ResponseData.ok(null) : ResponseData.badRequest("创建标签失败！");
    }


    /**
     * 查询所有tag
     */
    @GetMapping
    @RequestMapping("findAll")
    public ResponseData findAll(){
        List<Tag> tagList = tagService.findAll();
        return ResponseData.ok(tagList);
    }

}
