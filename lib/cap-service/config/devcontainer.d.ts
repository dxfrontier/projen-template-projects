import { DevContainerConfigBase } from '../../base';
import { ConfigFile } from '../../util/types';
/**
 * Implementing all relevant DevContainer configuration for the CapService project.
 */
export declare class DevContainerConfigCapService extends DevContainerConfigBase {
    protected get additionalScripts(): Record<string, string>;
    protected get configFile(): ConfigFile;
}
