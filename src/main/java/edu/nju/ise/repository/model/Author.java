package edu.nju.ise.repository.model;

import lombok.Data;
import org.springframework.data.annotation.Id;

/**
 * 类说明：作者
 * 创建者：Zeros
 * 创建时间：2018/8/28 下午8:21
 * 包名：edu.nju.ise.repository.model
 */

@Data
public class Author {

    @Id
    private String id;

    //名字
    private String name;

}
