package cucumber.eight.tips.specs.example3;

import com.google.common.net.InetAddresses;
import cucumber.api.Transformer;

import java.net.InetAddress;

/**
 * Transforms a string into an IP Address in a Gherkin step
 */
public class IPAddressTransformer extends Transformer<InetAddress> {

    @Override
    public InetAddress transform(String s) {

        // Delegate to Google commons!
        return InetAddresses.forString(s);
    }
}
