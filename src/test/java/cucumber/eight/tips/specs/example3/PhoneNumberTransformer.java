package cucumber.eight.tips.specs.example3;

import cucumber.api.Transformer;

/**
 * Transform a string from a Gherkin statement to a phone number.
 */
public class PhoneNumberTransformer extends Transformer<PhoneNumber> {

    @Override
    public PhoneNumber transform(String phoneNumberString) {

        return PhoneNumber.parse(phoneNumberString);
    }
}
