package cucumber.eight.tips.specs.common;

import cucumber.api.Transformer;

/**
 * Transform an ordinal value to an index
 */
public class OrdinalTransformer extends Transformer<Integer> {

    @Override
    public Integer transform(String ordinalString) {

        return OrdinalPositions.valueOf(ordinalString).getPosition();
    }
}
