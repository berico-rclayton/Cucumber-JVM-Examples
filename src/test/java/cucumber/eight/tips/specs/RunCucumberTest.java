package cucumber.eight.tips.specs;

import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@Cucumber.Options(
        format = { "pretty", "html:target/cucumber", "json:target/cucumber.json" },
        glue = { "cucumber.eight.tips.specs", "cucumber.runtime.java.spring.hooks" })
public class RunCucumberTest {}
