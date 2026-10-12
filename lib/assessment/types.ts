export type Service =
  | "HOUSEKEEPER"
  | "HOUSEKEEPER_NANNY"
  | "HOUSEKEEPER_ELDERLY"
  | "NANNY"
  | "ELDERLY_CAREGIVER"
  | "CUSTOM";

export type QuestionId =
  | "needs" | "household" | "housework" | "home" | "members"
  | "childcare" | "eldercare" | "priority" | "arrangement"
  | "schedule" | "budget" | "start" | "notes";

export interface QuestionOption {
  value: string;
  label: string;
}

export interface Question {
  id: QuestionId;
  question: string;
  type: "multi" | "single" | "textarea";
  required: boolean;
  options?: QuestionOption[];
  exclusiveValues?: string[]; // these values cannot coexist with others
  placeholder?: string;
  maxLength?: number;
}

export interface Answers {
  needs?: string[];
  household?: string[];
  housework?: string;
  home?: string;
  members?: string;
  childcare?: string;
  eldercare?: string;
  priority?: string;
  arrangement?: string;
  schedule?: string;
  budget?: string;
  start?: string;
  notes?: string;
}

export interface AssessmentResult {
  service: Service;
  reasons: string[];
  alternative?: Service;
  specialist_review_required: boolean;
  precautions: string[];
  rule_engine_version: string;
}

export interface LeadData {
  full_name: string;
  phone_number: string;
  province: string;
  preferred_contact_method?: string;
  privacy_acknowledged: boolean;
  contact_consent: boolean;
  marketing_consent: boolean;
}
