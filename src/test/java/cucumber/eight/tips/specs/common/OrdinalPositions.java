package cucumber.eight.tips.specs.common;

/**
 * Words representing numeric position.
 */
public enum OrdinalPositions {
    first   (0),
    second  (1),
    third   (2),
    fourth  (3),
    fifth   (4),
    sixth   (5),
    seventh (6),
    eighth  (7),
    ninth   (8),
    tenth   (9);

    private final int position;

    private OrdinalPositions(int position) {
        this.position = position;
    }

    public int getPosition() {
        return position;
    }
}
