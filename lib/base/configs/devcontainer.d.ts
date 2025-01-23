import { Config } from '../config';
import { Settings } from '../../types/types';
/**
 * Base class for implementing all relevant DevContainer configuration.
 *
 * This class acts as a base for handling DevContainer configuration within projects.
 */
export declare class DevContainerConfigBase extends Config {
    protected get configFile(): Settings;
    protected get additionalIgnorePatterns(): string[];
    registerConfig(): void;
    applyConfig(): void;
}
