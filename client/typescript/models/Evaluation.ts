/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EvaluationTypeEnum } from './EvaluationTypeEnum';
import type { OutputTypeEnum } from './OutputTypeEnum';
import type { UserBasic } from './UserBasic';
export type Evaluation = {
    readonly id: string;
    name: string;
    description?: string;
    enabled?: boolean;
    evaluation_type: EvaluationTypeEnum;
    evaluation_config?: any;
    output_type: OutputTypeEnum;
    output_config?: any;
    conditions?: any;
    readonly created_at: string;
    readonly updated_at: string;
    readonly created_by: UserBasic;
    deleted?: boolean;
};

