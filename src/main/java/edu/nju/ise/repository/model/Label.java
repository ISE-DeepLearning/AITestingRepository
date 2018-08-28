package edu.nju.ise.repository.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Field;

/**
 * 类说明：标签类
 * 创建者：Zeros
 * 创建时间：2018/8/28 下午8:29
 * 包名：edu.nju.ise.repository.model
 */

@Data
public class Label {

    @Id
    private String id;

    //名字
    @Field("label_name")
    private String labelName;
}
