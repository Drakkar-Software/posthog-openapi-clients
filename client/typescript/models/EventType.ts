/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ElementType } from './ElementType';
import type { Person } from './Person';
export type EventType = {
    distinct_id: string;
    elements: Array<ElementType>;
    elements_chain?: (string | null);
    event: string;
    id: string;
    person?: (Person | null);
    properties: Record<string, any>;
    timestamp: string;
    uuid?: (string | null);
};

