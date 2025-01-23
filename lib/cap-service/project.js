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
        console.log('CapServiceProject postSynthesize');
        (0, child_process_1.exec)('npx projen eject', (error, stdout, stderr) => {
            if (error) {
                console.error(`exec error: ${error}`);
                return;
            }
            console.log(`stdout: ${stdout}`);
            console.error(`stderr: ${stderr}`);
        });
    }
}
exports.CapServiceProject = CapServiceProject;
_a = JSII_RTTI_SYMBOL_1;
CapServiceProject[_a] = { fqn: "@dxfrontier/projen-template-projects.CapServiceProject", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYXAtc2VydmljZS9wcm9qZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0NBQXVFO0FBQ3ZFLG9EQUFpRTtBQUNqRSx3REFBcUU7QUFDckUsNENBQXlEO0FBQ3pELHNDQUFtRDtBQUNuRCw0Q0FBeUQ7QUFDekQsMENBQXVEO0FBQ3ZELHdDQUFxRDtBQUNyRCxzQ0FBbUQ7QUFDbkQsZ0RBQTZEO0FBQzdELG9EQUFpRTtBQUNqRSw2Q0FBMEQ7QUFDMUQsNENBQXlEO0FBQ3pELGlEQUFxQztBQU9yQzs7R0FFRztBQUNILE1BQWEsaUJBQWtCLFNBQVEsa0JBQVc7SUFDaEQ7OztPQUdHO0lBQ0gsWUFBWSxPQUFpQztRQUMzQyxNQUFNLGNBQWMsR0FBRztZQUNyQixHQUFHLE9BQU87WUFDVixpQkFBaUIsRUFBRSxPQUFPLENBQUMsaUJBQWlCLElBQUksSUFBSTtZQUNwRCxtQkFBbUIsRUFBRSxPQUFPLENBQUMsbUJBQW1CLElBQUksSUFBSTtZQUN4RCxhQUFhLEVBQUUsT0FBTyxDQUFDLGFBQWEsSUFBSSxJQUFJO1lBQzVDLGFBQWEsRUFBRSxPQUFPLENBQUMsYUFBYSxJQUFJLElBQUk7WUFDNUMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxZQUFZLElBQUksSUFBSTtZQUMxQyxXQUFXLEVBQUUsT0FBTyxDQUFDLFdBQVcsSUFBSSxJQUFJO1lBQ3hDLGVBQWUsRUFBRSxPQUFPLENBQUMsZUFBZSxJQUFJLElBQUk7WUFDaEQsYUFBYSxFQUFFLE9BQU8sQ0FBQyxhQUFhLElBQUksSUFBSTtZQUM1QyxpQkFBaUIsRUFBRSxPQUFPLENBQUMsaUJBQWlCLElBQUksSUFBSTtZQUNwRCxpQkFBaUIsRUFBRSxJQUFJO1lBQ3ZCLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtZQUNsQixTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVMsSUFBSSx5QkFBeUI7WUFDekQsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXLElBQUksaUJBQWlCO1lBQ3JELFVBQVUsRUFBRSxPQUFPLENBQUMsVUFBVSxJQUFJLFNBQVM7U0FDNUMsQ0FBQztRQUNGLEtBQUssQ0FBQztZQUNKLEdBQUcsa0JBQVcsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDO1NBQzdDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSx5QkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUkseUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksdUNBQTBCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFN0QsSUFBSSxjQUFjLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSx1Q0FBMEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvRCxDQUFDO1FBQ0QsSUFBSSxjQUFjLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUN2QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSwyQ0FBNEIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRSxDQUFDO1FBQ0QsSUFBSSxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLCtCQUFzQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZELENBQUM7UUFDRCxJQUFJLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksMkJBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkQsQ0FBQztRQUNELElBQUksY0FBYyxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSwrQkFBc0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2RCxDQUFDO1FBQ0QsSUFBSSxjQUFjLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLG1DQUF3QixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNELENBQUM7UUFDRCxJQUFJLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksK0JBQXNCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkQsQ0FBQztRQUNELElBQUksY0FBYyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ2hDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSw2QkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRCxDQUFDO1FBQ0QsSUFBSSxjQUFjLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUNyQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSx1Q0FBMEIsQ0FBQyxJQUFJLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDL0UsQ0FBQztJQUNILENBQUM7SUFFa0IscUJBQXFCLENBQUMsT0FBMkI7UUFDbEUsS0FBSyxDQUFDLHFCQUFxQixDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFZSxjQUFjO1FBQzVCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUM7UUFDaEQsSUFBQSxvQkFBSSxFQUFDLGtCQUFrQixFQUFFLENBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUNqRCxJQUFJLEtBQUssRUFBRSxDQUFDO2dCQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZSxLQUFLLEVBQUUsQ0FBQyxDQUFDO2dCQUN0QyxPQUFPO1lBQ1QsQ0FBQztZQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1lBQ2pDLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FBVyxNQUFNLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7QUEzRUgsOENBNEVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFzZVByb2plY3RPcHRpb25zLCBCYXNlUHJvamVjdCwgQmFzZU9wdGlvbnMgfSBmcm9tICcuLi9iYXNlJztcbmltcG9ydCB7IENvbW1pdExpbnRDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvY29tbWl0bGludCc7XG5pbXBvcnQgeyBEZXZDb250YWluZXJDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvZGV2Y29udGFpbmVyJztcbmltcG9ydCB7IEVzTGludENvbmZpZ0NhcFNlcnZpY2UgfSBmcm9tICcuL2NvbmZpZy9lc2xpbnQnO1xuaW1wb3J0IHsgR2l0Q29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vY29uZmlnL2dpdCc7XG5pbXBvcnQgeyBHaXRIdWJDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvZ2l0aHViJztcbmltcG9ydCB7IEh1c2t5Q29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vY29uZmlnL2h1c2t5JztcbmltcG9ydCB7IEplc3RDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvamVzdCc7XG5pbXBvcnQgeyBOcG1Db25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvbnBtJztcbmltcG9ydCB7IFByZXR0aWVyQ29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vY29uZmlnL3ByZXR0aWVyJztcbmltcG9ydCB7IFNhbXBsZUNvZGVDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvc2FtcGxlY29kZSc7XG5pbXBvcnQgeyBUeXBlU2NyaXB0Q29uZmlnQ2FwU2VydmljZSB9IGZyb20gJy4vdHlwZXNjcmlwdCc7XG5pbXBvcnQgeyBWc0NvZGVDb25maWdDYXBTZXJ2aWNlIH0gZnJvbSAnLi9jb25maWcvdnNjb2RlJztcbmltcG9ydCB7IGV4ZWMgfSBmcm9tICdjaGlsZF9wcm9jZXNzJztcblxuZXhwb3J0IGludGVyZmFjZSBDYXBTZXJ2aWNlUHJvamVjdE9wdGlvbnMgZXh0ZW5kcyBCYXNlUHJvamVjdE9wdGlvbnMge1xuICByZWFkb25seSBuYW1lc3BhY2U/OiBzdHJpbmc7XG4gIHJlYWRvbmx5IGVudGl0eU5hbWU/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgbWFuYWdpbmcgcHJvamVjdCBDYXBTZXJ2aWNlIGNvbmZpZ3VyYXRpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBDYXBTZXJ2aWNlUHJvamVjdCBleHRlbmRzIEJhc2VQcm9qZWN0IHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBwcm9qZWN0LlxuICAgKiBAcGFyYW0gb3B0aW9ucyBBZGRpdGlvbmFsIHByb2plY3Qgb3B0aW9ucy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IENhcFNlcnZpY2VQcm9qZWN0T3B0aW9ucykge1xuICAgIGNvbnN0IHVwZGF0ZWRPcHRpb25zID0ge1xuICAgICAgLi4ub3B0aW9ucyxcbiAgICAgIGNvbW1pdGxpbnRFbmFibGVkOiBvcHRpb25zLmNvbW1pdGxpbnRFbmFibGVkID8/IHRydWUsXG4gICAgICBkZXZDb250YWluZXJFbmFibGVkOiBvcHRpb25zLmRldkNvbnRhaW5lckVuYWJsZWQgPz8gdHJ1ZSxcbiAgICAgIGVzbGludEVuYWJsZWQ6IG9wdGlvbnMuZXNsaW50RW5hYmxlZCA/PyB0cnVlLFxuICAgICAgZ2l0aHViRW5hYmxlZDogb3B0aW9ucy5naXRodWJFbmFibGVkID8/IHRydWUsXG4gICAgICBodXNreUVuYWJsZWQ6IG9wdGlvbnMuaHVza3lFbmFibGVkID8/IHRydWUsXG4gICAgICBqZXN0RW5hYmxlZDogb3B0aW9ucy5qZXN0RW5hYmxlZCA/PyB0cnVlLFxuICAgICAgcHJldHRpZXJFbmFibGVkOiBvcHRpb25zLnByZXR0aWVyRW5hYmxlZCA/PyB0cnVlLFxuICAgICAgdnNjb2RlRW5hYmxlZDogb3B0aW9ucy52c2NvZGVFbmFibGVkID8/IHRydWUsXG4gICAgICBzYW1wbGVDb2RlRW5hYmxlZDogb3B0aW9ucy5zYW1wbGVDb2RlRW5hYmxlZCA/PyB0cnVlLFxuICAgICAgdHlwZXNjcmlwdEVuYWJsZWQ6IHRydWUsXG4gICAgICBuYW1lOiBvcHRpb25zLm5hbWUsXG4gICAgICBuYW1lc3BhY2U6IG9wdGlvbnMubmFtZXNwYWNlID8/ICdkZS5jdXN0b21lci5vcmcucHJvamVjdCcsXG4gICAgICBkZXNjcmlwdGlvbjogb3B0aW9ucy5kZXNjcmlwdGlvbiA/PyAnU0FQIENBUCBQcm9qZWN0JyxcbiAgICAgIGVudGl0eU5hbWU6IG9wdGlvbnMuZW50aXR5TmFtZSA/PyAnRW50aXR5MScsXG4gICAgfTtcbiAgICBzdXBlcih7XG4gICAgICAuLi5CYXNlT3B0aW9ucy5zaGFyZWRPcHRpb25zKHVwZGF0ZWRPcHRpb25zKSxcbiAgICB9KTtcblxuICAgIHRoaXMuZ2l0Q29uZmlnID0gbmV3IEdpdENvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG4gICAgdGhpcy5ucG1Db25maWcgPSBuZXcgTnBtQ29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB0aGlzLnR5cGVzY3JpcHRDb25maWcgPSBuZXcgVHlwZVNjcmlwdENvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG5cbiAgICBpZiAodXBkYXRlZE9wdGlvbnMuY29tbWl0bGludEVuYWJsZWQpIHtcbiAgICAgIHRoaXMuY29tbWl0bGludENvbmZpZyA9IG5ldyBDb21taXRMaW50Q29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLmRldkNvbnRhaW5lckVuYWJsZWQpIHtcbiAgICAgIHRoaXMuZGV2Q29udGFpbmVyQ29uZmlnID0gbmV3IERldkNvbnRhaW5lckNvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG4gICAgfVxuICAgIGlmICh1cGRhdGVkT3B0aW9ucy5lc2xpbnRFbmFibGVkKSB7XG4gICAgICB0aGlzLmVzbGludENvbmZpZyA9IG5ldyBFc0xpbnRDb25maWdDYXBTZXJ2aWNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodXBkYXRlZE9wdGlvbnMuamVzdEVuYWJsZWQpIHtcbiAgICAgIHRoaXMuamVzdENvbmZpZyA9IG5ldyBKZXN0Q29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLmdpdGh1YkVuYWJsZWQpIHtcbiAgICAgIHRoaXMuZ2l0aHViQ29uZmlnID0gbmV3IEdpdEh1YkNvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG4gICAgfVxuICAgIGlmICh1cGRhdGVkT3B0aW9ucy5wcmV0dGllckVuYWJsZWQpIHtcbiAgICAgIHRoaXMucHJldHRpZXJDb25maWcgPSBuZXcgUHJldHRpZXJDb25maWdDYXBTZXJ2aWNlKHRoaXMpO1xuICAgIH1cbiAgICBpZiAodXBkYXRlZE9wdGlvbnMudnNjb2RlRW5hYmxlZCkge1xuICAgICAgdGhpcy52c2NvZGVDb25maWcgPSBuZXcgVnNDb2RlQ29uZmlnQ2FwU2VydmljZSh0aGlzKTtcbiAgICB9XG4gICAgaWYgKHVwZGF0ZWRPcHRpb25zLmh1c2t5RW5hYmxlZCkge1xuICAgICAgdGhpcy5odXNreUNvbmZpZyA9IG5ldyBIdXNreUNvbmZpZ0NhcFNlcnZpY2UodGhpcyk7XG4gICAgfVxuICAgIGlmICh1cGRhdGVkT3B0aW9ucy5zYW1wbGVDb2RlRW5hYmxlZCkge1xuICAgICAgdGhpcy5zYW1wbGVDb2RlQ29uZmlnID0gbmV3IFNhbXBsZUNvZGVDb25maWdDYXBTZXJ2aWNlKHRoaXMsIHVwZGF0ZWRPcHRpb25zKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgaW5pdGlhbGl6ZUJhc2VDb25maWdzKG9wdGlvbnM6IEJhc2VQcm9qZWN0T3B0aW9ucyk6IHZvaWQge1xuICAgIHN1cGVyLmluaXRpYWxpemVCYXNlQ29uZmlncyhvcHRpb25zKTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBwb3N0U3ludGhlc2l6ZSgpOiB2b2lkIHtcbiAgICBzdXBlci5wb3N0U3ludGhlc2l6ZSgpO1xuICAgIGNvbnNvbGUubG9nKCdDYXBTZXJ2aWNlUHJvamVjdCBwb3N0U3ludGhlc2l6ZScpO1xuICAgIGV4ZWMoJ25weCBwcm9qZW4gZWplY3QnLCAoZXJyb3IsIHN0ZG91dCwgc3RkZXJyKSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgZXhlYyBlcnJvcjogJHtlcnJvcn1gKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coYHN0ZG91dDogJHtzdGRvdXR9YCk7XG4gICAgICBjb25zb2xlLmVycm9yKGBzdGRlcnI6ICR7c3RkZXJyfWApO1xuICAgIH0pO1xuICB9XG59XG4iXX0=