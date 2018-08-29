package edu.nju.ise.repository.service;

import edu.nju.ise.repository.model.Paper;

/**
 * 类说明：论文服务类
 * 创建者：Zeros
 * 创建时间：2018/8/29 下午12:46
 * 包名：edu.nju.ise.repository.service
 */

public interface PaperService {

    /**
     * 提交一篇论文
     * @param paper
     * @return
     */
    Integer createPaper(Paper paper);
}
