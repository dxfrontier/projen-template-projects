"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.JestConfigCapService = void 0;
const JSII_RTTI_SYMBOL_1 = Symbol.for("jsii.rtti");
const jest_1 = require("../base/jest");
const utils_1 = require("../utils");
/**
 * Implementing all relevant Jest configuration for the CapService project.
 */
class JestConfigCapService extends jest_1.JestConfigBase {
    get additionalDevDependencies() {
        return ['@types/jest@^29.5.14', 'jest@^29.7.0', 'jest-junit@^16.0.0', 'ts-jest@^29.2.5'];
    }
    get additionalScripts() {
        return {
            test: 'jest --passWithNoTests --updateSnapshot',
            'test:watch': 'jest --watch',
        };
    }
    get additionalSettings() {
        return {
            jest: {
                coverageProvider: 'v8',
                testMatch: [
                    '<rootDir>/@(src|test)/**/*(*.)@(spec|test).ts?(x)',
                    '<rootDir>/@(src|test)/**/__tests__/**/*.ts?(x)',
                    '<rootDir>/@(projenrc)/**/*(*.)@(spec|test).ts?(x)',
                    '<rootDir>/@(projenrc)/**/__tests__/**/*.ts?(x)',
                ],
                clearMocks: true,
                collectCoverage: true,
                coverageReporters: ['json', 'lcov', 'clover', 'cobertura', 'text'],
                coverageDirectory: 'coverage',
                coveragePathIgnorePatterns: ['/node_modules/'],
                testPathIgnorePatterns: ['/node_modules/'],
                watchPathIgnorePatterns: ['/node_modules/'],
                reporters: [
                    'default',
                    [
                        'jest-junit',
                        {
                            outputDirectory: 'test-reports',
                        },
                    ],
                ],
                transform: {
                    '^.+\\.[t]sx?$': [
                        'ts-jest',
                        {
                            tsconfig: this.project.typescriptConfig?.configFileName,
                        },
                    ],
                },
            },
        };
    }
    get additionalIgnorePatterns() {
        return ['/coverage/', '/test-reports/', '/junit.xml'];
    }
    registerConfig() {
        if ((0, utils_1.isValidProject)(this.project)) {
            this.project.npmConfig?.addDevDependencies(this.additionalDevDependencies);
            this.project.npmConfig?.addScripts(this.additionalScripts);
            this.project.npmConfig?.addSettings(this.additionalSettings);
            this.project.prettierConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
            this.project.gitConfig?.addIgnorePatterns(this.additionalIgnorePatterns);
        }
    }
}
exports.JestConfigCapService = JestConfigCapService;
_a = JSII_RTTI_SYMBOL_1;
JestConfigCapService[_a] = { fqn: "@dxfrontier/projen-template-projects.JestConfigCapService", version: "0.0.0" };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jYXAtc2VydmljZS9qZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsdUNBQThDO0FBRzlDLG9DQUEwQztBQUUxQzs7R0FFRztBQUNILE1BQWEsb0JBQXFCLFNBQVEscUJBQWM7SUFDdEQsSUFBdUIseUJBQXlCO1FBQzlDLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxjQUFjLEVBQUUsb0JBQW9CLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBRUQsSUFBdUIsaUJBQWlCO1FBQ3RDLE9BQU87WUFDTCxJQUFJLEVBQUUseUNBQXlDO1lBQy9DLFlBQVksRUFBRSxjQUFjO1NBQzdCLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBdUIsa0JBQWtCO1FBQ3ZDLE9BQU87WUFDTCxJQUFJLEVBQUU7Z0JBQ0osZ0JBQWdCLEVBQUUsSUFBSTtnQkFDdEIsU0FBUyxFQUFFO29CQUNULG1EQUFtRDtvQkFDbkQsZ0RBQWdEO29CQUNoRCxtREFBbUQ7b0JBQ25ELGdEQUFnRDtpQkFDakQ7Z0JBQ0QsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCLGVBQWUsRUFBRSxJQUFJO2dCQUNyQixpQkFBaUIsRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxNQUFNLENBQUM7Z0JBQ2xFLGlCQUFpQixFQUFFLFVBQVU7Z0JBQzdCLDBCQUEwQixFQUFFLENBQUMsZ0JBQWdCLENBQUM7Z0JBQzlDLHNCQUFzQixFQUFFLENBQUMsZ0JBQWdCLENBQUM7Z0JBQzFDLHVCQUF1QixFQUFFLENBQUMsZ0JBQWdCLENBQUM7Z0JBQzNDLFNBQVMsRUFBRTtvQkFDVCxTQUFTO29CQUNUO3dCQUNFLFlBQVk7d0JBQ1o7NEJBQ0UsZUFBZSxFQUFFLGNBQWM7eUJBQ2hDO3FCQUNGO2lCQUNGO2dCQUNELFNBQVMsRUFBRTtvQkFDVCxlQUFlLEVBQUU7d0JBQ2YsU0FBUzt3QkFDVDs0QkFDRSxRQUFRLEVBQUcsSUFBSSxDQUFDLE9BQXdCLENBQUMsZ0JBQWdCLEVBQUUsY0FBYzt5QkFDMUU7cUJBQ0Y7aUJBQ0Y7YUFDRjtTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsSUFBdUIsd0JBQXdCO1FBQzdDLE9BQU8sQ0FBQyxZQUFZLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVlLGNBQWM7UUFDNUIsSUFBSSxJQUFBLHNCQUFjLEVBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLE9BQXdCLENBQUMsU0FBUyxFQUFFLGtCQUFrQixDQUFDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1lBQzVGLElBQUksQ0FBQyxPQUF3QixDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7WUFDNUUsSUFBSSxDQUFDLE9BQXdCLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztZQUM5RSxJQUFJLENBQUMsT0FBd0IsQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUM7WUFDL0YsSUFBSSxDQUFDLE9BQXdCLENBQUMsU0FBUyxFQUFFLGlCQUFpQixDQUFDLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO1FBQzdGLENBQUM7SUFDSCxDQUFDOztBQTlESCxvREErREMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBKZXN0Q29uZmlnQmFzZSB9IGZyb20gJy4uL2Jhc2UvamVzdCc7XG5pbXBvcnQgeyBQcm9qZWN0VHlwZXMgfSBmcm9tICcuLi90eXBlcy9wcm9qZWN0JztcbmltcG9ydCB7IFNldHRpbmdzIH0gZnJvbSAnLi4vdHlwZXMvdHlwZXMnO1xuaW1wb3J0IHsgaXNWYWxpZFByb2plY3QgfSBmcm9tICcuLi91dGlscyc7XG5cbi8qKlxuICogSW1wbGVtZW50aW5nIGFsbCByZWxldmFudCBKZXN0IGNvbmZpZ3VyYXRpb24gZm9yIHRoZSBDYXBTZXJ2aWNlIHByb2plY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBKZXN0Q29uZmlnQ2FwU2VydmljZSBleHRlbmRzIEplc3RDb25maWdCYXNlIHtcbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsRGV2RGVwZW5kZW5jaWVzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gWydAdHlwZXMvamVzdEBeMjkuNS4xNCcsICdqZXN0QF4yOS43LjAnLCAnamVzdC1qdW5pdEBeMTYuMC4wJywgJ3RzLWplc3RAXjI5LjIuNSddO1xuICB9XG5cbiAgcHJvdGVjdGVkIG92ZXJyaWRlIGdldCBhZGRpdGlvbmFsU2NyaXB0cygpOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+IHtcbiAgICByZXR1cm4ge1xuICAgICAgdGVzdDogJ2plc3QgLS1wYXNzV2l0aE5vVGVzdHMgLS11cGRhdGVTbmFwc2hvdCcsXG4gICAgICAndGVzdDp3YXRjaCc6ICdqZXN0IC0td2F0Y2gnLFxuICAgIH07XG4gIH1cblxuICBwcm90ZWN0ZWQgb3ZlcnJpZGUgZ2V0IGFkZGl0aW9uYWxTZXR0aW5ncygpOiBTZXR0aW5ncyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGplc3Q6IHtcbiAgICAgICAgY292ZXJhZ2VQcm92aWRlcjogJ3Y4JyxcbiAgICAgICAgdGVzdE1hdGNoOiBbXG4gICAgICAgICAgJzxyb290RGlyPi9AKHNyY3x0ZXN0KS8qKi8qKCouKUAoc3BlY3x0ZXN0KS50cz8oeCknLFxuICAgICAgICAgICc8cm9vdERpcj4vQChzcmN8dGVzdCkvKiovX190ZXN0c19fLyoqLyoudHM/KHgpJyxcbiAgICAgICAgICAnPHJvb3REaXI+L0AocHJvamVucmMpLyoqLyooKi4pQChzcGVjfHRlc3QpLnRzPyh4KScsXG4gICAgICAgICAgJzxyb290RGlyPi9AKHByb2plbnJjKS8qKi9fX3Rlc3RzX18vKiovKi50cz8oeCknLFxuICAgICAgICBdLFxuICAgICAgICBjbGVhck1vY2tzOiB0cnVlLFxuICAgICAgICBjb2xsZWN0Q292ZXJhZ2U6IHRydWUsXG4gICAgICAgIGNvdmVyYWdlUmVwb3J0ZXJzOiBbJ2pzb24nLCAnbGNvdicsICdjbG92ZXInLCAnY29iZXJ0dXJhJywgJ3RleHQnXSxcbiAgICAgICAgY292ZXJhZ2VEaXJlY3Rvcnk6ICdjb3ZlcmFnZScsXG4gICAgICAgIGNvdmVyYWdlUGF0aElnbm9yZVBhdHRlcm5zOiBbJy9ub2RlX21vZHVsZXMvJ10sXG4gICAgICAgIHRlc3RQYXRoSWdub3JlUGF0dGVybnM6IFsnL25vZGVfbW9kdWxlcy8nXSxcbiAgICAgICAgd2F0Y2hQYXRoSWdub3JlUGF0dGVybnM6IFsnL25vZGVfbW9kdWxlcy8nXSxcbiAgICAgICAgcmVwb3J0ZXJzOiBbXG4gICAgICAgICAgJ2RlZmF1bHQnLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgICdqZXN0LWp1bml0JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb3V0cHV0RGlyZWN0b3J5OiAndGVzdC1yZXBvcnRzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgXSxcbiAgICAgICAgdHJhbnNmb3JtOiB7XG4gICAgICAgICAgJ14uK1xcXFwuW3Rdc3g/JCc6IFtcbiAgICAgICAgICAgICd0cy1qZXN0JyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHNjb25maWc6ICh0aGlzLnByb2plY3QgYXMgUHJvamVjdFR5cGVzKS50eXBlc2NyaXB0Q29uZmlnPy5jb25maWdGaWxlTmFtZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHByb3RlY3RlZCBvdmVycmlkZSBnZXQgYWRkaXRpb25hbElnbm9yZVBhdHRlcm5zKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gWycvY292ZXJhZ2UvJywgJy90ZXN0LXJlcG9ydHMvJywgJy9qdW5pdC54bWwnXTtcbiAgfVxuXG4gIHB1YmxpYyBvdmVycmlkZSByZWdpc3RlckNvbmZpZygpOiB2b2lkIHtcbiAgICBpZiAoaXNWYWxpZFByb2plY3QodGhpcy5wcm9qZWN0KSkge1xuICAgICAgKHRoaXMucHJvamVjdCBhcyBQcm9qZWN0VHlwZXMpLm5wbUNvbmZpZz8uYWRkRGV2RGVwZW5kZW5jaWVzKHRoaXMuYWRkaXRpb25hbERldkRlcGVuZGVuY2llcyk7XG4gICAgICAodGhpcy5wcm9qZWN0IGFzIFByb2plY3RUeXBlcykubnBtQ29uZmlnPy5hZGRTY3JpcHRzKHRoaXMuYWRkaXRpb25hbFNjcmlwdHMpO1xuICAgICAgKHRoaXMucHJvamVjdCBhcyBQcm9qZWN0VHlwZXMpLm5wbUNvbmZpZz8uYWRkU2V0dGluZ3ModGhpcy5hZGRpdGlvbmFsU2V0dGluZ3MpO1xuICAgICAgKHRoaXMucHJvamVjdCBhcyBQcm9qZWN0VHlwZXMpLnByZXR0aWVyQ29uZmlnPy5hZGRJZ25vcmVQYXR0ZXJucyh0aGlzLmFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJucyk7XG4gICAgICAodGhpcy5wcm9qZWN0IGFzIFByb2plY3RUeXBlcykuZ2l0Q29uZmlnPy5hZGRJZ25vcmVQYXR0ZXJucyh0aGlzLmFkZGl0aW9uYWxJZ25vcmVQYXR0ZXJucyk7XG4gICAgfVxuICB9XG59XG4iXX0=