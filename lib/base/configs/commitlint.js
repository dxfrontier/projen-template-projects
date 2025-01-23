"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitLintConfigBase = void 0;
const projen_1 = require("projen");
const config_1 = require("../config");
const utils_1 = require("../../utils");
/**
 * Base class for implementing all relevant CommitLint configuration.
 *
 * This class acts as a base for handling CommitLint configuration within projects.
 */
class CommitLintConfigBase extends config_1.Config {
    get additionalDevDependencies() {
        return [
            '@commitlint/cli@^19.6.1',
            '@commitlint/config-conventional@^19.6.0',
            '@commitlint/prompt-cli@^19.7.0',
            '@commitlint/types@^19.5.0',
            'lint-staged@^15.3.0',
        ];
    }
    get additionalSettings() {
        return {
            'lint-staged': {
                '**/*.ts': ['npm run eslint', 'npm run prettier'],
            },
        };
    }
    get additionalScripts() {
        return {
            commit: 'commit',
        };
    }
    get additionalIgnorePatterns() {
        const filePath = Object.keys(this.configFile)[0];
        return [`/${filePath}`];
    }
    get configFile() {
        return {
            '.commitlintrc.ts': [
                "import type { UserConfig } from '@commitlint/types';",
                "import { RuleConfigSeverity } from '@commitlint/types';",
                '',
                'const Configuration: UserConfig = {',
                "  extends: ['@commitlint/config-conventional'],",
                '  rules: {',
                "    'type-enum': [",
                '      RuleConfigSeverity.Error,',
                "      'always',",
                "      ['build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test', 'delete'],",
                '    ],',
                "    'scope-empty': [RuleConfigSeverity.Error, 'never'],",
                "    'subject-empty': [RuleConfigSeverity.Error, 'never'],",
                '  },',
                "  helpUrl: 'https://github.com/conventional-changelog/commitlint/#what-is-commitlint',",
                '};',
                '',
                'export default Configuration;',
            ],
        };
    }
    registerConfig() {
        if ((0, utils_1.isValidProject)(this.project)) {
            this.project.npmConfig?.addDevDependencies(this.additionalDevDependencies);
            this.project.npmConfig?.addSettings(this.additionalSettings);
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
exports.CommitLintConfigBase = CommitLintConfigBase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWl0bGludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9iYXNlL2NvbmZpZ3MvY29tbWl0bGludC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBa0M7QUFDbEMsc0NBQW1DO0FBRW5DLHVDQUE2QztBQUc3Qzs7OztHQUlHO0FBQ0gsTUFBYSxvQkFBcUIsU0FBUSxlQUFNO0lBQzlDLElBQXVCLHlCQUF5QjtRQUM5QyxPQUFPO1lBQ0wseUJBQXlCO1lBQ3pCLHlDQUF5QztZQUN6QyxnQ0FBZ0M7WUFDaEMsMkJBQTJCO1lBQzNCLHFCQUFxQjtTQUN0QixDQUFDO0lBQ0osQ0FBQztJQUVELElBQXVCLGtCQUFrQjtRQUN2QyxPQUFPO1lBQ0wsYUFBYSxFQUFFO2dCQUNiLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLGtCQUFrQixDQUFDO2FBQ2xEO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUF1QixpQkFBaUI7UUFDdEMsT0FBTztZQUNMLE1BQU0sRUFBRSxRQUFRO1NBQ2pCLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBdUIsd0JBQXdCO1FBQzdDLE1BQU0sUUFBUSxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE9BQU8sQ0FBQyxJQUFJLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQXVCLFVBQVU7UUFDL0IsT0FBTztZQUNMLGtCQUFrQixFQUFFO2dCQUNsQixzREFBc0Q7Z0JBQ3RELHlEQUF5RDtnQkFDekQsRUFBRTtnQkFDRixxQ0FBcUM7Z0JBQ3JDLGlEQUFpRDtnQkFDakQsWUFBWTtnQkFDWixvQkFBb0I7Z0JBQ3BCLGlDQUFpQztnQkFDakMsaUJBQWlCO2dCQUNqQixpSEFBaUg7Z0JBQ2pILFFBQVE7Z0JBQ1IseURBQXlEO2dCQUN6RCwyREFBMkQ7Z0JBQzNELE1BQU07Z0JBQ04sd0ZBQXdGO2dCQUN4RixJQUFJO2dCQUNKLEVBQUU7Z0JBQ0YsK0JBQStCO2FBQ2hDO1NBQ0YsQ0FBQztJQUNKLENBQUM7SUFFZSxjQUFjO1FBQzVCLElBQUksSUFBQSxzQkFBYyxFQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxPQUF3QixDQUFDLFNBQVMsRUFBRSxrQkFBa0IsQ0FBQyxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQztZQUM1RixJQUFJLENBQUMsT0FBd0IsQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1lBQzlFLElBQUksQ0FBQyxPQUF3QixDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDNUUsSUFBSSxDQUFDLE9BQXdCLENBQUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2xHLENBQUM7SUFDSCxDQUFDO0lBRWUsV0FBVztRQUN6QixNQUFNLFFBQVEsR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLGlCQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUU7WUFDbkMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQ2pDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQXRFRCxvREFzRUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUZXh0RmlsZSB9IGZyb20gJ3Byb2plbic7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgUHJvamVjdFR5cGVzIH0gZnJvbSAnLi4vLi4vdHlwZXMvcHJvamVjdCc7XG5pbXBvcnQgeyBpc1ZhbGlkUHJvamVjdCB9IGZyb20gJy4uLy4uL3V0aWxzJztcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSAnLi4vLi4vdHlwZXMvdHlwZXMnO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIGltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgQ29tbWl0TGludCBjb25maWd1cmF0aW9uLlxuICpcbiAqIFRoaXMgY2xhc3MgYWN0cyBhcyBhIGJhc2UgZm9yIGhhbmRsaW5nIENvbW1pdExpbnQgY29uZmlndXJhdGlvbiB3aXRoaW4gcHJvamVjdHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBDb21taXRMaW50Q29uZmlnQmFzZSBleHRlbmRzIENvbmZpZyB7XG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbERldkRlcGVuZGVuY2llcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdAY29tbWl0bGludC9jbGlAXjE5LjYuMScsXG4gICAgICAnQGNvbW1pdGxpbnQvY29uZmlnLWNvbnZlbnRpb25hbEBeMTkuNi4wJyxcbiAgICAgICdAY29tbWl0bGludC9wcm9tcHQtY2xpQF4xOS43LjAnLFxuICAgICAgJ0Bjb21taXRsaW50L3R5cGVzQF4xOS41LjAnLFxuICAgICAgJ2xpbnQtc3RhZ2VkQF4xNS4zLjAnLFxuICAgIF07XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxTZXR0aW5ncygpOiBTZXR0aW5ncyB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdsaW50LXN0YWdlZCc6IHtcbiAgICAgICAgJyoqLyoudHMnOiBbJ25wbSBydW4gZXNsaW50JywgJ25wbSBydW4gcHJldHRpZXInXSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbFNjcmlwdHMoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nPiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNvbW1pdDogJ2NvbW1pdCcsXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5jb25maWdGaWxlKVswXTtcbiAgICByZXR1cm4gW2AvJHtmaWxlUGF0aH1gXTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgY29uZmlnRmlsZSgpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmdbXT4ge1xuICAgIHJldHVybiB7XG4gICAgICAnLmNvbW1pdGxpbnRyYy50cyc6IFtcbiAgICAgICAgXCJpbXBvcnQgdHlwZSB7IFVzZXJDb25maWcgfSBmcm9tICdAY29tbWl0bGludC90eXBlcyc7XCIsXG4gICAgICAgIFwiaW1wb3J0IHsgUnVsZUNvbmZpZ1NldmVyaXR5IH0gZnJvbSAnQGNvbW1pdGxpbnQvdHlwZXMnO1wiLFxuICAgICAgICAnJyxcbiAgICAgICAgJ2NvbnN0IENvbmZpZ3VyYXRpb246IFVzZXJDb25maWcgPSB7JyxcbiAgICAgICAgXCIgIGV4dGVuZHM6IFsnQGNvbW1pdGxpbnQvY29uZmlnLWNvbnZlbnRpb25hbCddLFwiLFxuICAgICAgICAnICBydWxlczogeycsXG4gICAgICAgIFwiICAgICd0eXBlLWVudW0nOiBbXCIsXG4gICAgICAgICcgICAgICBSdWxlQ29uZmlnU2V2ZXJpdHkuRXJyb3IsJyxcbiAgICAgICAgXCIgICAgICAnYWx3YXlzJyxcIixcbiAgICAgICAgXCIgICAgICBbJ2J1aWxkJywgJ2Nob3JlJywgJ2NpJywgJ2RvY3MnLCAnZmVhdCcsICdmaXgnLCAncGVyZicsICdyZWZhY3RvcicsICdyZXZlcnQnLCAnc3R5bGUnLCAndGVzdCcsICdkZWxldGUnXSxcIixcbiAgICAgICAgJyAgICBdLCcsXG4gICAgICAgIFwiICAgICdzY29wZS1lbXB0eSc6IFtSdWxlQ29uZmlnU2V2ZXJpdHkuRXJyb3IsICduZXZlciddLFwiLFxuICAgICAgICBcIiAgICAnc3ViamVjdC1lbXB0eSc6IFtSdWxlQ29uZmlnU2V2ZXJpdHkuRXJyb3IsICduZXZlciddLFwiLFxuICAgICAgICAnICB9LCcsXG4gICAgICAgIFwiICBoZWxwVXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2NvbnZlbnRpb25hbC1jaGFuZ2Vsb2cvY29tbWl0bGludC8jd2hhdC1pcy1jb21taXRsaW50JyxcIixcbiAgICAgICAgJ307JyxcbiAgICAgICAgJycsXG4gICAgICAgICdleHBvcnQgZGVmYXVsdCBDb25maWd1cmF0aW9uOycsXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgb3ZlcnJpZGUgcmVnaXN0ZXJDb25maWcoKTogdm9pZCB7XG4gICAgaWYgKGlzVmFsaWRQcm9qZWN0KHRoaXMucHJvamVjdCkpIHtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5ucG1Db25maWc/LmFkZERldkRlcGVuZGVuY2llcyh0aGlzLmFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMpO1xuICAgICAgKHRoaXMucHJvamVjdCBhcyBQcm9qZWN0VHlwZXMpLm5wbUNvbmZpZz8uYWRkU2V0dGluZ3ModGhpcy5hZGRpdGlvbmFsU2V0dGluZ3MpO1xuICAgICAgKHRoaXMucHJvamVjdCBhcyBQcm9qZWN0VHlwZXMpLm5wbUNvbmZpZz8uYWRkU2NyaXB0cyh0aGlzLmFkZGl0aW9uYWxTY3JpcHRzKTtcbiAgICAgICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS5wcmV0dGllckNvbmZpZz8uYWRkSWdub3JlUGF0dGVybnModGhpcy5hZGRpdGlvbmFsSWdub3JlUGF0dGVybnMpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBhcHBseUNvbmZpZygpOiB2b2lkIHtcbiAgICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5jb25maWdGaWxlKVswXTtcbiAgICBuZXcgVGV4dEZpbGUodGhpcy5wcm9qZWN0LCBmaWxlUGF0aCwge1xuICAgICAgbGluZXM6IHRoaXMuY29uZmlnRmlsZVtmaWxlUGF0aF0sXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==