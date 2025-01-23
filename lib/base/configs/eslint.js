"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EsLintConfigBase = void 0;
const projen_1 = require("projen");
const config_1 = require("../config");
const utils_1 = require("../../utils");
/**
 * Base class for implementing all relevant EsLint configuration.
 *
 * This class acts as a base for handling EsLint configuration within projects.
 */
class EsLintConfigBase extends config_1.Config {
    constructor(project) {
        super(project);
        this.rules = this.standardRules;
        this.ignorePatterns = this.standardIgnorePatterns;
    }
    /**
     * Gets the standard linting rules for the project.
     *
     * @returns A record of rule names and their corresponding configurations.
     */
    get standardRules() {
        return {
            'no-console': 'off',
            'require-atomic-updates': 'off',
            '@typescript-eslint/no-non-null-assertion': 'off',
            '@typescript-eslint/ban-types': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/consistent-type-imports': 'off',
            '@typescript-eslint/no-empty-function': 'off',
            '@typescript-eslint/class-literal-property-style': 'off',
            '@typescript-eslint/no-empty-object-type': 'off',
        };
    }
    /**
     * Gets the standard ignore patterns for the project.
     *
     * @returns An array of file or directory patterns to be ignored by the linter.
     */
    get standardIgnorePatterns() {
        return [];
    }
    get additionalDevDependencies() {
        return [
            '@typescript-eslint/eslint-plugin@^8.20.0',
            '@typescript-eslint/parser@^8.20.0',
            'eslint@^9.18.0',
            'eslint-config-prettier@^10.0.1',
            'eslint-import-resolver-typescript@^3.7.0',
            'eslint-plugin-import@^2.31.0',
            'eslint-plugin-prettier@^5.2.1',
            'typescript-eslint@^8.20.0',
        ];
    }
    get additionalScripts() {
        return {
            eslint: 'eslint .',
        };
    }
    get additionalIgnorePatterns() {
        const filePath = Object.keys(this.configFile)[0];
        return [`/${filePath}`];
    }
    get configFile() {
        return {
            'eslint.config.mjs': [
                "import eslint from '@eslint/js';",
                "import tseslint from 'typescript-eslint';",
                '',
                'export default tseslint.config(',
                '  eslint.configs.recommended,',
                '  ...tseslint.configs.recommended,',
                '  ...tseslint.configs.stylistic,',
                '  {',
                '    rules: {',
                ...Object.entries(this.rules).map(([rule, value]) => `      '${rule}': '${value}',`),
                '    },',
                '  },',
                '  {',
                `    ignores: [${this.ignorePatterns.map((path) => `'${path}'`).join(', ')}],`,
                '  },',
                ');',
            ],
        };
    }
    /**
     * Adds custom linting rules to the project's configuration.
     *
     * @param rules - A record of rule names and their corresponding configurations.
     */
    addRules(rules) {
        this.rules = { ...this.rules, ...rules };
    }
    /**
     * Adds custom ignore patterns to the project's configuration.
     *
     * @param patterns - An array of file or directory patterns to be ignored.
     */
    addIgnorePatterns(patterns) {
        this.ignorePatterns = [...this.ignorePatterns, ...patterns];
    }
    registerConfig() {
        if ((0, utils_1.isValidProject)(this.project)) {
            this.project.npmConfig?.addDevDependencies(this.additionalDevDependencies);
            this.project.npmConfig?.addScripts(this.additionalScripts);
            this.project.prettierConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
        }
    }
    applyConfig() {
        const filePath = Object.keys(this.configFile)[0];
        new projen_1.TextFile(this.project, filePath, {
            lines: this.configFile[filePath],
        });
    }
}
exports.EsLintConfigBase = EsLintConfigBase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXNsaW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Jhc2UvY29uZmlncy9lc2xpbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQWtDO0FBQ2xDLHNDQUFtQztBQUVuQyx1Q0FBNkM7QUFFN0M7Ozs7R0FJRztBQUNILE1BQWEsZ0JBQWlCLFNBQVEsZUFBTTtJQUkxQyxZQUFZLE9BQXFCO1FBQy9CLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUVmLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUNoQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQztJQUNwRCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsYUFBYTtRQUN6QixPQUFPO1lBQ0wsWUFBWSxFQUFFLEtBQUs7WUFDbkIsd0JBQXdCLEVBQUUsS0FBSztZQUMvQiwwQ0FBMEMsRUFBRSxLQUFLO1lBQ2pELDhCQUE4QixFQUFFLEtBQUs7WUFDckMsa0RBQWtELEVBQUUsS0FBSztZQUN6RCw0Q0FBNEMsRUFBRSxLQUFLO1lBQ25ELHNDQUFzQyxFQUFFLEtBQUs7WUFDN0MsaURBQWlELEVBQUUsS0FBSztZQUN4RCx5Q0FBeUMsRUFBRSxLQUFLO1NBQ2pELENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsc0JBQXNCO1FBQ2xDLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVELElBQXVCLHlCQUF5QjtRQUM5QyxPQUFPO1lBQ0wsMENBQTBDO1lBQzFDLG1DQUFtQztZQUNuQyxnQkFBZ0I7WUFDaEIsZ0NBQWdDO1lBQ2hDLDBDQUEwQztZQUMxQyw4QkFBOEI7WUFDOUIsK0JBQStCO1lBQy9CLDJCQUEyQjtTQUM1QixDQUFDO0lBQ0osQ0FBQztJQUVELElBQXVCLGlCQUFpQjtRQUN0QyxPQUFPO1lBQ0wsTUFBTSxFQUFFLFVBQVU7U0FDbkIsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUF1Qix3QkFBd0I7UUFDN0MsTUFBTSxRQUFRLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsT0FBTyxDQUFDLElBQUksUUFBUSxFQUFFLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsSUFBdUIsVUFBVTtRQUMvQixPQUFPO1lBQ0wsbUJBQW1CLEVBQUU7Z0JBQ25CLGtDQUFrQztnQkFDbEMsMkNBQTJDO2dCQUMzQyxFQUFFO2dCQUNGLGlDQUFpQztnQkFDakMsK0JBQStCO2dCQUMvQixvQ0FBb0M7Z0JBQ3BDLGtDQUFrQztnQkFDbEMsS0FBSztnQkFDTCxjQUFjO2dCQUNkLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFtQixFQUFVLEVBQUUsQ0FBQyxVQUFVLElBQUksT0FBTyxLQUFLLElBQUksQ0FBQztnQkFDOUcsUUFBUTtnQkFDUixNQUFNO2dCQUNOLEtBQUs7Z0JBQ0wsaUJBQWlCLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBWSxFQUFVLEVBQUUsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO2dCQUM5RixNQUFNO2dCQUNOLElBQUk7YUFDTDtTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLFFBQVEsQ0FBQyxLQUE2QjtRQUMzQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsS0FBSyxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxpQkFBaUIsQ0FBQyxRQUFrQjtRQUN6QyxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLEdBQUcsUUFBUSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVlLGNBQWM7UUFDNUIsSUFBSSxJQUFBLHNCQUFjLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLE9BQXdCLENBQUMsU0FBUyxFQUFFLGtCQUFrQixDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQzVGLElBQUksQ0FBQyxPQUF3QixDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDNUUsSUFBSSxDQUFDLE9BQXdCLENBQUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2xHLENBQUM7SUFDSCxDQUFDO0lBRWUsV0FBVztRQUN6QixNQUFNLFFBQVEsR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLGlCQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUU7WUFDbkMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ2pDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQXRIRCw0Q0FzSEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0RmlsZSB9IGZyb20gJ3Byb2plbic7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgUHJvamVjdFR5cGVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvcHJvamVjdCc7XG5pbXBvcnQgeyBpc1ZhbGlkUHJvamVjdCB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IEVzTGludCBjb25maWd1cmF0aW9uLlxuICpcbiAqIFRoaXMgY2xhc3MgYWN0cyBhcyBhIGJhc2UgZm9yIGhhbmRsaW5nIEVzTGludCBjb25maWd1cmF0aW9uIHdpdGhpbiBwcm9qZWN0cy5cbiAqL1xuZXhwb3J0IGNsYXNzIEVzTGludENvbmZpZ0Jhc2UgZXh0ZW5kcyBDb25maWcge1xuICBwcm90ZWN0ZWQgcnVsZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG4gIHByb3RlY3RlZCBpZ25vcmVQYXR0ZXJuczogc3RyaW5nW107XG5cbiAgY29uc3RydWN0b3IocHJvamVjdDogUHJvamVjdFR5cGVzKSB7XG4gICAgc3VwZXIocHJvamVjdCk7XG5cbiAgICB0aGlzLnJ1bGVzID0gdGhpcy5zdGFuZGFyZFJ1bGVzO1xuICAgIHRoaXMuaWdub3JlUGF0dGVybnMgPSB0aGlzLnN0YW5kYXJkSWdub3JlUGF0dGVybnM7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgc3RhbmRhcmQgbGludGluZyBydWxlcyBmb3IgdGhlIHByb2plY3QuXG4gICAqXG4gICAqIEByZXR1cm5zIEEgcmVjb3JkIG9mIHJ1bGUgbmFtZXMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgY29uZmlndXJhdGlvbnMuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHN0YW5kYXJkUnVsZXMoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICduby1jb25zb2xlJzogJ29mZicsXG4gICAgICAncmVxdWlyZS1hdG9taWMtdXBkYXRlcyc6ICdvZmYnLFxuICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9uby1ub24tbnVsbC1hc3NlcnRpb24nOiAnb2ZmJyxcbiAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzJzogJ29mZicsXG4gICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LWZ1bmN0aW9uLXJldHVybi10eXBlJzogJ29mZicsXG4gICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L2NvbnNpc3RlbnQtdHlwZS1pbXBvcnRzJzogJ29mZicsXG4gICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uJzogJ29mZicsXG4gICAgICAnQHR5cGVzY3JpcHQtZXNsaW50L2NsYXNzLWxpdGVyYWwtcHJvcGVydHktc3R5bGUnOiAnb2ZmJyxcbiAgICAgICdAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktb2JqZWN0LXR5cGUnOiAnb2ZmJyxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHN0YW5kYXJkIGlnbm9yZSBwYXR0ZXJucyBmb3IgdGhlIHByb2plY3QuXG4gICAqXG4gICAqIEByZXR1cm5zIEFuIGFycmF5IG9mIGZpbGUgb3IgZGlyZWN0b3J5IHBhdHRlcm5zIHRvIGJlIGlnbm9yZWQgYnkgdGhlIGxpbnRlci5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc3RhbmRhcmRJZ25vcmVQYXR0ZXJucygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsRGV2RGVwZW5kZW5jaWVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9lc2xpbnQtcGx1Z2luQF44LjIwLjAnLFxuICAgICAgJ0B0eXBlc2NyaXB0LWVzbGludC9wYXJzZXJAXjguMjAuMCcsXG4gICAgICAnZXNsaW50QF45LjE4LjAnLFxuICAgICAgJ2VzbGludC1jb25maWctcHJldHRpZXJAXjEwLjAuMScsXG4gICAgICAnZXNsaW50LWltcG9ydC1yZXNvbHZlci10eXBlc2NyaXB0QF4zLjcuMCcsXG4gICAgICAnZXNsaW50LXBsdWdpbi1pbXBvcnRAXjIuMzEuMCcsXG4gICAgICAnZXNsaW50LXBsdWdpbi1wcmV0dGllckBeNS4yLjEnLFxuICAgICAgJ3R5cGVzY3JpcHQtZXNsaW50QF44LjIwLjAnLFxuICAgIF07XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxTY3JpcHRzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICAgIHJldHVybiB7XG4gICAgICBlc2xpbnQ6ICdlc2xpbnQgLicsXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5jb25maWdGaWxlKVswXTtcbiAgICByZXR1cm4gW2AvJHtmaWxlUGF0aH1gXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgY29uZmlnRmlsZSgpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAnZXNsaW50LmNvbmZpZy5tanMnOiBbXG4gICAgICAgIFwiaW1wb3J0IGVzbGludCBmcm9tICdAZXNsaW50L2pzJztcIixcbiAgICAgICAgXCJpbXBvcnQgdHNlc2xpbnQgZnJvbSAndHlwZXNjcmlwdC1lc2xpbnQnO1wiLFxuICAgICAgICAnJyxcbiAgICAgICAgJ2V4cG9ydCBkZWZhdWx0IHRzZXNsaW50LmNvbmZpZygnLFxuICAgICAgICAnICBlc2xpbnQuY29uZmlncy5yZWNvbW1lbmRlZCwnLFxuICAgICAgICAnICAuLi50c2VzbGludC5jb25maWdzLnJlY29tbWVuZGVkLCcsXG4gICAgICAgICcgIC4uLnRzZXNsaW50LmNvbmZpZ3Muc3R5bGlzdGljLCcsXG4gICAgICAgICcgIHsnLFxuICAgICAgICAnICAgIHJ1bGVzOiB7JyxcbiAgICAgICAgLi4uT2JqZWN0LmVudHJpZXModGhpcy5ydWxlcykubWFwKChbcnVsZSwgdmFsdWVdOiBbc3RyaW5nLCBzdHJpbmddKTogc3RyaW5nID0+IGAgICAgICAnJHtydWxlfSc6ICcke3ZhbHVlfScsYCksXG4gICAgICAgICcgICAgfSwnLFxuICAgICAgICAnICB9LCcsXG4gICAgICAgICcgIHsnLFxuICAgICAgICBgICAgIGlnbm9yZXM6IFske3RoaXMuaWdub3JlUGF0dGVybnMubWFwKChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4gYCcke3BhdGh9J2ApLmpvaW4oJywgJyl9XSxgLFxuICAgICAgICAnICB9LCcsXG4gICAgICAgICcpOycsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBjdXN0b20gbGludGluZyBydWxlcyB0byB0aGUgcHJvamVjdCdzIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSBydWxlcyAtIEEgcmVjb3JkIG9mIHJ1bGUgbmFtZXMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgY29uZmlndXJhdGlvbnMuXG4gICAqL1xuICBwdWJsaWMgYWRkUnVsZXMocnVsZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pOiB2b2lkIHtcbiAgICB0aGlzLnJ1bGVzID0geyAuLi50aGlzLnJ1bGVzLCAuLi5ydWxlcyB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgY3VzdG9tIGlnbm9yZSBwYXR0ZXJucyB0byB0aGUgcHJvamVjdCdzIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSBwYXR0ZXJucyAtIEFuIGFycmF5IG9mIGZpbGUgb3IgZGlyZWN0b3J5IHBhdHRlcm5zIHRvIGJlIGlnbm9yZWQuXG4gICAqL1xuICBwdWJsaWMgYWRkSWdub3JlUGF0dGVybnMocGF0dGVybnM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgdGhpcy5pZ25vcmVQYXR0ZXJucyA9IFsuLi50aGlzLmlnbm9yZVBhdHRlcm5zLCAuLi5wYXR0ZXJuc107XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgcmVnaXN0ZXJDb25maWcoKTogdm9pZCB7XG4gICAgaWYgKGlzVmFsaWRQcm9qZWN0KHRoaXMucHJvamVjdCkpIHtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5ucG1Db25maWc/LmFkZERldkRlcGVuZGVuY2llcyh0aGlzLmFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMpO1xuICAgICAgKHRoaXMucHJvamVjdCBhcyBQcm9qZWN0VHlwZXMpLm5wbUNvbmZpZz8uYWRkU2NyaXB0cyh0aGlzLmFkZGl0aW9uYWxTY3JpcHRzKTtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5wcmV0dGllckNvbmZpZz8uYWRkSWdub3JlUGF0dGVybnModGhpcy5hZGRpdGlvbmFsSWdub3JlUGF0dGVybnMpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBhcHBseUNvbmZpZygpOiB2b2lkIHtcbiAgICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5jb25maWdGaWxlKVswXTtcbiAgICBuZXcgVGV4dEZpbGUodGhpcy5wcm9qZWN0LCBmaWxlUGF0aCwge1xuICAgICAgbGluZXM6IHRoaXMuY29uZmlnRmlsZVtmaWxlUGF0aF0sXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==