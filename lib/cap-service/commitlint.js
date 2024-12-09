"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommitLint = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const base_1 = require("../base");
/**
 * CommitLint builder implementing all relevant configuration for the project.
 */
class CommitLint extends base_1.CommitLintBase {
    /**
     * Initializes the CommitLint builder.
     * It calls the `initialize()` method immediately after invoking `super(project)`
     * to ensure that all necessary configuration steps are applied.
     * @param project The project to configure CommitLint for.
     */
    constructor(project) {
        super(project);
        this.initialize();
    }
    /**
     * @override
     */
    get npmSettings() {
        return {
            '**/*.{ts,tsx}': ['npm run eslint', 'npm run prettier', 'npm run prettier:cds'],
        };
    }
}
exports.CommitLint = CommitLint;
_a = JSII_RTTI_SYMBOL_1;
CommitLint[_a] = { fqn: "@dxfrontier/projen-template-projects.CommitLint", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWl0bGludC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYXAtc2VydmljZS9jb21taXRsaW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsa0NBQWdFO0FBR2hFOztHQUVHO0FBQ0gsTUFBYSxVQUFXLFNBQVEscUJBQWM7SUFDNUM7Ozs7O09BS0c7SUFDSCxZQUFZLE9BQThCO1FBQ3hDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFjLFdBQVc7UUFDdkIsT0FBTztZQUNMLGVBQWUsRUFBRSxDQUFDLGdCQUFnQixFQUFFLGtCQUFrQixFQUFFLHNCQUFzQixDQUFDO1NBQ2hGLENBQUM7SUFDSixDQUFDOztBQW5CSCxnQ0FvQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21taXRMaW50QmFzZSwgVHlwZVNjcmlwdFByb2plY3RCYXNlIH0gZnJvbSAnLi4vYmFzZSc7XG5pbXBvcnQgeyBMaW50U3RhZ2VkQ29uZmlnIH0gZnJvbSAnLi4vdHlwZXMnO1xuXG4vKipcbiAqIENvbW1pdExpbnQgYnVpbGRlciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBwcm9qZWN0LlxuICovXG5leHBvcnQgY2xhc3MgQ29tbWl0TGludCBleHRlbmRzIENvbW1pdExpbnRCYXNlIHtcbiAgLyoqXG4gICAqIEluaXRpYWxpemVzIHRoZSBDb21taXRMaW50IGJ1aWxkZXIuXG4gICAqIEl0IGNhbGxzIHRoZSBgaW5pdGlhbGl6ZSgpYCBtZXRob2QgaW1tZWRpYXRlbHkgYWZ0ZXIgaW52b2tpbmcgYHN1cGVyKHByb2plY3QpYFxuICAgKiB0byBlbnN1cmUgdGhhdCBhbGwgbmVjZXNzYXJ5IGNvbmZpZ3VyYXRpb24gc3RlcHMgYXJlIGFwcGxpZWQuXG4gICAqIEBwYXJhbSBwcm9qZWN0IFRoZSBwcm9qZWN0IHRvIGNvbmZpZ3VyZSBDb21taXRMaW50IGZvci5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHByb2plY3Q6IFR5cGVTY3JpcHRQcm9qZWN0QmFzZSkge1xuICAgIHN1cGVyKHByb2plY3QpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBvdmVycmlkZVxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBucG1TZXR0aW5ncygpOiBMaW50U3RhZ2VkQ29uZmlnIHtcbiAgICByZXR1cm4ge1xuICAgICAgJyoqLyoue3RzLHRzeH0nOiBbJ25wbSBydW4gZXNsaW50JywgJ25wbSBydW4gcHJldHRpZXInLCAnbnBtIHJ1biBwcmV0dGllcjpjZHMnXSxcbiAgICB9O1xuICB9XG59XG4iXX0=