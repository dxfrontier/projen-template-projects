import { Config } from '../config';
import { ProjectTypes, Settings } from '../../types';
/**
 * Base class for implementing all relevant NPM configuration.
 *
 * This class acts as a base for handling NPM configuration within projects.
 */
export declare class NpmConfigBase extends Config {
    protected dependencies: string[];
    protected devDependencies: string[];
    protected peerDependencies: string[];
    protected settings: Settings;
    protected scripts: Record<string, string>;
    constructor(project: ProjectTypes);
    /**
     * Gets the standard dependencies for the project.
     *
     * @returns A list of standard dependencies.
     */
    protected get standardDependencies(): string[];
    /**
     * Gets the standard devDependencies for the project.
     *
     * @returns A list of standard devDependencies.
     */
    protected get standardDevDependencies(): string[];
    /**
     * Gets the standard peerDependencies for the project.
     *
     * @returns A list of standard peerDependencies.
     */
    protected get standardPeerDependencies(): string[];
    /**
     * Gets the standard settings for the project.
     *
     * @returns A settings object.
     */
    protected get standardSettings(): Settings;
    /**
     * Gets the standard npm scripts for the project.
     *
     * @returns A record of script names and their commands.
     */
    protected get standardScripts(): Record<string, string>;
    /**
     * Getter retrieving the npm scripts to be removed from NPM Package.
     * These scripts are added by Projen on project initialization
     * and are not needed for our projects.
     * Overwrite this method if you want to keep the projen standard scripts.
     * @return Projen standard script entries.
     * @protected
     */
    protected get removeScripts(): string[];
    /**
     * Adds custom devDependencies to the project.
     * @param dependencies List of dependencies to add.
     */
    addDependencies(dependencies: string[]): void;
    /**
     * Adds custom devDependencies to the project.
     * @param dependencies List of devDependencies to add.
     */
    addDevDependencies(dependencies: string[]): void;
    /**
     * Adds custom devDependencies to the project.
     * @param dependencies List of peerDependencies to add.
     */
    addPeerDependencies(dependencies: string[]): void;
    /**
     * Adds custom settings to the project.
     * @param settings Record of settings to add.
     */
    addSettings(settings: Settings): void;
    /**
     * Adds custom npm scripts to the project.
     *
     * @param scripts - A record of script names and their commands.
     */
    addScripts(scripts: Record<string, string>): void;
    /**
     * Patches scripts in the `package.json` file.
     * Projen public API is not used as it would
     * create Projen related tasks like `npx projen task` and would not be convenient
     * for projects that need a non Projen related approach on scaffolding.
     *
     * @param scripts - A record of script names and their commands to patch.
     */
    patchScriptsAdd(scripts: Record<string, string>): void;
    /**
     * Patches devDependencies in the `package.json` file.
     *
     * @param devDependencies - A list of development dependencies to patch.
     */
    patchDevDependencyRemove(devDependencies: string[]): void;
    /**
     * Removes the NPM Package scripts associated with Projen NPM Package initialization.
     * Overwrite this method if you want to keep the projen standard scripts.
     * @protected
     */
    removeScriptsOnInit(scripts: string[]): void;
    applyConfig(): void;
}
