import { Config } from '../config';
import { Settings } from '../../types/types';
/**
 * Base class for implementing all relevant CommitLint configuration.
 *
 * This class acts as a base for handling CommitLint configuration within projects.
 */
export declare class CommitLintConfigBase extends Config {
    protected get additionalDevDependencies(): string[];
    protected get additionalSettings(): Settings;
    protected get additionalScripts(): Record<string, string>;
    protected get additionalIgnorePatterns(): string[];
    protected get configFile(): Record<string, string[]>;
    registerConfig(): void;
    applyConfig(): void;
}
