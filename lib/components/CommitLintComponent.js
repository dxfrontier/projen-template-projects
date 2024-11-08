"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitLintComponent = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const projen_1 = require("projen");
/**
 * Configures the CommitLint templates, settings and npm scripts for the project.
 */
class CommitLintComponent {
    /**
     * Initializes the CommitLint component.
     * @param project The project to configure CommitLint for.
     */
    constructor(project) {
        this.project = project;
    }
    /**
     * Getter retrieving the file path for the CommitLint configuration.
     */
    get filePath() {
        return '.commitlintrc.ts';
    }
    /**
     * Getter retrieving the template file for the CommitLint configuration.
     */
    get template() {
        return [
            '// Generated by projen.To modify, edit.projenrc.ts and run "npx projen".',
            '',
            // eslint-disable-next-line prettier/prettier
            'import type { UserConfig } from \'@commitlint/types\';',
            // eslint-disable-next-line prettier/prettier
            'import { RuleConfigSeverity } from \'@commitlint/types\';',
            '',
            'const Configuration: UserConfig = {',
            // eslint-disable-next-line prettier/prettier
            '  extends: [\'@commitlint/config-conventional\'],',
            '  rules: {',
            // eslint-disable-next-line prettier/prettier
            '    \'type-enum\': [',
            '      RuleConfigSeverity.Error,',
            // eslint-disable-next-line prettier/prettier
            '      \'always\',',
            // eslint-disable-next-line prettier/prettier
            '      [\'build\', \'chore\', \'ci\', \'docs\', \'feat\', \'fix\', \'perf\', \'refactor\', \'revert\', \'style\', \'test\', \'delete\'],',
            '    ],',
            // eslint-disable-next-line prettier/prettier
            '    \'scope-empty\': [RuleConfigSeverity.Error, \'never\'],',
            // eslint-disable-next-line prettier/prettier
            '    \'subject-empty\': [RuleConfigSeverity.Error, \'never\'],',
            '  },',
            // eslint-disable-next-line prettier/prettier
            '  helpUrl: \'https://github.com/conventional-changelog/commitlint/#what-is-commitlint\',',
            '};',
            '',
            'export default Configuration;',
        ];
    }
    /**
     * Getter retrieving the npm scripts for the CommitLint component.
     */
    get scripts() {
        return {
            commit: 'commit',
        };
    }
    /**
     * Getter retrieving the relevant npm packages to be installed as devDependencies for the CommitLint component.
     */
    get devDependencies() {
        return [
            '@commitlint/cli',
            '@commitlint/config-conventional',
            '@commitlint/prompt-cli',
            '@commitlint/types',
            'lint-staged',
        ];
    }
    /**
     * Getter retrieving the settings to be added to package.json for the CommitLint component.
     */
    get npmSettings() {
        return {
            '**/*.{yml,yaml}': ['npm run format:message', 'npm run format:fix'],
        };
    }
    /**
     * Creates the template file for the CommitLint configuration.
     */
    createConfiguration() {
        new projen_1.TextFile(this.project, this.filePath, {
            lines: this.template,
        });
    }
    /**
     * Creates npm package settings specific to CommitLint setup within the project configuration.
     */
    createSettings() {
        this.project.addFields({
            'lint-staged': this.npmSettings,
        });
    }
    /**
     * Adds template files and settings to the CommitLint component.
     */
    add() {
        this.createConfiguration();
        this.createSettings();
    }
    /**
     * Adds npm scripts specific to CommitLint setup within the project configuration.
     */
    addScripts() {
        for (const [name, command] of Object.entries(this.scripts)) {
            this.project.addTask(name, { exec: command });
        }
    }
    /**
     * Adds npm devDependencies specific to CommitLint setup within the project configuration.
     */
    addDevDependencies() {
        this.project.addDevDeps(...this.devDependencies);
    }
    /**
     * Configures the `.gitattributes` file to treat CommitLint component related files as generated code, optimizing diffs.
     */
    updateGitAttributes() {
        this.project.gitattributes.addAttributes(`/${this.filePath}`, 'linguist-generated');
    }
    /**
     * Executes setup for the CommitLint component.
     */
    setup() {
        this.add();
        this.addScripts();
        this.addDevDependencies();
        this.updateGitAttributes();
    }
}
exports.CommitLintComponent = CommitLintComponent;
_a = JSII_RTTI_SYMBOL_1;
CommitLintComponent[_a] = { fqn: "projen-template-github-action.CommitLintComponent", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbWl0TGludENvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0NvbW1pdExpbnRDb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtQ0FBa0M7QUFJbEM7O0dBRUc7QUFDSCxNQUFhLG1CQUFtQjtJQUc5Qjs7O09BR0c7SUFDSCxZQUFZLE9BQTBCO1FBQ3BDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQVksUUFBUTtRQUNsQixPQUFPLGtCQUFrQixDQUFDO0lBQzVCLENBQUM7SUFFRDs7T0FFRztJQUNILElBQVksUUFBUTtRQUNsQixPQUFPO1lBQ0wsMEVBQTBFO1lBQzFFLEVBQUU7WUFDRiw2Q0FBNkM7WUFDN0Msd0RBQXdEO1lBQ3hELDZDQUE2QztZQUM3QywyREFBMkQ7WUFDM0QsRUFBRTtZQUNGLHFDQUFxQztZQUNyQyw2Q0FBNkM7WUFDN0MsbURBQW1EO1lBQ25ELFlBQVk7WUFDWiw2Q0FBNkM7WUFDN0Msc0JBQXNCO1lBQ3RCLGlDQUFpQztZQUNqQyw2Q0FBNkM7WUFDN0MsbUJBQW1CO1lBQ25CLDZDQUE2QztZQUM3Qyx5SUFBeUk7WUFDekksUUFBUTtZQUNSLDZDQUE2QztZQUM3Qyw2REFBNkQ7WUFDN0QsNkNBQTZDO1lBQzdDLCtEQUErRDtZQUMvRCxNQUFNO1lBQ04sNkNBQTZDO1lBQzdDLDBGQUEwRjtZQUMxRixJQUFJO1lBQ0osRUFBRTtZQUNGLCtCQUErQjtTQUNoQyxDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBWSxPQUFPO1FBQ2pCLE9BQU87WUFDTCxNQUFNLEVBQUUsUUFBUTtTQUNqQixDQUFDO0lBQ0osQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBWSxlQUFlO1FBQ3pCLE9BQU87WUFDTCxpQkFBaUI7WUFDakIsaUNBQWlDO1lBQ2pDLHdCQUF3QjtZQUN4QixtQkFBbUI7WUFDbkIsYUFBYTtTQUNkLENBQUM7SUFDSixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFZLFdBQVc7UUFDckIsT0FBTztZQUNMLGlCQUFpQixFQUFFLENBQUMsd0JBQXdCLEVBQUUsb0JBQW9CLENBQUM7U0FDcEUsQ0FBQztJQUNKLENBQUM7SUFFRDs7T0FFRztJQUNLLG1CQUFtQjtRQUN6QixJQUFJLGlCQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3hDLEtBQUssRUFBRSxJQUFJLENBQUMsUUFBUTtTQUNyQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSyxjQUFjO1FBQ3BCLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQ3JCLGFBQWEsRUFBRSxJQUFJLENBQUMsV0FBVztTQUNoQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxHQUFHO1FBQ1IsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7T0FFRztJQUNJLFVBQVU7UUFDZixLQUFLLE1BQU0sQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUMzRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztRQUNoRCxDQUFDO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0ksa0JBQWtCO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRDs7T0FFRztJQUNJLG1CQUFtQjtRQUN4QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsb0JBQW9CLENBQUMsQ0FBQztJQUN0RixDQUFDO0lBRUQ7O09BRUc7SUFDSSxLQUFLO1FBQ1YsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1gsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO1FBQzFCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7O0FBL0lILGtEQWdKQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRleHRGaWxlIH0gZnJvbSAncHJvamVuJztcbmltcG9ydCB7IFR5cGVTY3JpcHRQcm9qZWN0IH0gZnJvbSAncHJvamVuL2xpYi90eXBlc2NyaXB0JztcbmltcG9ydCB7IElQcm9qZWN0Q29tcG9uZW50LCBMaW50U3RhZ2VkQ29uZmlnLCBTY3JpcHRzIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vKipcbiAqIENvbmZpZ3VyZXMgdGhlIENvbW1pdExpbnQgdGVtcGxhdGVzLCBzZXR0aW5ncyBhbmQgbnBtIHNjcmlwdHMgZm9yIHRoZSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgQ29tbWl0TGludENvbXBvbmVudCBpbXBsZW1lbnRzIElQcm9qZWN0Q29tcG9uZW50IHtcbiAgcHJpdmF0ZSBwcm9qZWN0OiBUeXBlU2NyaXB0UHJvamVjdDtcblxuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIENvbW1pdExpbnQgY29tcG9uZW50LlxuICAgKiBAcGFyYW0gcHJvamVjdCBUaGUgcHJvamVjdCB0byBjb25maWd1cmUgQ29tbWl0TGludCBmb3IuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBUeXBlU2NyaXB0UHJvamVjdCkge1xuICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gIH1cblxuICAvKipcbiAgICogR2V0dGVyIHJldHJpZXZpbmcgdGhlIGZpbGUgcGF0aCBmb3IgdGhlIENvbW1pdExpbnQgY29uZmlndXJhdGlvbi5cbiAgICovXG4gIHByaXZhdGUgZ2V0IGZpbGVQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuICcuY29tbWl0bGludHJjLnRzJztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgcmV0cmlldmluZyB0aGUgdGVtcGxhdGUgZmlsZSBmb3IgdGhlIENvbW1pdExpbnQgY29uZmlndXJhdGlvbi5cbiAgICovXG4gIHByaXZhdGUgZ2V0IHRlbXBsYXRlKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW1xuICAgICAgJy8vIEdlbmVyYXRlZCBieSBwcm9qZW4uVG8gbW9kaWZ5LCBlZGl0LnByb2plbnJjLnRzIGFuZCBydW4gXCJucHggcHJvamVuXCIuJyxcbiAgICAgICcnLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gICAgICAnaW1wb3J0IHR5cGUgeyBVc2VyQ29uZmlnIH0gZnJvbSBcXCdAY29tbWl0bGludC90eXBlc1xcJzsnLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gICAgICAnaW1wb3J0IHsgUnVsZUNvbmZpZ1NldmVyaXR5IH0gZnJvbSBcXCdAY29tbWl0bGludC90eXBlc1xcJzsnLFxuICAgICAgJycsXG4gICAgICAnY29uc3QgQ29uZmlndXJhdGlvbjogVXNlckNvbmZpZyA9IHsnLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gICAgICAnICBleHRlbmRzOiBbXFwnQGNvbW1pdGxpbnQvY29uZmlnLWNvbnZlbnRpb25hbFxcJ10sJyxcbiAgICAgICcgIHJ1bGVzOiB7JyxcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmV0dGllci9wcmV0dGllclxuICAgICAgJyAgICBcXCd0eXBlLWVudW1cXCc6IFsnLFxuICAgICAgJyAgICAgIFJ1bGVDb25maWdTZXZlcml0eS5FcnJvciwnLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gICAgICAnICAgICAgXFwnYWx3YXlzXFwnLCcsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbiAgICAgICcgICAgICBbXFwnYnVpbGRcXCcsIFxcJ2Nob3JlXFwnLCBcXCdjaVxcJywgXFwnZG9jc1xcJywgXFwnZmVhdFxcJywgXFwnZml4XFwnLCBcXCdwZXJmXFwnLCBcXCdyZWZhY3RvclxcJywgXFwncmV2ZXJ0XFwnLCBcXCdzdHlsZVxcJywgXFwndGVzdFxcJywgXFwnZGVsZXRlXFwnXSwnLFxuICAgICAgJyAgICBdLCcsXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJldHRpZXIvcHJldHRpZXJcbiAgICAgICcgICAgXFwnc2NvcGUtZW1wdHlcXCc6IFtSdWxlQ29uZmlnU2V2ZXJpdHkuRXJyb3IsIFxcJ25ldmVyXFwnXSwnLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gICAgICAnICAgIFxcJ3N1YmplY3QtZW1wdHlcXCc6IFtSdWxlQ29uZmlnU2V2ZXJpdHkuRXJyb3IsIFxcJ25ldmVyXFwnXSwnLFxuICAgICAgJyAgfSwnLFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZXR0aWVyL3ByZXR0aWVyXG4gICAgICAnICBoZWxwVXJsOiBcXCdodHRwczovL2dpdGh1Yi5jb20vY29udmVudGlvbmFsLWNoYW5nZWxvZy9jb21taXRsaW50LyN3aGF0LWlzLWNvbW1pdGxpbnRcXCcsJyxcbiAgICAgICd9OycsXG4gICAgICAnJyxcbiAgICAgICdleHBvcnQgZGVmYXVsdCBDb25maWd1cmF0aW9uOycsXG4gICAgXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgcmV0cmlldmluZyB0aGUgbnBtIHNjcmlwdHMgZm9yIHRoZSBDb21taXRMaW50IGNvbXBvbmVudC5cbiAgICovXG4gIHByaXZhdGUgZ2V0IHNjcmlwdHMoKTogU2NyaXB0cyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbW1pdDogJ2NvbW1pdCcsXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgcmV0cmlldmluZyB0aGUgcmVsZXZhbnQgbnBtIHBhY2thZ2VzIHRvIGJlIGluc3RhbGxlZCBhcyBkZXZEZXBlbmRlbmNpZXMgZm9yIHRoZSBDb21taXRMaW50IGNvbXBvbmVudC5cbiAgICovXG4gIHByaXZhdGUgZ2V0IGRldkRlcGVuZGVuY2llcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdAY29tbWl0bGludC9jbGknLFxuICAgICAgJ0Bjb21taXRsaW50L2NvbmZpZy1jb252ZW50aW9uYWwnLFxuICAgICAgJ0Bjb21taXRsaW50L3Byb21wdC1jbGknLFxuICAgICAgJ0Bjb21taXRsaW50L3R5cGVzJyxcbiAgICAgICdsaW50LXN0YWdlZCcsXG4gICAgXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgcmV0cmlldmluZyB0aGUgc2V0dGluZ3MgdG8gYmUgYWRkZWQgdG8gcGFja2FnZS5qc29uIGZvciB0aGUgQ29tbWl0TGludCBjb21wb25lbnQuXG4gICAqL1xuICBwcml2YXRlIGdldCBucG1TZXR0aW5ncygpOiBMaW50U3RhZ2VkQ29uZmlnIHtcbiAgICByZXR1cm4ge1xuICAgICAgJyoqLyoue3ltbCx5YW1sfSc6IFsnbnBtIHJ1biBmb3JtYXQ6bWVzc2FnZScsICducG0gcnVuIGZvcm1hdDpmaXgnXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgdGhlIHRlbXBsYXRlIGZpbGUgZm9yIHRoZSBDb21taXRMaW50IGNvbmZpZ3VyYXRpb24uXG4gICAqL1xuICBwcml2YXRlIGNyZWF0ZUNvbmZpZ3VyYXRpb24oKTogdm9pZCB7XG4gICAgbmV3IFRleHRGaWxlKHRoaXMucHJvamVjdCwgdGhpcy5maWxlUGF0aCwge1xuICAgICAgbGluZXM6IHRoaXMudGVtcGxhdGUsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBucG0gcGFja2FnZSBzZXR0aW5ncyBzcGVjaWZpYyB0byBDb21taXRMaW50IHNldHVwIHdpdGhpbiB0aGUgcHJvamVjdCBjb25maWd1cmF0aW9uLlxuICAgKi9cbiAgcHJpdmF0ZSBjcmVhdGVTZXR0aW5ncygpOiB2b2lkIHtcbiAgICB0aGlzLnByb2plY3QuYWRkRmllbGRzKHtcbiAgICAgICdsaW50LXN0YWdlZCc6IHRoaXMubnBtU2V0dGluZ3MsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0ZW1wbGF0ZSBmaWxlcyBhbmQgc2V0dGluZ3MgdG8gdGhlIENvbW1pdExpbnQgY29tcG9uZW50LlxuICAgKi9cbiAgcHVibGljIGFkZCgpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWF0ZUNvbmZpZ3VyYXRpb24oKTtcbiAgICB0aGlzLmNyZWF0ZVNldHRpbmdzKCk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBucG0gc2NyaXB0cyBzcGVjaWZpYyB0byBDb21taXRMaW50IHNldHVwIHdpdGhpbiB0aGUgcHJvamVjdCBjb25maWd1cmF0aW9uLlxuICAgKi9cbiAgcHVibGljIGFkZFNjcmlwdHMoKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBbbmFtZSwgY29tbWFuZF0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5zY3JpcHRzKSkge1xuICAgICAgdGhpcy5wcm9qZWN0LmFkZFRhc2sobmFtZSwgeyBleGVjOiBjb21tYW5kIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIG5wbSBkZXZEZXBlbmRlbmNpZXMgc3BlY2lmaWMgdG8gQ29tbWl0TGludCBzZXR1cCB3aXRoaW4gdGhlIHByb2plY3QgY29uZmlndXJhdGlvbi5cbiAgICovXG4gIHB1YmxpYyBhZGREZXZEZXBlbmRlbmNpZXMoKTogdm9pZCB7XG4gICAgdGhpcy5wcm9qZWN0LmFkZERldkRlcHMoLi4udGhpcy5kZXZEZXBlbmRlbmNpZXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbmZpZ3VyZXMgdGhlIGAuZ2l0YXR0cmlidXRlc2AgZmlsZSB0byB0cmVhdCBDb21taXRMaW50IGNvbXBvbmVudCByZWxhdGVkIGZpbGVzIGFzIGdlbmVyYXRlZCBjb2RlLCBvcHRpbWl6aW5nIGRpZmZzLlxuICAgKi9cbiAgcHVibGljIHVwZGF0ZUdpdEF0dHJpYnV0ZXMoKTogdm9pZCB7XG4gICAgdGhpcy5wcm9qZWN0LmdpdGF0dHJpYnV0ZXMuYWRkQXR0cmlidXRlcyhgLyR7dGhpcy5maWxlUGF0aH1gLCAnbGluZ3Vpc3QtZ2VuZXJhdGVkJyk7XG4gIH1cblxuICAvKipcbiAgICogRXhlY3V0ZXMgc2V0dXAgZm9yIHRoZSBDb21taXRMaW50IGNvbXBvbmVudC5cbiAgICovXG4gIHB1YmxpYyBzZXR1cCgpOiB2b2lkIHtcbiAgICB0aGlzLmFkZCgpO1xuICAgIHRoaXMuYWRkU2NyaXB0cygpO1xuICAgIHRoaXMuYWRkRGV2RGVwZW5kZW5jaWVzKCk7XG4gICAgdGhpcy51cGRhdGVHaXRBdHRyaWJ1dGVzKCk7XG4gIH1cbn1cbiJdfQ==