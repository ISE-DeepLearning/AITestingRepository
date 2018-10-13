package edu.nju.ise.repository.util;

/**
 * 实验室研究方向类型
 */
public enum ResearchType {

    AI_TEST(0x01), BLOCK_CHAIN(0x02), COLLECTIVE_INTELLIGENCE(0x03), KNOWLEDGE_GRAPH(0x04), OTHERS(0X05);

    private int id;

    public int getId() {
        return id;
    }

    ResearchType(int id) {
        this.id = id;
    }
}
