package cucumber.eight.tips.specs.example3;

/**
 * Represents a phone number.
 */
public class PhoneNumber {

    private int areaCode;
    private int prefix;
    private int lineNumber;

    public PhoneNumber(int areaCode, int prefix, int lineNumber) {
        this.areaCode = areaCode;
        this.prefix = prefix;
        this.lineNumber = lineNumber;
    }

    public int getAreaCode() {
        return areaCode;
    }

    public int getPrefix() {
        return prefix;
    }

    public int getLineNumber() {
        return lineNumber;
    }

    public static PhoneNumber parse(String phoneNumberString){

        String[] phoneNumberParts = phoneNumberString.split("-");

        return new PhoneNumber(
             Integer.parseInt(phoneNumberParts[0]),
             Integer.parseInt(phoneNumberParts[1]),
             Integer.parseInt(phoneNumberParts[2])
        );
    }
}
