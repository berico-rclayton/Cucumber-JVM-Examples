package cucumber.eight.tips.specs.example1.support;

import cucumber.api.Transformer;

/**
 * Transforms friendly error string descriptions into Exception classes.
 */
public class ErrorDescriptionTransform extends Transformer<Class<? extends Throwable>> {

    @Override
    public Class<? extends Throwable> transform(String errorDescription) {

        return ErrorDescriptionMappings.getExceptionFromErrorDescription(errorDescription);
    }
}
