"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpmConfigCapService = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
// import { Task } from 'projen';
const base_1 = require("../../base");
/**
 * Implementing all relevant NPM configuration for the CapService project.
 */
class NpmConfigCapService extends base_1.NpmConfigBase {
    get additionalDevDependencies() {
        return ['npm-run-all@^4.1.5'];
    }
    get additionalSettings() {
        return {
            files: ['gen', 'README.md'],
        };
    }
    get additionalIgnorePatterns() {
        return ['docs/'];
    }
    /**
     * Gets additional ignore patterns to be added to the project's ignore configuration.
     *
     * @returns A list of ignore patterns.
     */
    get additionalIgnorePrettierPatterns() {
        return [
            '/package-lock.json',
            '/package.json',
            '/API.md',
            ...this.additionalAttributesPatterns.map((pattern) => {
                return `/${pattern}`;
            }),
        ];
    }
    get additionalAttributesPatterns() {
        return ['@cds-models', 'dist', 'gen'];
    }
    registerConfig() {
        if (this.project instanceof base_1.BaseProject) {
            this.addDevDependencies(this.additionalDevDependencies);
            this.addSettings(this.additionalSettings);
            this.removeScriptsOnInit(this.removeScripts);
            this.project.eslintConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
            this.project.prettierConfig?.addIgnorePatterns(this.additionalIgnorePrettierPatterns);
            this.project.githubConfig?.addAttributePatterns(this.additionalAttributesPatterns);
            // const installTask: Task | undefined = this.project.tasks.tryFind('install');
            // if (installTask) {
            //   installTask.reset("echo 'install task overwritten, postponed to npm post-install step'");
            // }
        }
    }
}
exports.NpmConfigCapService = NpmConfigCapService;
_a = JSII_RTTI_SYMBOL_1;
NpmConfigCapService[_a] = { fqn: "@dxfrontier/projen-template-projects.NpmConfigCapService", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2NhcC1zZXJ2aWNlL2NvbmZpZy9ucG0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpQ0FBaUM7QUFDakMscUNBQXdEO0FBR3hEOztHQUVHO0FBQ0gsTUFBYSxtQkFBb0IsU0FBUSxvQkFBYTtJQUNwRCxJQUF1Qix5QkFBeUI7UUFDOUMsT0FBTyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELElBQXVCLGtCQUFrQjtRQUN2QyxPQUFPO1lBQ0wsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQztTQUM1QixDQUFDO0lBQ0osQ0FBQztJQUVELElBQXVCLHdCQUF3QjtRQUM3QyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFZLGdDQUFnQztRQUMxQyxPQUFPO1lBQ0wsb0JBQW9CO1lBQ3BCLGVBQWU7WUFDZixTQUFTO1lBQ1QsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBZSxFQUFVLEVBQUU7Z0JBQ25FLE9BQU8sSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUN2QixDQUFDLENBQUM7U0FDSCxDQUFDO0lBQ0osQ0FBQztJQUVELElBQXVCLDRCQUE0QjtRQUNqRCxPQUFPLENBQUMsYUFBYSxFQUFFLE1BQU0sRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBRWUsY0FBYztRQUM1QixJQUFJLElBQUksQ0FBQyxPQUFPLFlBQVksa0JBQVcsRUFBRSxDQUFDO1lBQ3hDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDN0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDNUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxDQUFDLGdDQUFnQyxDQUFDLENBQUM7WUFDdEYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsb0JBQW9CLENBQUMsSUFBSSxDQUFDLDRCQUE0QixDQUFDLENBQUM7WUFFbkYsK0VBQStFO1lBQy9FLHFCQUFxQjtZQUNyQiw4RkFBOEY7WUFDOUYsSUFBSTtRQUNOLENBQUM7SUFDSCxDQUFDOztBQWpESCxrREFrREMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBUYXNrIH0gZnJvbSAncHJvamVuJztcbmltcG9ydCB7IEJhc2VQcm9qZWN0LCBOcG1Db25maWdCYXNlIH0gZnJvbSAnLi4vLi4vYmFzZSc7XG5pbXBvcnQgeyBTZXR0aW5ncyB9IGZyb20gJy4uLy4uL3R5cGVzJztcblxuLyoqXG4gKiBJbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IE5QTSBjb25maWd1cmF0aW9uIGZvciB0aGUgQ2FwU2VydmljZSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgTnBtQ29uZmlnQ2FwU2VydmljZSBleHRlbmRzIE5wbUNvbmZpZ0Jhc2Uge1xuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbJ25wbS1ydW4tYWxsQF40LjEuNSddO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsU2V0dGluZ3MoKTogU2V0dGluZ3Mge1xuICAgIHJldHVybiB7XG4gICAgICBmaWxlczogWydnZW4nLCAnUkVBRE1FLm1kJ10sXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gWydkb2NzLyddO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYWRkaXRpb25hbCBpZ25vcmUgcGF0dGVybnMgdG8gYmUgYWRkZWQgdG8gdGhlIHByb2plY3QncyBpZ25vcmUgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogQHJldHVybnMgQSBsaXN0IG9mIGlnbm9yZSBwYXR0ZXJucy5cbiAgICovXG4gIHByaXZhdGUgZ2V0IGFkZGl0aW9uYWxJZ25vcmVQcmV0dGllclBhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW1xuICAgICAgJy9wYWNrYWdlLWxvY2suanNvbicsXG4gICAgICAnL3BhY2thZ2UuanNvbicsXG4gICAgICAnL0FQSS5tZCcsXG4gICAgICAuLi50aGlzLmFkZGl0aW9uYWxBdHRyaWJ1dGVzUGF0dGVybnMubWFwKChwYXR0ZXJuOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgICByZXR1cm4gYC8ke3BhdHRlcm59YDtcbiAgICAgIH0pLFxuICAgIF07XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxBdHRyaWJ1dGVzUGF0dGVybnMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbJ0BjZHMtbW9kZWxzJywgJ2Rpc3QnLCAnZ2VuJ107XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgcmVnaXN0ZXJDb25maWcoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucHJvamVjdCBpbnN0YW5jZW9mIEJhc2VQcm9qZWN0KSB7XG4gICAgICB0aGlzLmFkZERldkRlcGVuZGVuY2llcyh0aGlzLmFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMpO1xuICAgICAgdGhpcy5hZGRTZXR0aW5ncyh0aGlzLmFkZGl0aW9uYWxTZXR0aW5ncyk7XG4gICAgICB0aGlzLnJlbW92ZVNjcmlwdHNPbkluaXQodGhpcy5yZW1vdmVTY3JpcHRzKTtcbiAgICAgIHRoaXMucHJvamVjdC5lc2xpbnRDb25maWc/LmFkZElnbm9yZVBhdHRlcm5zKHRoaXMuYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKTtcbiAgICAgIHRoaXMucHJvamVjdC5wcmV0dGllckNvbmZpZz8uYWRkSWdub3JlUGF0dGVybnModGhpcy5hZGRpdGlvbmFsSWdub3JlUHJldHRpZXJQYXR0ZXJucyk7XG4gICAgICB0aGlzLnByb2plY3QuZ2l0aHViQ29uZmlnPy5hZGRBdHRyaWJ1dGVQYXR0ZXJucyh0aGlzLmFkZGl0aW9uYWxBdHRyaWJ1dGVzUGF0dGVybnMpO1xuXG4gICAgICAvLyBjb25zdCBpbnN0YWxsVGFzazogVGFzayB8IHVuZGVmaW5lZCA9IHRoaXMucHJvamVjdC50YXNrcy50cnlGaW5kKCdpbnN0YWxsJyk7XG4gICAgICAvLyBpZiAoaW5zdGFsbFRhc2spIHtcbiAgICAgIC8vICAgaW5zdGFsbFRhc2sucmVzZXQoXCJlY2hvICdpbnN0YWxsIHRhc2sgb3ZlcndyaXR0ZW4sIHBvc3Rwb25lZCB0byBucG0gcG9zdC1pbnN0YWxsIHN0ZXAnXCIpO1xuICAgICAgLy8gfVxuICAgIH1cbiAgfVxufVxuIl19