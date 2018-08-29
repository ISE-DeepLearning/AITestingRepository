package edu.nju.ise.repository.service.impl;

import edu.nju.ise.repository.dao.PaperDao;
import edu.nju.ise.repository.model.Paper;
import edu.nju.ise.repository.service.PaperService;
import org.springframework.beans.factory.annotation.Autowired;
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
}
