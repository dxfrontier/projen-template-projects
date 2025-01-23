"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpmConfigBase = void 0;
const projen_1 = require("projen");
const config_1 = require("../config");
const typescript_1 = require("projen/lib/typescript");
const utils_1 = require("../../utils");
/**
 * Base class for implementing all relevant NPM configuration.
 *
 * This class acts as a base for handling NPM configuration within projects.
 */
class NpmConfigBase extends config_1.Config {
    constructor(project) {
        super(project);
        this.dependencies = [];
        this.devDependencies = [];
        this.peerDependencies = [];
        this.dependencies = [...this.standardDependencies];
        this.devDependencies = [...this.standardDevDependencies];
        this.peerDependencies = [...this.standardPeerDependencies];
        this.settings = this.standardSettings;
        this.scripts = this.standardScripts;
    }
    /**
     * Gets the standard dependencies for the project.
     *
     * @returns A list of standard dependencies.
     */
    get standardDependencies() {
        return [];
    }
    /**
     * Gets the standard devDependencies for the project.
     *
     * @returns A list of standard devDependencies.
     */
    get standardDevDependencies() {
        return [];
    }
    /**
     * Gets the standard peerDependencies for the project.
     *
     * @returns A list of standard peerDependencies.
     */
    get standardPeerDependencies() {
        return [];
    }
    /**
     * Gets the standard settings for the project.
     *
     * @returns A settings object.
     */
    get standardSettings() {
        return {};
    }
    /**
     * Gets the standard npm scripts for the project.
     *
     * @returns A record of script names and their commands.
     */
    get standardScripts() {
        return {};
    }
    /**
     * Getter retrieving the npm scripts to be removed from NPM Package.
     * These scripts are added by Projen on project initialization
     * and are not needed for our projects.
     * Overwrite this method if you want to keep the projen standard scripts.
     * @return Projen standard script entries.
     * @protected
     */
    get removeScripts() {
        return [
            'clobber',
            'compile',
            'default',
            'eject',
            'package',
            'post-compile',
            'post-upgrade',
            'pre-compile',
            'release',
            'test',
            'test:watch',
            'unbump',
            'upgrade',
            'watch',
            'projen',
            'build',
        ];
    }
    /**
     * Adds custom devDependencies to the project.
     * @param dependencies List of dependencies to add.
     */
    addDependencies(dependencies) {
        dependencies.forEach((dep) => {
            if (!this.dependencies.includes(dep)) {
                this.dependencies.push(dep);
            }
        });
    }
    /**
     * Adds custom devDependencies to the project.
     * @param dependencies List of devDependencies to add.
     */
    addDevDependencies(dependencies) {
        dependencies.forEach((dep) => {
            if (!this.devDependencies.includes(dep)) {
                this.devDependencies.push(dep);
            }
        });
    }
    /**
     * Adds custom devDependencies to the project.
     * @param dependencies List of peerDependencies to add.
     */
    addPeerDependencies(dependencies) {
        dependencies.forEach((dep) => {
            if (!this.peerDependencies.includes(dep)) {
                this.peerDependencies.push(dep);
            }
        });
    }
    /**
     * Adds custom settings to the project.
     * @param settings Record of settings to add.
     */
    addSettings(settings) {
        this.settings = { ...this.settings, ...settings };
    }
    /**
     * Adds custom npm scripts to the project.
     *
     * @param scripts - A record of script names and their commands.
     */
    addScripts(scripts) {
        this.scripts = { ...this.scripts, ...scripts };
    }
    /**
     * Patches scripts in the `package.json` file.
     * Projen public API is not used as it would
     * create Projen related tasks like `npx projen task` and would not be convenient
     * for projects that need a non Projen related approach on scaffolding.
     *
     * @param scripts - A record of script names and their commands to patch.
     */
    patchScriptsAdd(scripts) {
        const packageJson = this.project.tryFindObjectFile('package.json');
        for (const script in scripts) {
            packageJson.patch(projen_1.JsonPatch.add(`/scripts/${script}`, scripts[script]));
        }
    }
    /**
     * Patches devDependencies in the `package.json` file.
     *
     * @param devDependencies - A list of development dependencies to patch.
     */
    patchDevDependencyRemove(devDependencies) {
        const packageJson = this.project.tryFindObjectFile('package.json');
        for (const dep of devDependencies) {
            packageJson.patch(projen_1.JsonPatch.remove(`/devDependencies/${dep}`));
        }
    }
    /**
     * Removes the NPM Package scripts associated with Projen NPM Package initialization.
     * Overwrite this method if you want to keep the projen standard scripts.
     * @protected
     */
    removeScriptsOnInit(scripts) {
        for (const script of scripts) {
            if (this.project instanceof typescript_1.TypeScriptProject) {
                this.project.removeScript(script);
            }
        }
    }
    applyConfig() {
        if ((0, utils_1.isValidProject)(this.project)) {
            this.project.addDeps(...this.dependencies);
            this.project.addDevDeps(...this.devDependencies);
            this.project.addPeerDeps(...this.peerDependencies);
            this.project.addFields(this.settings);
        }
        this.patchScriptsAdd(this.scripts);
    }
}
exports.NpmConfigBase = NpmConfigBase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2Jhc2UvY29uZmlncy9ucG0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsbUNBQStDO0FBQy9DLHNDQUFtQztBQUVuQyxzREFBMEQ7QUFDMUQsdUNBQTZDO0FBRTdDOzs7O0dBSUc7QUFDSCxNQUFhLGFBQWMsU0FBUSxlQUFNO0lBT3ZDLFlBQVksT0FBcUI7UUFDL0IsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBUFAsaUJBQVksR0FBYSxFQUFFLENBQUM7UUFDNUIsb0JBQWUsR0FBYSxFQUFFLENBQUM7UUFDL0IscUJBQWdCLEdBQWEsRUFBRSxDQUFDO1FBT3hDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7UUFDM0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDdEMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQ3RDLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxvQkFBb0I7UUFDaEMsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsdUJBQXVCO1FBQ25DLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFjLHdCQUF3QjtRQUNwQyxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBYyxnQkFBZ0I7UUFDNUIsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQWMsZUFBZTtRQUMzQixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsSUFBYyxhQUFhO1FBQ3pCLE9BQU87WUFDTCxTQUFTO1lBQ1QsU0FBUztZQUNULFNBQVM7WUFDVCxPQUFPO1lBQ1AsU0FBUztZQUNULGNBQWM7WUFDZCxjQUFjO1lBQ2QsYUFBYTtZQUNiLFNBQVM7WUFDVCxNQUFNO1lBQ04sWUFBWTtZQUNaLFFBQVE7WUFDUixTQUFTO1lBQ1QsT0FBTztZQUNQLFFBQVE7WUFDUixPQUFPO1NBQ1IsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7SUFDSSxlQUFlLENBQUMsWUFBc0I7UUFDM0MsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUNyQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5QixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksa0JBQWtCLENBQUMsWUFBc0I7UUFDOUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUN4QyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQyxDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksbUJBQW1CLENBQUMsWUFBc0I7UUFDL0MsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbEMsQ0FBQztRQUNILENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7T0FHRztJQUNJLFdBQVcsQ0FBQyxRQUFrQjtRQUNuQyxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsUUFBUSxFQUFFLENBQUM7SUFDcEQsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxVQUFVLENBQUMsT0FBK0I7UUFDL0MsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLE9BQU8sRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksZUFBZSxDQUFDLE9BQStCO1FBQ3BELE1BQU0sV0FBVyxHQUEyQixJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBRTNGLEtBQUssTUFBTSxNQUFNLElBQUksT0FBTyxFQUFFLENBQUM7WUFDN0IsV0FBWSxDQUFDLEtBQUssQ0FBQyxrQkFBUyxDQUFDLEdBQUcsQ0FBQyxZQUFZLE1BQU0sRUFBRSxFQUFFLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0UsQ0FBQztJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksd0JBQXdCLENBQUMsZUFBeUI7UUFDdkQsTUFBTSxXQUFXLEdBQTJCLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFM0YsS0FBSyxNQUFNLEdBQUcsSUFBSSxlQUFlLEVBQUUsQ0FBQztZQUNsQyxXQUFZLENBQUMsS0FBSyxDQUFDLGtCQUFTLENBQUMsTUFBTSxDQUFDLG9CQUFvQixHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbEUsQ0FBQztJQUNILENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksbUJBQW1CLENBQUMsT0FBaUI7UUFDMUMsS0FBSyxNQUFNLE1BQU0sSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUM3QixJQUFJLElBQUksQ0FBQyxPQUFPLFlBQVksOEJBQWlCLEVBQUUsQ0FBQztnQkFDOUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEMsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRWUsV0FBVztRQUN6QixJQUFJLElBQUEsc0JBQWMsRUFBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsT0FBd0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDNUQsSUFBSSxDQUFDLE9BQXdCLENBQUMsVUFBVSxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1lBQ2xFLElBQUksQ0FBQyxPQUF3QixDQUFDLFdBQVcsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxPQUF3QixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUQsQ0FBQztRQUNELElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7Q0FDRjtBQW5NRCxzQ0FtTUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBKc29uUGF0Y2gsIE9iamVjdEZpbGUgfSBmcm9tICdwcm9qZW4nO1xuaW1wb3J0IHsgQ29uZmlnIH0gZnJvbSAnLi4vY29uZmlnJztcbmltcG9ydCB7IFByb2plY3RUeXBlcywgU2V0dGluZ3MgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBUeXBlU2NyaXB0UHJvamVjdCB9IGZyb20gJ3Byb2plbi9saWIvdHlwZXNjcmlwdCc7XG5pbXBvcnQgeyBpc1ZhbGlkUHJvamVjdCB9IGZyb20gJy4uLy4uL3V0aWxzJztcblxuLyoqXG4gKiBCYXNlIGNsYXNzIGZvciBpbXBsZW1lbnRpbmcgYWxsIHJlbGV2YW50IE5QTSBjb25maWd1cmF0aW9uLlxuICpcbiAqIFRoaXMgY2xhc3MgYWN0cyBhcyBhIGJhc2UgZm9yIGhhbmRsaW5nIE5QTSBjb25maWd1cmF0aW9uIHdpdGhpbiBwcm9qZWN0cy5cbiAqL1xuZXhwb3J0IGNsYXNzIE5wbUNvbmZpZ0Jhc2UgZXh0ZW5kcyBDb25maWcge1xuICBwcm90ZWN0ZWQgZGVwZW5kZW5jaWVzOiBzdHJpbmdbXSA9IFtdO1xuICBwcm90ZWN0ZWQgZGV2RGVwZW5kZW5jaWVzOiBzdHJpbmdbXSA9IFtdO1xuICBwcm90ZWN0ZWQgcGVlckRlcGVuZGVuY2llczogc3RyaW5nW10gPSBbXTtcbiAgcHJvdGVjdGVkIHNldHRpbmdzOiBTZXR0aW5ncztcbiAgcHJvdGVjdGVkIHNjcmlwdHM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz47XG5cbiAgY29uc3RydWN0b3IocHJvamVjdDogUHJvamVjdFR5cGVzKSB7XG4gICAgc3VwZXIocHJvamVjdCk7XG5cbiAgICB0aGlzLmRlcGVuZGVuY2llcyA9IFsuLi50aGlzLnN0YW5kYXJkRGVwZW5kZW5jaWVzXTtcbiAgICB0aGlzLmRldkRlcGVuZGVuY2llcyA9IFsuLi50aGlzLnN0YW5kYXJkRGV2RGVwZW5kZW5jaWVzXTtcbiAgICB0aGlzLnBlZXJEZXBlbmRlbmNpZXMgPSBbLi4udGhpcy5zdGFuZGFyZFBlZXJEZXBlbmRlbmNpZXNdO1xuICAgIHRoaXMuc2V0dGluZ3MgPSB0aGlzLnN0YW5kYXJkU2V0dGluZ3M7XG4gICAgdGhpcy5zY3JpcHRzID0gdGhpcy5zdGFuZGFyZFNjcmlwdHM7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgc3RhbmRhcmQgZGVwZW5kZW5jaWVzIGZvciB0aGUgcHJvamVjdC5cbiAgICpcbiAgICogQHJldHVybnMgQSBsaXN0IG9mIHN0YW5kYXJkIGRlcGVuZGVuY2llcy5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc3RhbmRhcmREZXBlbmRlbmNpZXMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBzdGFuZGFyZCBkZXZEZXBlbmRlbmNpZXMgZm9yIHRoZSBwcm9qZWN0LlxuICAgKlxuICAgKiBAcmV0dXJucyBBIGxpc3Qgb2Ygc3RhbmRhcmQgZGV2RGVwZW5kZW5jaWVzLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCBzdGFuZGFyZERldkRlcGVuZGVuY2llcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHN0YW5kYXJkIHBlZXJEZXBlbmRlbmNpZXMgZm9yIHRoZSBwcm9qZWN0LlxuICAgKlxuICAgKiBAcmV0dXJucyBBIGxpc3Qgb2Ygc3RhbmRhcmQgcGVlckRlcGVuZGVuY2llcy5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc3RhbmRhcmRQZWVyRGVwZW5kZW5jaWVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICAvKipcbiAgICogR2V0cyB0aGUgc3RhbmRhcmQgc2V0dGluZ3MgZm9yIHRoZSBwcm9qZWN0LlxuICAgKlxuICAgKiBAcmV0dXJucyBBIHNldHRpbmdzIG9iamVjdC5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc3RhbmRhcmRTZXR0aW5ncygpOiBTZXR0aW5ncyB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIHN0YW5kYXJkIG5wbSBzY3JpcHRzIGZvciB0aGUgcHJvamVjdC5cbiAgICpcbiAgICogQHJldHVybnMgQSByZWNvcmQgb2Ygc2NyaXB0IG5hbWVzIGFuZCB0aGVpciBjb21tYW5kcy5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgc3RhbmRhcmRTY3JpcHRzKCk6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4ge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXR0ZXIgcmV0cmlldmluZyB0aGUgbnBtIHNjcmlwdHMgdG8gYmUgcmVtb3ZlZCBmcm9tIE5QTSBQYWNrYWdlLlxuICAgKiBUaGVzZSBzY3JpcHRzIGFyZSBhZGRlZCBieSBQcm9qZW4gb24gcHJvamVjdCBpbml0aWFsaXphdGlvblxuICAgKiBhbmQgYXJlIG5vdCBuZWVkZWQgZm9yIG91ciBwcm9qZWN0cy5cbiAgICogT3ZlcndyaXRlIHRoaXMgbWV0aG9kIGlmIHlvdSB3YW50IHRvIGtlZXAgdGhlIHByb2plbiBzdGFuZGFyZCBzY3JpcHRzLlxuICAgKiBAcmV0dXJuIFByb2plbiBzdGFuZGFyZCBzY3JpcHQgZW50cmllcy5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCByZW1vdmVTY3JpcHRzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ2Nsb2JiZXInLFxuICAgICAgJ2NvbXBpbGUnLFxuICAgICAgJ2RlZmF1bHQnLFxuICAgICAgJ2VqZWN0JyxcbiAgICAgICdwYWNrYWdlJyxcbiAgICAgICdwb3N0LWNvbXBpbGUnLFxuICAgICAgJ3Bvc3QtdXBncmFkZScsXG4gICAgICAncHJlLWNvbXBpbGUnLFxuICAgICAgJ3JlbGVhc2UnLFxuICAgICAgJ3Rlc3QnLFxuICAgICAgJ3Rlc3Q6d2F0Y2gnLFxuICAgICAgJ3VuYnVtcCcsXG4gICAgICAndXBncmFkZScsXG4gICAgICAnd2F0Y2gnLFxuICAgICAgJ3Byb2plbicsXG4gICAgICAnYnVpbGQnLFxuICAgIF07XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBjdXN0b20gZGV2RGVwZW5kZW5jaWVzIHRvIHRoZSBwcm9qZWN0LlxuICAgKiBAcGFyYW0gZGVwZW5kZW5jaWVzIExpc3Qgb2YgZGVwZW5kZW5jaWVzIHRvIGFkZC5cbiAgICovXG4gIHB1YmxpYyBhZGREZXBlbmRlbmNpZXMoZGVwZW5kZW5jaWVzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIGRlcGVuZGVuY2llcy5mb3JFYWNoKChkZXApID0+IHtcbiAgICAgIGlmICghdGhpcy5kZXBlbmRlbmNpZXMuaW5jbHVkZXMoZGVwKSkge1xuICAgICAgICB0aGlzLmRlcGVuZGVuY2llcy5wdXNoKGRlcCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBjdXN0b20gZGV2RGVwZW5kZW5jaWVzIHRvIHRoZSBwcm9qZWN0LlxuICAgKiBAcGFyYW0gZGVwZW5kZW5jaWVzIExpc3Qgb2YgZGV2RGVwZW5kZW5jaWVzIHRvIGFkZC5cbiAgICovXG4gIHB1YmxpYyBhZGREZXZEZXBlbmRlbmNpZXMoZGVwZW5kZW5jaWVzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIGRlcGVuZGVuY2llcy5mb3JFYWNoKChkZXApID0+IHtcbiAgICAgIGlmICghdGhpcy5kZXZEZXBlbmRlbmNpZXMuaW5jbHVkZXMoZGVwKSkge1xuICAgICAgICB0aGlzLmRldkRlcGVuZGVuY2llcy5wdXNoKGRlcCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBjdXN0b20gZGV2RGVwZW5kZW5jaWVzIHRvIHRoZSBwcm9qZWN0LlxuICAgKiBAcGFyYW0gZGVwZW5kZW5jaWVzIExpc3Qgb2YgcGVlckRlcGVuZGVuY2llcyB0byBhZGQuXG4gICAqL1xuICBwdWJsaWMgYWRkUGVlckRlcGVuZGVuY2llcyhkZXBlbmRlbmNpZXM6IHN0cmluZ1tdKTogdm9pZCB7XG4gICAgZGVwZW5kZW5jaWVzLmZvckVhY2goKGRlcCkgPT4ge1xuICAgICAgaWYgKCF0aGlzLnBlZXJEZXBlbmRlbmNpZXMuaW5jbHVkZXMoZGVwKSkge1xuICAgICAgICB0aGlzLnBlZXJEZXBlbmRlbmNpZXMucHVzaChkZXApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgY3VzdG9tIHNldHRpbmdzIHRvIHRoZSBwcm9qZWN0LlxuICAgKiBAcGFyYW0gc2V0dGluZ3MgUmVjb3JkIG9mIHNldHRpbmdzIHRvIGFkZC5cbiAgICovXG4gIHB1YmxpYyBhZGRTZXR0aW5ncyhzZXR0aW5nczogU2V0dGluZ3MpOiB2b2lkIHtcbiAgICB0aGlzLnNldHRpbmdzID0geyAuLi50aGlzLnNldHRpbmdzLCAuLi5zZXR0aW5ncyB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgY3VzdG9tIG5wbSBzY3JpcHRzIHRvIHRoZSBwcm9qZWN0LlxuICAgKlxuICAgKiBAcGFyYW0gc2NyaXB0cyAtIEEgcmVjb3JkIG9mIHNjcmlwdCBuYW1lcyBhbmQgdGhlaXIgY29tbWFuZHMuXG4gICAqL1xuICBwdWJsaWMgYWRkU2NyaXB0cyhzY3JpcHRzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+KTogdm9pZCB7XG4gICAgdGhpcy5zY3JpcHRzID0geyAuLi50aGlzLnNjcmlwdHMsIC4uLnNjcmlwdHMgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQYXRjaGVzIHNjcmlwdHMgaW4gdGhlIGBwYWNrYWdlLmpzb25gIGZpbGUuXG4gICAqIFByb2plbiBwdWJsaWMgQVBJIGlzIG5vdCB1c2VkIGFzIGl0IHdvdWxkXG4gICAqIGNyZWF0ZSBQcm9qZW4gcmVsYXRlZCB0YXNrcyBsaWtlIGBucHggcHJvamVuIHRhc2tgIGFuZCB3b3VsZCBub3QgYmUgY29udmVuaWVudFxuICAgKiBmb3IgcHJvamVjdHMgdGhhdCBuZWVkIGEgbm9uIFByb2plbiByZWxhdGVkIGFwcHJvYWNoIG9uIHNjYWZmb2xkaW5nLlxuICAgKlxuICAgKiBAcGFyYW0gc2NyaXB0cyAtIEEgcmVjb3JkIG9mIHNjcmlwdCBuYW1lcyBhbmQgdGhlaXIgY29tbWFuZHMgdG8gcGF0Y2guXG4gICAqL1xuICBwdWJsaWMgcGF0Y2hTY3JpcHRzQWRkKHNjcmlwdHM6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4pOiB2b2lkIHtcbiAgICBjb25zdCBwYWNrYWdlSnNvbjogT2JqZWN0RmlsZSB8IHVuZGVmaW5lZCA9IHRoaXMucHJvamVjdC50cnlGaW5kT2JqZWN0RmlsZSgncGFja2FnZS5qc29uJyk7XG5cbiAgICBmb3IgKGNvbnN0IHNjcmlwdCBpbiBzY3JpcHRzKSB7XG4gICAgICBwYWNrYWdlSnNvbiEucGF0Y2goSnNvblBhdGNoLmFkZChgL3NjcmlwdHMvJHtzY3JpcHR9YCwgc2NyaXB0c1tzY3JpcHRdKSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFBhdGNoZXMgZGV2RGVwZW5kZW5jaWVzIGluIHRoZSBgcGFja2FnZS5qc29uYCBmaWxlLlxuICAgKlxuICAgKiBAcGFyYW0gZGV2RGVwZW5kZW5jaWVzIC0gQSBsaXN0IG9mIGRldmVsb3BtZW50IGRlcGVuZGVuY2llcyB0byBwYXRjaC5cbiAgICovXG4gIHB1YmxpYyBwYXRjaERldkRlcGVuZGVuY3lSZW1vdmUoZGV2RGVwZW5kZW5jaWVzOiBzdHJpbmdbXSk6IHZvaWQge1xuICAgIGNvbnN0IHBhY2thZ2VKc29uOiBPYmplY3RGaWxlIHwgdW5kZWZpbmVkID0gdGhpcy5wcm9qZWN0LnRyeUZpbmRPYmplY3RGaWxlKCdwYWNrYWdlLmpzb24nKTtcblxuICAgIGZvciAoY29uc3QgZGVwIG9mIGRldkRlcGVuZGVuY2llcykge1xuICAgICAgcGFja2FnZUpzb24hLnBhdGNoKEpzb25QYXRjaC5yZW1vdmUoYC9kZXZEZXBlbmRlbmNpZXMvJHtkZXB9YCkpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBOUE0gUGFja2FnZSBzY3JpcHRzIGFzc29jaWF0ZWQgd2l0aCBQcm9qZW4gTlBNIFBhY2thZ2UgaW5pdGlhbGl6YXRpb24uXG4gICAqIE92ZXJ3cml0ZSB0aGlzIG1ldGhvZCBpZiB5b3Ugd2FudCB0byBrZWVwIHRoZSBwcm9qZW4gc3RhbmRhcmQgc2NyaXB0cy5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcHVibGljIHJlbW92ZVNjcmlwdHNPbkluaXQoc2NyaXB0czogc3RyaW5nW10pOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IHNjcmlwdCBvZiBzY3JpcHRzKSB7XG4gICAgICBpZiAodGhpcy5wcm9qZWN0IGluc3RhbmNlb2YgVHlwZVNjcmlwdFByb2plY3QpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0LnJlbW92ZVNjcmlwdChzY3JpcHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSBhcHBseUNvbmZpZygpOiB2b2lkIHtcbiAgICBpZiAoaXNWYWxpZFByb2plY3QodGhpcy5wcm9qZWN0KSkge1xuICAgICAgKHRoaXMucHJvamVjdCBhcyBQcm9qZWN0VHlwZXMpLmFkZERlcHMoLi4udGhpcy5kZXBlbmRlbmNpZXMpO1xuICAgICAgKHRoaXMucHJvamVjdCBhcyBQcm9qZWN0VHlwZXMpLmFkZERldkRlcHMoLi4udGhpcy5kZXZEZXBlbmRlbmNpZXMpO1xuICAgICAgKHRoaXMucHJvamVjdCBhcyBQcm9qZWN0VHlwZXMpLmFkZFBlZXJEZXBzKC4uLnRoaXMucGVlckRlcGVuZGVuY2llcyk7XG4gICAgICAodGhpcy5wcm9qZWN0IGFzIFByb2plY3RUeXBlcykuYWRkRmllbGRzKHRoaXMuc2V0dGluZ3MpO1xuICAgIH1cbiAgICB0aGlzLnBhdGNoU2NyaXB0c0FkZCh0aGlzLnNjcmlwdHMpO1xuICB9XG59XG4iXX0=