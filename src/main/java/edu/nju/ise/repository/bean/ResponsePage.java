package edu.nju.ise.repository.bean;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

/**
 * 类说明：返回分页类
 * 创建者：Zeros
 * 创建时间：2018/8/29 下午5:55
 * 包名：edu.nju.ise.repository.bean
 */

@Data
@AllArgsConstructor
public class ResponsePage<T> {

    //当前页数
    private Integer currentPage;

    //数量
    private Integer pageSize;

    //总页数
    private int totalPages;

    //总条数
    private long totalElements;

    //列表内容
    private List<T> content;


    public ResponsePage(Integer currentPage, Integer pageSize) {
        this.currentPage = currentPage;
        this.pageSize = pageSize;
    }
}
