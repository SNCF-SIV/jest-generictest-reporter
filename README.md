# jest-generictest-reporter
A Generic test reporter for Jest.

## Installation
```shell
$ npm i -D jest-generictest-reporter
```

## Usage
In your `package.json` file include a `"jest"` config section and specify the `"testResultsProcessor"`:
```json
{
  "jest": {
    "testResultsProcessor": "./node_modules/jest-generaltest-reporter"
  }
}
```


The reporter will generate a `test-results.xml` file in the project root. If you need to specify a different location(e.g., for a CI server) then set the environment variable `TEST_REPORT_PATH` to the desired location.

The generated file will follow the [Test Execution Report Format](https://docs.sonarqube.org/display/SONAR/Generic+Test+Data)

```xml
<unitTest version="1">
  <file path="src/test/java/com/example/MyTestClass.java">
    <testCase name="test1" duration="500"/>
    <testCase name="test2" duration="600"/>
    <testCase name="test3" duration="600">
      <failure message="sort message">long stacktrace</failure>
    </testCase>
    <testCase name="test4" duration="600">
      <error message="sort message">long stacktrace</error>
    </testCase>
    <testCase name="test5" duration="600">
      <skipped message="sort message">long stacktrace</skipped>
    </testCase>
  </file>
</unitTest>
```


## LICENSE
[MIT](LICENSE)
