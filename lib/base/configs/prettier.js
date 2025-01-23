"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrettierConfigBase = void 0;
const projen_1 = require("projen");
const config_1 = require("../config");
const javascript_1 = require("projen/lib/javascript");
const utils_1 = require("../../utils");
/**
 * Base class for implementing all relevant Prettier configuration.
 *
 * This class acts as a base for handling Prettier configuration within projects.
 */
class PrettierConfigBase extends config_1.Config {
    constructor(project) {
        super(project);
        this.ignorePatterns = this.standardIgnorePatterns;
    }
    /**
     * Gets the standard ignore patterns required for configuration.
     *
     * @returns A list of ignore patterns.
     */
    get standardIgnorePatterns() {
        return ['/.prettierignore', '/.prettierrc.json'];
    }
    get additionalDevDependencies() {
        return ['prettier@^3.4.2'];
    }
    get additionalScripts() {
        return {
            prettier: 'prettier . --write',
        };
    }
    get configFile() {
        return {
            '.prettierrc.json': {
                overrides: [
                    {
                        files: '*.*',
                        options: {
                            semi: true,
                            trailingComma: javascript_1.TrailingComma.ALL,
                            singleQuote: true,
                            printWidth: 120,
                            tabWidth: 2,
                        },
                    },
                ],
            },
        };
    }
    get ignoreFile() {
        return {
            '.prettierignore': [...this.ignorePatterns],
        };
    }
    /**
     * Adds custom ignore patterns to the project's configuration.
     *
     * @param patterns - An array of file or directory patterns to be ignored.
     */
    addIgnorePatterns(patterns) {
        this.ignorePatterns = [...this.ignorePatterns, ...patterns];
    }
    /**
     * Creates the configuration file in the project directory.
     */
    createConfig() {
        const filePath = Object.keys(this.configFile)[0];
        new projen_1.JsonFile(this.project, filePath, {
            obj: this.configFile[filePath],
        });
    }
    /**
     * Creates the ignore file in the project directory.
     */
    createIgnore() {
        const filePath = Object.keys(this.ignoreFile)[0];
        new projen_1.TextFile(this.project, filePath, {
            lines: this.ignoreFile[filePath],
        });
    }
    registerConfig() {
        if ((0, utils_1.isValidProject)(this.project)) {
            this.project.npmConfig?.addDevDependencies(this.additionalDevDependencies);
            this.project.npmConfig?.addScripts(this.additionalScripts);
        }
    }
    applyConfig() {
        this.createConfig();
        this.createIgnore();
    }
}
exports.PrettierConfigBase = PrettierConfigBase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJldHRpZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYmFzZS9jb25maWdzL3ByZXR0aWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLG1DQUE0QztBQUM1QyxzQ0FBbUM7QUFDbkMsc0RBQXNEO0FBRXRELHVDQUE2QztBQUU3Qzs7OztHQUlHO0FBQ0gsTUFBYSxrQkFBbUIsU0FBUSxlQUFNO0lBRzVDLFlBQVksT0FBcUI7UUFDL0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRWYsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUM7SUFDcEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLHNCQUFzQjtRQUNsQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsbUJBQW1CLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUQsSUFBdUIseUJBQXlCO1FBQzlDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxJQUF1QixpQkFBaUI7UUFDdEMsT0FBTztZQUNMLFFBQVEsRUFBRSxvQkFBb0I7U0FDL0IsQ0FBQztJQUNKLENBQUM7SUFFRCxJQUF1QixVQUFVO1FBQy9CLE9BQU87WUFDTCxrQkFBa0IsRUFBRTtnQkFDbEIsU0FBUyxFQUFFO29CQUNUO3dCQUNFLEtBQUssRUFBRSxLQUFLO3dCQUNaLE9BQU8sRUFBRTs0QkFDUCxJQUFJLEVBQUUsSUFBSTs0QkFDVixhQUFhLEVBQUUsMEJBQWEsQ0FBQyxHQUFHOzRCQUNoQyxXQUFXLEVBQUUsSUFBSTs0QkFDakIsVUFBVSxFQUFFLEdBQUc7NEJBQ2YsUUFBUSxFQUFFLENBQUM7eUJBQ1o7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBdUIsVUFBVTtRQUMvQixPQUFPO1lBQ0wsaUJBQWlCLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7U0FDNUMsQ0FBQztJQUNKLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksaUJBQWlCLENBQUMsUUFBa0I7UUFDekMsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLGNBQWMsRUFBRSxHQUFHLFFBQVEsQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRDs7T0FFRztJQUNPLFlBQVk7UUFDcEIsTUFBTSxRQUFRLEdBQVcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekQsSUFBSSxpQkFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFO1lBQ25DLEdBQUcsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztTQUMvQixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDTyxZQUFZO1FBQ3BCLE1BQU0sUUFBUSxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELElBQUksaUJBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRTtZQUNuQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUM7U0FDakMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVlLGNBQWM7UUFDNUIsSUFBSSxJQUFBLHNCQUFjLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLE9BQXdCLENBQUMsU0FBUyxFQUFFLGtCQUFrQixDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQzVGLElBQUksQ0FBQyxPQUF3QixDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDL0UsQ0FBQztJQUNILENBQUM7SUFFZSxXQUFXO1FBQ3pCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDdEIsQ0FBQztDQUNGO0FBN0ZELGdEQTZGQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEpzb25GaWxlLCBUZXh0RmlsZSB9IGZyb20gJ3Byb2plbic7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgVHJhaWxpbmdDb21tYSB9IGZyb20gJ3Byb2plbi9saWIvamF2YXNjcmlwdCc7XG5pbXBvcnQgeyBQcm9qZWN0VHlwZXMsIFNldHRpbmdzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgaXNWYWxpZFByb2plY3QgfSBmcm9tICcuLi8uLi91dGlscyc7XG5cbi8qKlxuICogQmFzZSBjbGFzcyBmb3IgaW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBQcmV0dGllciBjb25maWd1cmF0aW9uLlxuICpcbiAqIFRoaXMgY2xhc3MgYWN0cyBhcyBhIGJhc2UgZm9yIGhhbmRsaW5nIFByZXR0aWVyIGNvbmZpZ3VyYXRpb24gd2l0aGluIHByb2plY3RzLlxuICovXG5leHBvcnQgY2xhc3MgUHJldHRpZXJDb25maWdCYXNlIGV4dGVuZHMgQ29uZmlnIHtcbiAgcHJvdGVjdGVkIGlnbm9yZVBhdHRlcm5zOiBzdHJpbmdbXTtcblxuICBjb25zdHJ1Y3Rvcihwcm9qZWN0OiBQcm9qZWN0VHlwZXMpIHtcbiAgICBzdXBlcihwcm9qZWN0KTtcblxuICAgIHRoaXMuaWdub3JlUGF0dGVybnMgPSB0aGlzLnN0YW5kYXJkSWdub3JlUGF0dGVybnM7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgc3RhbmRhcmQgaWdub3JlIHBhdHRlcm5zIHJlcXVpcmVkIGZvciBjb25maWd1cmF0aW9uLlxuICAgKlxuICAgKiBAcmV0dXJucyBBIGxpc3Qgb2YgaWdub3JlIHBhdHRlcm5zLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzdGFuZGFyZElnbm9yZVBhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gWycvLnByZXR0aWVyaWdub3JlJywgJy8ucHJldHRpZXJyYy5qc29uJ107XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxEZXZEZXBlbmRlbmNpZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbJ3ByZXR0aWVyQF4zLjQuMiddO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsU2NyaXB0cygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgICByZXR1cm4ge1xuICAgICAgcHJldHRpZXI6ICdwcmV0dGllciAuIC0td3JpdGUnLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGNvbmZpZ0ZpbGUoKTogU2V0dGluZ3Mge1xuICAgIHJldHVybiB7XG4gICAgICAnLnByZXR0aWVycmMuanNvbic6IHtcbiAgICAgICAgb3ZlcnJpZGVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgZmlsZXM6ICcqLionLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICBzZW1pOiB0cnVlLFxuICAgICAgICAgICAgICB0cmFpbGluZ0NvbW1hOiBUcmFpbGluZ0NvbW1hLkFMTCxcbiAgICAgICAgICAgICAgc2luZ2xlUXVvdGU6IHRydWUsXG4gICAgICAgICAgICAgIHByaW50V2lkdGg6IDEyMCxcbiAgICAgICAgICAgICAgdGFiV2lkdGg6IDIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGlnbm9yZUZpbGUoKTogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+IHtcbiAgICByZXR1cm4ge1xuICAgICAgJy5wcmV0dGllcmlnbm9yZSc6IFsuLi50aGlzLmlnbm9yZVBhdHRlcm5zXSxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgY3VzdG9tIGlnbm9yZSBwYXR0ZXJucyB0byB0aGUgcHJvamVjdCdzIGNvbmZpZ3VyYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSBwYXR0ZXJucyAtIEFuIGFycmF5IG9mIGZpbGUgb3IgZGlyZWN0b3J5IHBhdHRlcm5zIHRvIGJlIGlnbm9yZWQuXG4gICAqL1xuICBwdWJsaWMgYWRkSWdub3JlUGF0dGVybnMocGF0dGVybnM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgdGhpcy5pZ25vcmVQYXR0ZXJucyA9IFsuLi50aGlzLmlnbm9yZVBhdHRlcm5zLCAuLi5wYXR0ZXJuc107XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgY29uZmlndXJhdGlvbiBmaWxlIGluIHRoZSBwcm9qZWN0IGRpcmVjdG9yeS5cbiAgICovXG4gIHByb3RlY3RlZCBjcmVhdGVDb25maWcoKTogdm9pZCB7XG4gICAgY29uc3QgZmlsZVBhdGg6IHN0cmluZyA9IE9iamVjdC5rZXlzKHRoaXMuY29uZmlnRmlsZSlbMF07XG4gICAgbmV3IEpzb25GaWxlKHRoaXMucHJvamVjdCwgZmlsZVBhdGgsIHtcbiAgICAgIG9iajogdGhpcy5jb25maWdGaWxlW2ZpbGVQYXRoXSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBpZ25vcmUgZmlsZSBpbiB0aGUgcHJvamVjdCBkaXJlY3RvcnkuXG4gICAqL1xuICBwcm90ZWN0ZWQgY3JlYXRlSWdub3JlKCk6IHZvaWQge1xuICAgIGNvbnN0IGZpbGVQYXRoOiBzdHJpbmcgPSBPYmplY3Qua2V5cyh0aGlzLmlnbm9yZUZpbGUpWzBdO1xuICAgIG5ldyBUZXh0RmlsZSh0aGlzLnByb2plY3QsIGZpbGVQYXRoLCB7XG4gICAgICBsaW5lczogdGhpcy5pZ25vcmVGaWxlW2ZpbGVQYXRoXSxcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSByZWdpc3RlckNvbmZpZygpOiB2b2lkIHtcbiAgICBpZiAoaXNWYWxpZFByb2plY3QodGhpcy5wcm9qZWN0KSkge1xuICAgICAgKHRoaXMucHJvamVjdCBhcyBQcm9qZWN0VHlwZXMpLm5wbUNvbmZpZz8uYWRkRGV2RGVwZW5kZW5jaWVzKHRoaXMuYWRkaXRpb25hbERldkRlcGVuZGVuY2llcyk7XG4gICAgICAodGhpcy5wcm9qZWN0IGFzIFByb2plY3RUeXBlcykubnBtQ29uZmlnPy5hZGRTY3JpcHRzKHRoaXMuYWRkaXRpb25hbFNjcmlwdHMpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBhcHBseUNvbmZpZygpOiB2b2lkIHtcbiAgICB0aGlzLmNyZWF0ZUNvbmZpZygpO1xuICAgIHRoaXMuY3JlYXRlSWdub3JlKCk7XG4gIH1cbn1cbiJdfQ==