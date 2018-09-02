package edu.nju.ise.repository.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LatexCommand {

    // latex信息
    private String info;

    // 摘要
    private String paperAbstract;
}
