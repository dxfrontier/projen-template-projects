"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleCode = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
const base_1 = require("../base");
/**
 * SampleCode builder implementing all relevant configuration for the project.
 */
class SampleCode extends base_1.Builder {
    /**
     * Initializes the base SampleCode builder.
     * It calls the `initialize()` method immediately after invoking `super(project)`
     * to ensure that all necessary configuration steps are applied.
     * @param project The project to configure SampleCode for.
     */
    constructor(project) {
        super(project);
        this.initialize();
    }
    /**
     * File path to the sample GitHub action.
     * @return File path to sample code file.
     * @protected
     */
    get filePath() {
        return 'action.yml';
    }
    /**
     * GitHub action template for the SampleCode configuration.
     * @return Content for sample code file.
     * @protected
     */
    get sampleAction() {
        return [
            // eslint-disable-next-line prettier/prettier
            "name: 'My Custom Composite Action'",
            // eslint-disable-next-line prettier/prettier
            "description: 'A sample GitHub composite action created with Projen.'",
            // eslint-disable-next-line prettier/prettier
            "author: 'Your Name or Org'",
            'branding:',
            // eslint-disable-next-line prettier/prettier
            "  icon: 'zap'",
            // eslint-disable-next-line prettier/prettier
            "  color: 'blue'",
            '',
            'inputs:',
            '  example-input:',
            // eslint-disable-next-line prettier/prettier
            "    description: 'An example input parameter for the action.'",
            '    required: false',
            // eslint-disable-next-line prettier/prettier
            "    default: 'default value'",
            '',
            'outputs:',
            '  example-output:',
            // eslint-disable-next-line prettier/prettier
            "    description: 'An example output from the action.'",
            '',
            'runs:',
            // eslint-disable-next-line prettier/prettier
            "  using: 'composite'",
            '  steps:',
            // eslint-disable-next-line prettier/prettier
            "    - name: 'Step 1'",
            // eslint-disable-next-line prettier/prettier
            "      run: echo 'Running Step 1 with input: ${{ inputs.example-input }}'",
            '',
            // eslint-disable-next-line prettier/prettier
            "    - name: 'Step 2'",
            // eslint-disable-next-line prettier/prettier
            "      run: echo 'Running Step 2'",
            '',
            'env:',
            // eslint-disable-next-line prettier/prettier
            "  EXAMPLE_ENV_VAR: 'example-value'",
        ];
    }
    /**
     * @override
     */
    addTemplates() {
        new projen_1.SampleFile(this.project, this.filePath, {
            contents: this.sampleAction.join('\n'),
        });
    }
}
exports.SampleCode = SampleCode;
_a = JSII_RTTI_SYMBOL_1;
SampleCode[_a] = { fqn: "@dxfrontier/projen-template-projects.SampleCode", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FtcGxlY29kZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9naXRodWItYWN0aW9uL3NhbXBsZWNvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBb0M7QUFDcEMsa0NBQXlEO0FBRXpEOztHQUVHO0FBQ0gsTUFBYSxVQUFXLFNBQVEsY0FBTztJQUNyQzs7Ozs7T0FLRztJQUNILFlBQVksT0FBOEI7UUFDeEMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxRQUFRO1FBQ3BCLE9BQU8sWUFBWSxDQUFDO0lBQ3RCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxZQUFZO1FBQ3hCLE9BQU87WUFDTCw2Q0FBNkM7WUFDN0Msb0NBQW9DO1lBQ3BDLDZDQUE2QztZQUM3QyxzRUFBc0U7WUFDdEUsNkNBQTZDO1lBQzdDLDRCQUE0QjtZQUM1QixXQUFXO1lBQ1gsNkNBQTZDO1lBQzdDLGVBQWU7WUFDZiw2Q0FBNkM7WUFDN0MsaUJBQWlCO1lBQ2pCLEVBQUU7WUFDRixTQUFTO1lBQ1Qsa0JBQWtCO1lBQ2xCLDZDQUE2QztZQUM3QywrREFBK0Q7WUFDL0QscUJBQXFCO1lBQ3JCLDZDQUE2QztZQUM3Qyw4QkFBOEI7WUFDOUIsRUFBRTtZQUNGLFVBQVU7WUFDVixtQkFBbUI7WUFDbkIsNkNBQTZDO1lBQzdDLHVEQUF1RDtZQUN2RCxFQUFFO1lBQ0YsT0FBTztZQUNQLDZDQUE2QztZQUM3QyxzQkFBc0I7WUFDdEIsVUFBVTtZQUNWLDZDQUE2QztZQUM3QyxzQkFBc0I7WUFDdEIsNkNBQTZDO1lBQzdDLDBFQUEwRTtZQUMxRSxFQUFFO1lBQ0YsNkNBQTZDO1lBQzdDLHNCQUFzQjtZQUN0Qiw2Q0FBNkM7WUFDN0Msa0NBQWtDO1lBQ2xDLEVBQUU7WUFDRixNQUFNO1lBQ04sNkNBQTZDO1lBQzdDLG9DQUFvQztTQUNyQyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ08sWUFBWTtRQUNwQixJQUFJLG1CQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQzFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDdkMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7QUFoRkgsZ0NBaUZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU2FtcGxlRmlsZSB9IGZyb20gJ3Byb2plbic7XG5pbXBvcnQgeyBCdWlsZGVyLCBUeXBlU2NyaXB0UHJvamVjdEJhc2UgfSBmcm9tICcuLi9iYXNlJztcblxuLyoqXG4gKiBTYW1wbGVDb2RlIGJ1aWxkZXIgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBjb25maWd1cmF0aW9uIGZvciB0aGUgcHJvamVjdC5cbiAqL1xuZXhwb3J0IGNsYXNzIFNhbXBsZUNvZGUgZXh0ZW5kcyBCdWlsZGVyIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBiYXNlIFNhbXBsZUNvZGUgYnVpbGRlci5cbiAgICogSXQgY2FsbHMgdGhlIGBpbml0aWFsaXplKClgIG1ldGhvZCBpbW1lZGlhdGVseSBhZnRlciBpbnZva2luZyBgc3VwZXIocHJvamVjdClgXG4gICAqIHRvIGVuc3VyZSB0aGF0IGFsbCBuZWNlc3NhcnkgY29uZmlndXJhdGlvbiBzdGVwcyBhcmUgYXBwbGllZC5cbiAgICogQHBhcmFtIHByb2plY3QgVGhlIHByb2plY3QgdG8gY29uZmlndXJlIFNhbXBsZUNvZGUgZm9yLlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJvamVjdDogVHlwZVNjcmlwdFByb2plY3RCYXNlKSB7XG4gICAgc3VwZXIocHJvamVjdCk7XG4gICAgdGhpcy5pbml0aWFsaXplKCk7XG4gIH1cblxuICAvKipcbiAgICogRmlsZSBwYXRoIHRvIHRoZSBzYW1wbGUgR2l0SHViIGFjdGlvbi5cbiAgICogQHJldHVybiBGaWxlIHBhdGggdG8gc2FtcGxlIGNvZGUgZmlsZS5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBmaWxlUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiAnYWN0aW9uLnltbCc7XG4gIH1cblxuICAvKipcbiAgICogR2l0SHViIGFjdGlvbiB0ZW1wbGF0ZSBmb3IgdGhlIFNhbXBsZUNvZGUgY29uZmlndXJhdGlvbi5cbiAgICogQHJldHVybiBDb250ZW50IGZvciBzYW1wbGUgY29kZSBmaWxlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHNhbXBsZUFjdGlvbigpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmV0dGllci9wcmV0dGllclxuICAgICAgXCJuYW1lOiAnTXkgQ3VzdG9tIENvbXBvc2l0ZSBBY3Rpb24nXCIsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbiAgICAgIFwiZGVzY3JpcHRpb246ICdBIHNhbXBsZSBHaXRIdWIgY29tcG9zaXRlIGFjdGlvbiBjcmVhdGVkIHdpdGggUHJvamVuLidcIixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmV0dGllci9wcmV0dGllclxuICAgICAgXCJhdXRob3I6ICdZb3VyIE5hbWUgb3IgT3JnJ1wiLFxuICAgICAgJ2JyYW5kaW5nOicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbiAgICAgIFwiICBpY29uOiAnemFwJ1wiLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gICAgICBcIiAgY29sb3I6ICdibHVlJ1wiLFxuICAgICAgJycsXG4gICAgICAnaW5wdXRzOicsXG4gICAgICAnICBleGFtcGxlLWlucHV0OicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbiAgICAgIFwiICAgIGRlc2NyaXB0aW9uOiAnQW4gZXhhbXBsZSBpbnB1dCBwYXJhbWV0ZXIgZm9yIHRoZSBhY3Rpb24uJ1wiLFxuICAgICAgJyAgICByZXF1aXJlZDogZmFsc2UnLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gICAgICBcIiAgICBkZWZhdWx0OiAnZGVmYXVsdCB2YWx1ZSdcIixcbiAgICAgICcnLFxuICAgICAgJ291dHB1dHM6JyxcbiAgICAgICcgIGV4YW1wbGUtb3V0cHV0OicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbiAgICAgIFwiICAgIGRlc2NyaXB0aW9uOiAnQW4gZXhhbXBsZSBvdXRwdXQgZnJvbSB0aGUgYWN0aW9uLidcIixcbiAgICAgICcnLFxuICAgICAgJ3J1bnM6JyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmV0dGllci9wcmV0dGllclxuICAgICAgXCIgIHVzaW5nOiAnY29tcG9zaXRlJ1wiLFxuICAgICAgJyAgc3RlcHM6JyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmV0dGllci9wcmV0dGllclxuICAgICAgXCIgICAgLSBuYW1lOiAnU3RlcCAxJ1wiLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gICAgICBcIiAgICAgIHJ1bjogZWNobyAnUnVubmluZyBTdGVwIDEgd2l0aCBpbnB1dDogJHt7IGlucHV0cy5leGFtcGxlLWlucHV0IH19J1wiLFxuICAgICAgJycsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbiAgICAgIFwiICAgIC0gbmFtZTogJ1N0ZXAgMidcIixcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmV0dGllci9wcmV0dGllclxuICAgICAgXCIgICAgICBydW46IGVjaG8gJ1J1bm5pbmcgU3RlcCAyJ1wiLFxuICAgICAgJycsXG4gICAgICAnZW52OicsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbiAgICAgIFwiICBFWEFNUExFX0VOVl9WQVI6ICdleGFtcGxlLXZhbHVlJ1wiLFxuICAgIF07XG4gIH1cblxuICAvKipcbiAgICogQG92ZXJyaWRlXG4gICAqL1xuICBwcm90ZWN0ZWQgYWRkVGVtcGxhdGVzKCk6IHZvaWQge1xuICAgIG5ldyBTYW1wbGVGaWxlKHRoaXMucHJvamVjdCwgdGhpcy5maWxlUGF0aCwge1xuICAgICAgY29udGVudHM6IHRoaXMuc2FtcGxlQWN0aW9uLmpvaW4oJ1xcbicpLFxuICAgIH0pO1xuICB9XG59XG4iXX0=