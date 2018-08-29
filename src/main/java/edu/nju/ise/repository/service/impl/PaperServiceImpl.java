package edu.nju.ise.repository.service.impl;

import edu.nju.ise.repository.dao.PaperDao;
import edu.nju.ise.repository.model.Paper;
import edu.nju.ise.repository.service.PaperService;
import edu.nju.ise.repository.util.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

/**
 * 类说明：论文Service实现类
 * 创建者：Zeros
 * 创建时间：2018/8/29 下午12:48
 * 包名：edu.nju.ise.repository.service.impl
 */

@Service
public class PaperServiceImpl implements PaperService {

    @Autowired
    private PaperDao paperDao;

    @Override
    public Integer createPaper(Paper paper) {
        Paper result =  paperDao.insert(paper);
        return result != null ? 1 : 0;
    }

    /**
     * 分页查询所有论文，按时间倒序排列
     */
    @Override
    public Page<Paper> findPageByKeyword(Integer type, String keywords, Integer currentPage, Integer pageSize) {
        PageRequest pageable = buildPageRequest(currentPage, pageSize, null);
        if(keywords == null || "".equals(keywords)){
            return paperDao.findAll(pageable);
        }else if(type.equals(Constants.SEARCH_TYPE_TITLE)){
            return paperDao.findByTitleLike(keywords, pageable);
        }else if(type.equals(Constants.SEARCH_TYPE_AUTHOR)){
            return paperDao.findByAuthorsLike(keywords, pageable);
        }
        return null;
    }


    /**
     *  创建分页请求.
     */
    private PageRequest buildPageRequest(int currentPage, int pageSize, String sortType) {
        Sort sort = null;
        if (sortType == null || "".equals(sortType) || "auto".equals(sortType)) {
            sort = new Sort(Sort.Direction.DESC, "publishTime");
        } else if ("title".equals(sortType)) {
            sort = new Sort(Sort.Direction.ASC, "title");
        }
        //参数1表示当前第几页,参数2表示每页的大小,参数3表示排序
        return PageRequest.of(currentPage - 1, pageSize, sort);
    }
}
