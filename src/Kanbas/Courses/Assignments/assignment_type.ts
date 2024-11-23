export type Assignment = {
  _id: string;
  title: string;
  course: string;
  available_date: string;
  available_time: string;
  due_by_date: string;
  due_by_time: string;
  points: string;
  assigned_to: string;
  until_date?: string;
  until_time?: string;
  description?: string;
  group?: string;
  grade_display?: string;
  submission_type?: string;
  entry_options?: string[];
};

export const canBeAssignment = (obj: any) => {
  const exists: boolean =
    obj !== null &&
    typeof obj._id === "string" &&
    typeof obj.title === "string" &&
    typeof obj.course === "string" &&
    typeof obj.available_date === "string" &&
    typeof obj.available_time === "string" &&
    typeof obj.due_by_date === "string" &&
    typeof obj.due_by_time === "string" &&
    typeof obj.points === "string" &&
    typeof obj.assigned_to === "string";

  const empty: boolean =
    obj._id === "" ||
    obj.title === "" ||
    obj.course === "" ||
    obj.available_date === "" ||
    obj.available_time === "" ||
    obj.due_by_date === "" ||
    obj.due_by_time === "" ||
    obj.points === "" ||
    obj.assigned_to === "";

  const optionalAttributes: boolean =
    (obj.until_date === undefined || typeof obj.until_date === "string") &&
    (obj.until_time === undefined || typeof obj.until_time === "string") &&
    (obj.description === undefined || typeof obj.description === "string") &&
    (obj.group === undefined || typeof obj.group === "string") &&
    (obj.grade_display === undefined ||
      typeof obj.grade_display === "string") &&
    (obj.submission_type === undefined ||
      typeof obj.submission_type === "string") &&
    (obj.entry_options === undefined ||
      (Array.isArray(obj.entry_options) &&
        obj.entry_options.every((entry: any) => typeof entry === "string")));

  return exists && !empty && optionalAttributes;
};
