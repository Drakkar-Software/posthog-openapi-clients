/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MinimalFeatureFlag } from './MinimalFeatureFlag';
import type { SurveyType } from './SurveyType';
import type { UserBasic } from './UserBasic';
export type SurveySerializerCreateUpdateOnly = {
    readonly id: string;
    name: string;
    description?: string;
    type: SurveyType;
    readonly linked_flag: MinimalFeatureFlag;
    linked_flag_id?: number | null;
    targeting_flag_id?: number;
    readonly targeting_flag: MinimalFeatureFlag;
    readonly internal_targeting_flag: MinimalFeatureFlag;
    targeting_flag_filters?: any;
    remove_targeting_flag?: boolean | null;
    /**
     *
     * The `array` of questions included in the survey. Each question must conform to one of the defined question types: Basic, Link, Rating, or Multiple Choice.
     *
     * Basic (open-ended question)
     * - `type`: `open`
     * - `question`: The text of the question.
     * - `description`: Optional description of the question.
     * - `descriptionContentType`: Content type of the description (`html` or `text`).
     * - `optional`: Whether the question is optional (`boolean`).
     * - `buttonText`: Text displayed on the submit button.
     * - `branching`: Branching logic for the question. See branching types below for details.
     *
     * Link (a question with a link)
     * - `type`: `link`
     * - `question`: The text of the question.
     * - `description`: Optional description of the question.
     * - `descriptionContentType`: Content type of the description (`html` or `text`).
     * - `optional`: Whether the question is optional (`boolean`).
     * - `buttonText`: Text displayed on the submit button.
     * - `link`: The URL associated with the question.
     * - `branching`: Branching logic for the question. See branching types below for details.
     *
     * Rating (a question with a rating scale)
     * - `type`: `rating`
     * - `question`: The text of the question.
     * - `description`: Optional description of the question.
     * - `descriptionContentType`: Content type of the description (`html` or `text`).
     * - `optional`: Whether the question is optional (`boolean`).
     * - `buttonText`: Text displayed on the submit button.
     * - `display`: Display style of the rating (`number` or `emoji`).
     * - `scale`: The scale of the rating (`number`).
     * - `lowerBoundLabel`: Label for the lower bound of the scale.
     * - `upperBoundLabel`: Label for the upper bound of the scale.
     * - `branching`: Branching logic for the question. See branching types below for details.
     *
     * Multiple choice
     * - `type`: `single_choice` or `multiple_choice`
     * - `question`: The text of the question.
     * - `description`: Optional description of the question.
     * - `descriptionContentType`: Content type of the description (`html` or `text`).
     * - `optional`: Whether the question is optional (`boolean`).
     * - `buttonText`: Text displayed on the submit button.
     * - `choices`: An array of choices for the question.
     * - `shuffleOptions`: Whether to shuffle the order of the choices (`boolean`).
     * - `hasOpenChoice`: Whether the question allows an open-ended response (`boolean`).
     * - `branching`: Branching logic for the question. See branching types below for details.
     *
     * Branching logic can be one of the following types:
     *
     * Next question: Proceeds to the next question
     * ```json
     * {
         * "type": "next_question"
         * }
         * ```
         *
         * End: Ends the survey, optionally displaying a confirmation message.
         * ```json
         * {
             * "type": "end"
             * }
             * ```
             *
             * Response-based: Branches based on the response values. Available for the `rating` and `single_choice` question types.
             * ```json
             * {
                 * "type": "response_based",
                 * "responseValues": {
                     * "responseKey": "value"
                     * }
                     * }
                     * ```
                     *
                     * Specific question: Proceeds to a specific question by index.
                     * ```json
                     * {
                         * "type": "specific_question",
                         * "index": 2
                         * }
                         * ```
                         *
                         */
                        questions?: any;
                        conditions?: any;
                        appearance?: any;
                        readonly created_at: string;
                        readonly created_by: UserBasic;
                        start_date?: string | null;
                        end_date?: string | null;
                        archived?: boolean;
                        responses_limit?: number | null;
                        iteration_count?: number | null;
                        iteration_frequency_days?: number | null;
                        iteration_start_dates?: Array<string | null> | null;
                        current_iteration?: number | null;
                        current_iteration_start_date?: string | null;
                    };

