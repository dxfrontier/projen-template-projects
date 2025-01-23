"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VsCodeConfigBase = void 0;
const projen_1 = require("projen");
const config_1 = require("../config");
const utils_1 = require("../../utils");
/**
 * Base class for implementing all relevant VS Code configuration.
 *
 * This class acts as a base for handling VS Code configuration within projects.
 */
class VsCodeConfigBase extends config_1.Config {
    /**
     * Gets the config file to be added to the project's configuration.
     *
     * @returns A record of the having the path to the file as key and the content as value.
     */
    get configFile() {
        return {
            '.vscode/settings.json': {
                'editor.tabSize': 2,
                'editor.stickyTabStops': true,
                'typescript.inlayHints.parameterNames.enabled': 'all',
                'typescript.inlayHints.enumMemberValues.enabled': true,
                'typescript.inlayHints.variableTypes.enabled': true,
                'typescript.inlayHints.propertyDeclarationTypes.enabled': true,
                'javascript.inlayHints.parameterNames.suppressWhenArgumentMatchesName': false,
                'javascript.inlayHints.variableTypes.suppressWhenTypeMatchesName': false,
                'typescript.inlayHints.functionLikeReturnTypes.enabled': true,
                'typescript.inlayHints.parameterTypes.enabled': true,
                'editor.inlayHints.fontSize': 10,
                'editor.inlayHints.padding': true,
                'editor.formatOnSave': true,
                'editor.formatOnPaste': true,
            },
        };
    }
    get additionalIgnorePatterns() {
        const filePath = Object.keys(this.configFile)[0];
        return [`/${filePath}`];
    }
    registerConfig() {
        if ((0, utils_1.isValidProject)(this.project)) {
            this.project.prettierConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
        }
    }
    applyConfig() {
        const filePath = Object.keys(this.configFile)[0];
        new projen_1.JsonFile(this.project, filePath, {
            obj: this.configFile[filePath],
        });
    }
}
exports.VsCodeConfigBase = VsCodeConfigBase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnNjb2RlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Jhc2UvY29uZmlncy92c2NvZGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQWtDO0FBQ2xDLHNDQUFtQztBQUVuQyx1Q0FBNkM7QUFFN0M7Ozs7R0FJRztBQUNILE1BQWEsZ0JBQWlCLFNBQVEsZUFBTTtJQUMxQzs7OztPQUlHO0lBQ0gsSUFBYyxVQUFVO1FBQ3RCLE9BQU87WUFDTCx1QkFBdUIsRUFBRTtnQkFDdkIsZ0JBQWdCLEVBQUUsQ0FBQztnQkFDbkIsdUJBQXVCLEVBQUUsSUFBSTtnQkFDN0IsOENBQThDLEVBQUUsS0FBSztnQkFDckQsZ0RBQWdELEVBQUUsSUFBSTtnQkFDdEQsNkNBQTZDLEVBQUUsSUFBSTtnQkFDbkQsd0RBQXdELEVBQUUsSUFBSTtnQkFDOUQsc0VBQXNFLEVBQUUsS0FBSztnQkFDN0UsaUVBQWlFLEVBQUUsS0FBSztnQkFDeEUsdURBQXVELEVBQUUsSUFBSTtnQkFDN0QsOENBQThDLEVBQUUsSUFBSTtnQkFDcEQsNEJBQTRCLEVBQUUsRUFBRTtnQkFDaEMsMkJBQTJCLEVBQUUsSUFBSTtnQkFDakMscUJBQXFCLEVBQUUsSUFBSTtnQkFDM0Isc0JBQXNCLEVBQUUsSUFBSTthQUM3QjtTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBdUIsd0JBQXdCO1FBQzdDLE1BQU0sUUFBUSxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELE9BQU8sQ0FBQyxJQUFJLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVlLGNBQWM7UUFDNUIsSUFBSSxJQUFBLHNCQUFjLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLE9BQXdCLENBQUMsY0FBYyxFQUFFLGlCQUFpQixDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQ2xHLENBQUM7SUFDSCxDQUFDO0lBRWUsV0FBVztRQUN6QixNQUFNLFFBQVEsR0FBVyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxJQUFJLGlCQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUU7WUFDbkMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO1NBQy9CLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRjtBQTVDRCw0Q0E0Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBKc29uRmlsZSB9IGZyb20gJ3Byb2plbic7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuLi9jb25maWcnO1xuaW1wb3J0IHsgUHJvamVjdFR5cGVzLCBTZXR0aW5ncyB9IGZyb20gJy4uLy4uL3R5cGVzJztcbmltcG9ydCB7IGlzVmFsaWRQcm9qZWN0IH0gZnJvbSAnLi4vLi4vdXRpbHMnO1xuXG4vKipcbiAqIEJhc2UgY2xhc3MgZm9yIGltcGxlbWVudGluZyBhbGwgcmVsZXZhbnQgVlMgQ29kZSBjb25maWd1cmF0aW9uLlxuICpcbiAqIFRoaXMgY2xhc3MgYWN0cyBhcyBhIGJhc2UgZm9yIGhhbmRsaW5nIFZTIENvZGUgY29uZmlndXJhdGlvbiB3aXRoaW4gcHJvamVjdHMuXG4gKi9cbmV4cG9ydCBjbGFzcyBWc0NvZGVDb25maWdCYXNlIGV4dGVuZHMgQ29uZmlnIHtcbiAgLyoqXG4gICAqIEdldHMgdGhlIGNvbmZpZyBmaWxlIHRvIGJlIGFkZGVkIHRvIHRoZSBwcm9qZWN0J3MgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogQHJldHVybnMgQSByZWNvcmQgb2YgdGhlIGhhdmluZyB0aGUgcGF0aCB0byB0aGUgZmlsZSBhcyBrZXkgYW5kIHRoZSBjb250ZW50IGFzIHZhbHVlLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBjb25maWdGaWxlKCk6IFNldHRpbmdzIHtcbiAgICByZXR1cm4ge1xuICAgICAgJy52c2NvZGUvc2V0dGluZ3MuanNvbic6IHtcbiAgICAgICAgJ2VkaXRvci50YWJTaXplJzogMixcbiAgICAgICAgJ2VkaXRvci5zdGlja3lUYWJTdG9wcyc6IHRydWUsXG4gICAgICAgICd0eXBlc2NyaXB0LmlubGF5SGludHMucGFyYW1ldGVyTmFtZXMuZW5hYmxlZCc6ICdhbGwnLFxuICAgICAgICAndHlwZXNjcmlwdC5pbmxheUhpbnRzLmVudW1NZW1iZXJWYWx1ZXMuZW5hYmxlZCc6IHRydWUsXG4gICAgICAgICd0eXBlc2NyaXB0LmlubGF5SGludHMudmFyaWFibGVUeXBlcy5lbmFibGVkJzogdHJ1ZSxcbiAgICAgICAgJ3R5cGVzY3JpcHQuaW5sYXlIaW50cy5wcm9wZXJ0eURlY2xhcmF0aW9uVHlwZXMuZW5hYmxlZCc6IHRydWUsXG4gICAgICAgICdqYXZhc2NyaXB0LmlubGF5SGludHMucGFyYW1ldGVyTmFtZXMuc3VwcHJlc3NXaGVuQXJndW1lbnRNYXRjaGVzTmFtZSc6IGZhbHNlLFxuICAgICAgICAnamF2YXNjcmlwdC5pbmxheUhpbnRzLnZhcmlhYmxlVHlwZXMuc3VwcHJlc3NXaGVuVHlwZU1hdGNoZXNOYW1lJzogZmFsc2UsXG4gICAgICAgICd0eXBlc2NyaXB0LmlubGF5SGludHMuZnVuY3Rpb25MaWtlUmV0dXJuVHlwZXMuZW5hYmxlZCc6IHRydWUsXG4gICAgICAgICd0eXBlc2NyaXB0LmlubGF5SGludHMucGFyYW1ldGVyVHlwZXMuZW5hYmxlZCc6IHRydWUsXG4gICAgICAgICdlZGl0b3IuaW5sYXlIaW50cy5mb250U2l6ZSc6IDEwLFxuICAgICAgICAnZWRpdG9yLmlubGF5SGludHMucGFkZGluZyc6IHRydWUsXG4gICAgICAgICdlZGl0b3IuZm9ybWF0T25TYXZlJzogdHJ1ZSxcbiAgICAgICAgJ2VkaXRvci5mb3JtYXRPblBhc3RlJzogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCBmaWxlUGF0aDogc3RyaW5nID0gT2JqZWN0LmtleXModGhpcy5jb25maWdGaWxlKVswXTtcbiAgICByZXR1cm4gW2AvJHtmaWxlUGF0aH1gXTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSByZWdpc3RlckNvbmZpZygpOiB2b2lkIHtcbiAgICBpZiAoaXNWYWxpZFByb2plY3QodGhpcy5wcm9qZWN0KSkge1xuICAgICAgKHRoaXMucHJvamVjdCBhcyBQcm9qZWN0VHlwZXMpLnByZXR0aWVyQ29uZmlnPy5hZGRJZ25vcmVQYXR0ZXJucyh0aGlzLmFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJucyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG92ZXJyaWRlIGFwcGx5Q29uZmlnKCk6IHZvaWQge1xuICAgIGNvbnN0IGZpbGVQYXRoOiBzdHJpbmcgPSBPYmplY3Qua2V5cyh0aGlzLmNvbmZpZ0ZpbGUpWzBdO1xuICAgIG5ldyBKc29uRmlsZSh0aGlzLnByb2plY3QsIGZpbGVQYXRoLCB7XG4gICAgICBvYmo6IHRoaXMuY29uZmlnRmlsZVtmaWxlUGF0aF0sXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==