package cucumber.eight.tips.specs.example1.support;

import cucumber.eight.tips.example1.InvalidTapIndexException;
import cucumber.eight.tips.example1.NoKegAtIndexOnTapException;
import cucumber.eight.tips.example1.NoTapsAvailableException;

import java.util.HashMap;
import java.util.Map;

/**
 * Simple utility to map error descriptions (for humans) to Java exception classes.
 */
public class ErrorDescriptionMappings {

    static Map<String, Class<? extends Throwable>> errorDescriptionsToExceptionClass
            = new HashMap<String, Class<? extends Throwable>>();

    // Statically initialize the Mappings...
    static {

        errorDescriptionsToExceptionClass.put("No taps available", NoTapsAvailableException.class);
        errorDescriptionsToExceptionClass.put("No keg at that position", NoKegAtIndexOnTapException.class);
        errorDescriptionsToExceptionClass.put("Invalid position on tap", InvalidTapIndexException.class);
    }

    /**
     * Get the Exception type that matches the supplied Error Description.
     * @param errorDescription Plain description of the error.
     * @return Exception that matches the error description or null.
     */
    public static Class<? extends Throwable> getExceptionFromErrorDescription(String errorDescription){

        return errorDescriptionsToExceptionClass.get(errorDescription);
    }
}
