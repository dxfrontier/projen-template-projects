"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CapServiceProject = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const base_1 = require("../base");
const commitlint_1 = require("./config/commitlint");
const devcontainer_1 = require("./config/devcontainer");
const eslint_1 = require("./config/eslint");
const git_1 = require("./config/git");
const github_1 = require("./config/github");
const husky_1 = require("./config/husky");
const jest_1 = require("./config/jest");
const npm_1 = require("./config/npm");
const prettier_1 = require("./config/prettier");
const samplecode_1 = require("./config/samplecode");
const typescript_1 = require("./typescript");
const vscode_1 = require("./config/vscode");
const child_process_1 = require("child_process");
/**
 * Base class for managing project CapService configuration.
 */
class CapServiceProject extends base_1.BaseProject {
    /**
     * Initializes the project.
     * @param options Additional project options.
     */
    constructor(options) {
        const updatedOptions = {
            ...options,
            commitlintEnabled: options.commitlintEnabled ?? true,
            devContainerEnabled: options.devContainerEnabled ?? true,
            eslintEnabled: options.eslintEnabled ?? true,
            githubEnabled: options.githubEnabled ?? true,
            huskyEnabled: options.huskyEnabled ?? true,
            jestEnabled: options.jestEnabled ?? true,
            prettierEnabled: options.prettierEnabled ?? true,
            vscodeEnabled: options.vscodeEnabled ?? true,
            sampleCodeEnabled: options.sampleCodeEnabled ?? true,
            typescriptEnabled: true,
            name: options.name,
            namespace: options.namespace ?? 'de.customer.org.project',
            description: options.description ?? 'SAP CAP Project',
            entityName: options.entityName ?? 'Entity1',
        };
        super({
            ...base_1.BaseOptions.sharedOptions(updatedOptions),
        });
        this.gitConfig = new git_1.GitConfigCapService(this);
        this.npmConfig = new npm_1.NpmConfigCapService(this);
        this.typescriptConfig = new typescript_1.TypeScriptConfigCapService(this);
        if (updatedOptions.commitlintEnabled) {
            this.commitlintConfig = new commitlint_1.CommitLintConfigCapService(this);
        }
        if (updatedOptions.devContainerEnabled) {
            this.devContainerConfig = new devcontainer_1.DevContainerConfigCapService(this);
        }
        if (updatedOptions.eslintEnabled) {
            this.eslintConfig = new eslint_1.EsLintConfigCapService(this);
        }
        if (updatedOptions.jestEnabled) {
            this.jestConfig = new jest_1.JestConfigCapService(this);
        }
        if (updatedOptions.githubEnabled) {
            this.githubConfig = new github_1.GitHubConfigCapService(this);
        }
        if (updatedOptions.prettierEnabled) {
            this.prettierConfig = new prettier_1.PrettierConfigCapService(this);
        }
        if (updatedOptions.vscodeEnabled) {
            this.vscodeConfig = new vscode_1.VsCodeConfigCapService(this);
        }
        if (updatedOptions.huskyEnabled) {
            this.huskyConfig = new husky_1.HuskyConfigCapService(this);
        }
        if (updatedOptions.sampleCodeEnabled) {
            this.sampleCodeConfig = new samplecode_1.SampleCodeConfigCapService(this, updatedOptions);
        }
    }
    initializeBaseConfigs(options) {
        super.initializeBaseConfigs(options);
    }
    postSynthesize() {
        super.postSynthesize();
        let hasRun = false;
        process.on('beforeExit', () => {
            if (hasRun)
                return;
            hasRun = true;
            console.log('Exiting projen and installing @dxfrontier/cds-ts-dispatcher ...');
            (0, child_process_1.exec)('npx projen eject && rm -rf .projenrc.ts.bak scripts .projen && npm install @dxfrontier/cds-ts-dispatcher@^3.2.7', (error, stdout) => {
                if (error) {
                    console.error('Error exiting projen ... But projen exit will continue.');
                }
                console.log(`${stdout}`);
            });
        });
    }
}
exports.CapServiceProject = CapServiceProject;
_a = JSII_RTTI_SYMBOL_1;
CapServiceProject[_a] = { fqn: "@dxfrontier/projen-template-projects.CapServiceProject", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYXAtc2VydmljZS9wcm9qZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0NBQXVFO0FBQ3ZFLG9EQUFpRTtBQUNqRSx3REFBcUU7QUFDckUsNENBQXlEO0FBQ3pELHNDQUFtRDtBQUNuRCw0Q0FBeUQ7QUFDekQsMENBQXVEO0FBQ3ZELHdDQUFxRDtBQUNyRCxzQ0FBbUQ7QUFDbkQsZ0RBQTZEO0FBQzdELG9EQUFpRTtBQUNqRSw2Q0FBMEQ7QUFDMUQsNENBQXlEO0FBQ3pELGlEQUFvRDtBQU9wRDs7R0FFRztBQUNILE1BQWEsaUJBQWtCLFNBQVEsa0JBQVc7SUFDaEQ7OztPQUdHO0lBQ0gsWUFBWSxPQUFpQztRQUMzQyxNQUFNLGNBQWMsR0FBRztZQUNyQixHQUFHLE9BQU87WUFDVixpQkFBaUIsRUFBRSxPQUFPLENBQUMsaUJBQWlCLElBQUksSUFBSTtZQUNwRCxtQkFBbUIsRUFBRSxPQUFPLENBQUMsbUJBQW1CLElBQUksSUFBSTtZQUN4RCxhQUFhLEVBQUUsT0FBTyxDQUFDLGFBQWEsSUFBSSxJQUFJO1lBQzVDLGFBQWEsRUFBRSxPQUFPLENBQUMsYUFBYSxJQUFJLElBQUk7WUFDNUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxZQUFZLElBQUksSUFBSTtZQUMxQyxXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVcsSUFBSSxJQUFJO1lBQ3hDLGVBQWUsRUFBRSxPQUFPLENBQUMsZUFBZSxJQUFJLElBQUk7WUFDaEQsYUFBYSxFQUFFLE9BQU8sQ0FBQyxhQUFhLElBQUksSUFBSTtZQUM1QyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsaUJBQWlCLElBQUksSUFBSTtZQUNwRCxpQkFBaUIsRUFBRSxJQUFJO1lBQ3ZCLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtZQUNsQixTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVMsSUFBSSx5QkFBeUI7WUFDekQsV0FBVyxF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Q0FDRixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztBQW5GSCw4Q0FvRkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXNlUHJvamVjdE9wdGlvbnMsIEJhc2VQcm9qZWN0LCBCYXNlT3B0aW9ucyB9IGZyb20gJy4uL2Jhc2UnO1xuaW1wb3J0IHsgQ29tbWl0TGludENvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9jb21taXRsaW50JztcbmltcG9ydCB7IERldkNvbnRhaW5lckNvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9kZXZjb250YWluZXInO1xuaW1wb3J0IHsgRXNMaW50Q29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vY29uZmlnL2VzbGludCc7XG5pbXBvcnQgeyBHaXRDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvZ2l0JztcbmltcG9ydCB7IEdpdEh1YkNvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9naXRodWInO1xuaW1wb3J0IHsgSHVza3lDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvaHVza3knO1xuaW1wb3J0IHsgSmVzdENvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9qZXN0JztcbmltcG9ydCB7IE5wbUNvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9ucG0nO1xuaW1wb3J0IHsgUHJldHRpZXJDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvcHJldHRpZXInO1xuaW1wb3J0IHsgU2FtcGxlQ29kZUNvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9zYW1wbGVjb2RlJztcbmltcG9ydCB7IFR5cGVTY3JpcHRDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi90eXBlc2NyaXB0JztcbmltcG9ydCB7IFZzQ29kZUNvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy92c2NvZGUnO1xuaW1wb3J0IHsgZXhlYywgRXhlY0V4Y2VwdGlvbiB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhcFNlcnZpY2VQcm9qZWN0T3B0aW9ucyBleHRlbmRzIEJhc2VQcm9qZWN0T3B0aW9ucyB7XG4gIHJlYWRvbmx5IG5hbWVzcGFjZT86IHN0cmluZztcbiAgcmVhZG9ubHkgZW50aXR5TmFtZT86IHN0cmluZztcbn1cblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBtYW5hZ2luZyBwcm9qZWN0IENhcFNlcnZpY2UgY29uZmlndXJhdGlvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIENhcFNlcnZpY2VQcm9qZWN0IGV4dGVuZHMgQmFzZVByb2plY3Qge1xuICAvKipcbiAgICogSW5pdGlhbGl6ZXMgdGhlIHByb2plY3QuXG4gICAqIEBwYXJhbSBvcHRpb25zIEFkZGl0aW9uYWwgcHJvamVjdCBvcHRpb25zLlxuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9uczogQ2FwU2VydmljZVByb2plY3RPcHRpb25zKSB7XG4gICAgY29uc3QgdXBkYXRlZE9wdGlvbnMgPSB7XG4gICAgICAuLi5vcHRpb25zLFxuICAgICAgY29tbWl0bGludEVuYWJsZWQ6IG9wdGlvbnMuY29tbWl0bGludEVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIGRldkNvbnRhaW5lckVuYWJsZWQ6IG9wdGlvbnMuZGV2Q29udGFpbmVyRW5hYmxlZCA/PyB0cnVlLFxuICAgICAgZXNsaW50RW5hYmxlZDogb3B0aW9ucy5lc2xpbnRFbmFibGVkID8/IHRydWUsXG4gICAgICBnaXRodWJFbmFibGVkOiBvcHRpb25zLmdpdGh1YkVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIGh1c2t5RW5hYmxlZDogb3B0aW9ucy5odXNreUVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIGplc3RFbmFibGVkOiBvcHRpb25zLmplc3RFbmFibGVkID8/IHRydWUsXG4gICAgICBwcmV0dGllckVuYWJsZWQ6IG9wdGlvbnMucHJldHRpZXJFbmFibGVkID8/IHRydWUsXG4gICAgICB2c2NvZGVFbmFibGVkOiBvcHRpb25zLnZzY29kZUVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIHNhbXBsZUNvZGVFbmFibGVkOiBvcHRpb25zLnNhbXBsZUNvZGVFbmFibGVkID8/IHRydWUsXG4gICAgICB0eXBlc2NyaXB0RW5hYmxlZDogdHJ1ZSxcbiAgICAgIG5hbWU6IG9wdGlvbnMubmFtZSxcbiAgICAgIG5hbWVzcGFjZTogb3B0aW9ucy5uYW1lc3BhY2UgPz8gJ2RlLmN1c3RvbWVyLm9yZy5wcm9qZWN0JyxcbiAgICAgIGRlc2NyaXB0aW9uOiBvcHRpb25zLmRlc2NyaXB0aW9uID8/ICdTQVAgQ0FQIFByb2plY3QnLFxuICAgICAgZW50aXR5TmFtZTogb3B0aW9ucy5lbnRpdHlOYW1lID8/ICdFbnRpdHkxJyxcbiAgICB9O1xuICAgIHN1cGVyKHtcbiAgICAgIC4uLkJhc2VPcHRpb25zLnNoYXJlZE9wdGlvbnModXBkYXRlZE9wdGlvbnMpLFxuICAgIH0pO1xuXG4gICAgdGhpcy5naXRDb25maWcgPSBuZXcgR2l0Q29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB0aGlzLm5wbUNvbmZpZyA9IG5ldyBOcG1Db25maWdDYXBTZXJ2aWNlKHRoaXMpO1xuICAgIHRoaXMudHlwZXNjcmlwdENvbmZpZyA9IG5ldyBUeXBlU2NyaXB0Q29uZmlnQ2FwU2VydmljZSh0aGlzKTtcblxuICAgIGlmICh1cGRhdGVkT3B0aW9ucy5jb21taXRsaW50RW5hYmxlZCkge1xuICAgICAgdGhpcy5jb21taXRsaW50Q29uZmlnID0gbmV3IENvbW1pdExpbnRDb25maWdDYXBTZXJ2aWNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodXBkYXRlZE9wdGlvbnMuZGV2Q29udGFpbmVyRW5hYmxlZCkge1xuICAgICAgdGhpcy5kZXZDb250YWluZXJDb25maWcgPSBuZXcgRGV2Q29udGFpbmVyQ29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLmVzbGludEVuYWJsZWQpIHtcbiAgICAgIHRoaXMuZXNsaW50Q29uZmlnID0gbmV3IEVzTGludENvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG4gICAgfVxuICAgIGlmICh1cGRhdGVkT3B0aW9ucy5qZXN0RW5hYmxlZCkge1xuICAgICAgdGhpcy5qZXN0Q29uZmlnID0gbmV3IEplc3RDb25maWdDYXBTZXJ2aWNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodXBkYXRlZE9wdGlvbnMuZ2l0aHViRW5hYmxlZCkge1xuICAgICAgdGhpcy5naXRodWJDb25maWcgPSBuZXcgR2l0SHViQ29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLnByZXR0aWVyRW5hYmxlZCkge1xuICAgICAgdGhpcy5wcmV0dGllckNvbmZpZyA9IG5ldyBQcmV0dGllckNvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG4gICAgfVxuICAgIGlmICh1cGRhdGVkT3B0aW9ucy52c2NvZGVFbmFibGVkKSB7XG4gICAgICB0aGlzLnZzY29kZUNvbmZpZyA9IG5ldyBWc0NvZGVDb25maWdDYXBTZXJ2aWNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodXBkYXRlZE9wdGlvbnMuaHVza3lFbmFibGVkKSB7XG4gICAgICB0aGlzLmh1c2t5Q29uZmlnID0gbmV3IEh1c2t5Q29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLnNhbXBsZUNvZGVFbmFibGVkKSB7XG4gICAgICB0aGlzLnNhbXBsZUNvZGVDb25maWcgPSBuZXcgU2FtcGxlQ29kZUNvbmZpZ0NhcFNlcnZpY2UodGhpcywgdXBkYXRlZE9wdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBpbml0aWFsaXplQmFzZUNvbmZpZ3Mob3B0aW9uczogQmFzZVByb2plY3RPcHRpb25zKTogdm9pZCB7XG4gICAgc3VwZXIuaW5pdGlhbGl6ZUJhc2VDb25maWdzKG9wdGlvbnMpO1xuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIHBvc3RTeW50aGVzaXplKCk6IHZvaWQge1xuICAgIHN1cGVyLnBvc3RTeW50aGVzaXplKCk7XG5cbiAgICBsZXQgaGFzUnVuID0gZmFsc2U7XG4gICAgcHJvY2Vzcy5vbignYmVmb3JlRXhpdCcsICgpOiB2b2lkID0+IHtcbiAgICAgIGlmIChoYXNSdW4pIHJldHVybjtcbiAgICAgIGhhc1J1biA9IHRydWU7XG4gICAgICBjb25zb2xlLmxvZygnRXhpdGluZyBwcm9qZW4gYW5kIGluc3RhbGxpbmcgQGR4ZnJvbnRpZXIvY2RzLXRzLWRpc3BhdGNoZXIgLi4uJyk7XG5cbiAgICAgIGV4ZWMoXG4gICAgICAgICducHggcHJvamVuIGVqZWN0ICYmIHJtIC1yZiAucHJvamVucmMudHMuYmFrIHNjcmlwdHMgLnByb2plbiAmJiBucG0gaW5zdGFsbCBAZHhmcm9udGllci9jZHMtdHMtZGlzcGF0Y2hlckBeMy4yLjcnLFxuICAgICAgICAoZXJyb3I6IEV4ZWNFeGNlcHRpb24gfCBudWxsLCBzdGRvdXQ6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZXhpdGluZyBwcm9qZW4gLi4uIEJ1dCBwcm9qZW4gZXhpdCB3aWxsIGNvbnRpbnVlLicpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zb2xlLmxvZyhgJHtzdGRvdXR9YCk7XG4gICAgICAgIH0sXG4gICAgICApO1xuICAgIH0pO1xuICB9XG59XG4iXX0=