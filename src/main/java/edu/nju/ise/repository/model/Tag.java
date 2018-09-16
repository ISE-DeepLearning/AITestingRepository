package edu.nju.ise.repository.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * 类说明：标签类
 * 创建者：Zeros
 * 创建时间：2018/8/28 下午8:29
 * 包名：edu.nju.ise.repository.model
 */

@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "tag_data")
public class Tag {

    @Id
    private String id;

    //名字
    private String name;
}
